<script setup lang="ts">
import { NInput, NSpace, NButton, NAlert, NTag } from 'naive-ui';
import { computed, onUnmounted, reactive, ref, watch } from 'vue';
import { api } from '../api';

const props = defineProps<{ lang?: string }>();
const text = (en: string, zh: string) => props.lang === 'zh' ? zh : en;
const mode = ref<'password' | 'sms' | 'qr'>('password');
const input = reactive({ phone: '', password: '', verify_code: '', uuid: '', captcha: '' });
const error = ref('');
const notice = ref('');
const busy = ref(false);
const passwordVerified = ref(false);
const captchaURL = ref('');
const qrImage = ref('');
const token = ref<{ access_token: string; refresh_token?: string }>();
const seconds = ref(0);
let cooldown: ReturnType<typeof setInterval> | undefined;
let poll: ReturnType<typeof setTimeout> | undefined;
let expiry: ReturnType<typeof setTimeout> | undefined;
let generation = 0;
const requests = new Set<AbortController>();
const canSubmit = computed(() => /^1\d{10}$/.test(input.phone) && (mode.value !== 'password' || !!input.password));

function stopQR() {
  clearTimeout(poll);
  clearTimeout(expiry);
}
function cancel() {
  generation++;
  stopQR();
  requests.forEach(controller => controller.abort());
  requests.clear();
  busy.value = false;
}
function reset() {
  cancel();
  passwordVerified.value = false;
  token.value = undefined;
  error.value = '';
  notice.value = '';
  input.verify_code = '';
  input.uuid = '';
  input.captcha = '';
  captchaURL.value = '';
  qrImage.value = '';
}
watch(mode, () => { reset(); input.password = ''; });
watch(() => [input.phone, input.password], reset);
onUnmounted(() => { cancel(); clearInterval(cooldown); });

function refreshCaptcha() {
  input.uuid = crypto.randomUUID();
  input.captcha = '';
  captchaURL.value = api(`/alist/wopan/captcha?uuid=${encodeURIComponent(input.uuid)}`);
}
function startCooldown() {
  const until = Date.now() + 60000;
  clearInterval(cooldown);
  seconds.value = 60;
  cooldown = setInterval(() => {
    seconds.value = Math.max(0, Math.ceil((until - Date.now()) / 1000));
    if (!seconds.value) clearInterval(cooldown);
  }, 250);
}
async function request(path: string, body?: object) {
  const controller = new AbortController();
  const current = generation;
  requests.add(controller);
  try {
    const response = await fetch(api(`/alist/wopan/${path}`), {
      signal: controller.signal,
      ...(body ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {}),
    });
    const data = await response.json();
    if (current !== generation) throw new DOMException('Cancelled', 'AbortError');
    if (!response.ok || data.error) throw new Error(data.error || `HTTP ${response.status}`);
    return data;
  } finally {
    requests.delete(controller);
  }
}
function checkBusiness(data: any, allowed = ['0000']) {
  const rsp = data.RSP;
  if (rsp?.DATA?.isNeedVerfyCode == 1 || rsp?.RSP_CODE === '6007') refreshCaptcha();
  if (rsp && !allowed.includes(rsp.RSP_CODE)) {
    throw new Error(rsp.RSP_DESC || data.MSG || rsp.RSP_CODE);
  }
  if (data.STATUS && data.STATUS !== '200') throw new Error(data.MSG || data.STATUS);
  return rsp?.DATA ?? data;
}
async function action(task: () => Promise<void>) {
  if (busy.value) return;
  const current = generation;
  busy.value = true;
  error.value = '';
  try { await task(); }
  catch (err) {
    if (current === generation && (err as Error).name !== 'AbortError') error.value = (err as Error).message;
  } finally { if (current === generation) busy.value = false; }
}
function acceptToken(data: any) {
  if (!data.access_token) throw new Error(text('No access token returned. Please retry.', '未返回访问令牌，请重试。'));
  token.value = { access_token: data.access_token, refresh_token: data.refresh_token };
  notice.value = text('Login successful.', '登录成功。');
  stopQR();
}
function checkCaptcha() {
  if (!canSubmit.value || busy.value || token.value) return;
  return action(async () => { const data = checkBusiness(await request('check_captcha', { phone: input.phone })); if (data.isNeedVerfyCode == 1) refreshCaptcha(); });
}
function sendSMS() {
  return action(async () => {
    checkBusiness(await request('send_sms', input));
    startCooldown();
    notice.value = text('SMS sent. Enter the code below.', '短信已发送，请输入下方验证码。');
  });
}
function submit() {
  return action(async () => {
    if (mode.value === 'password' && !passwordVerified.value) {
      const data = await request('login', input);
      checkBusiness(data, ['0000', '6008']);
      passwordVerified.value = true;
      input.verify_code = '';
      input.uuid = '';
      input.captcha = '';
      captchaURL.value = '';
      if (data.RSP?.RSP_CODE === '6008') {
        notice.value = text('Password accepted. Send an SMS code to continue.', '密码验证通过，请点击发送短信继续。');
      } else {
        startCooldown();
        notice.value = text('Password accepted. Enter the SMS code to finish.', '密码验证通过，请输入短信验证码完成登录。');
      }
    } else {
      acceptToken(checkBusiness(await request(mode.value === 'sms' ? 'sms_login' : 'verify_code', input)));
    }
  });
}
function generateQR() {
  cancel();
  qrImage.value = '';
  token.value = undefined;
  notice.value = '';
  return action(async () => {
    const current = generation;
    const data = await request('qr');
    if (data.meta?.code !== '200' || !data.result?.image || !data.result?.uuid) {
      throw new Error(data.meta?.message || text('Unable to generate QR code.', '二维码生成失败。'));
    }
    qrImage.value = `data:image/png;base64,${data.result.image}`;
    notice.value = text('Waiting for scan.', '等待扫码。');
    const uuid = data.result.uuid;
    expiry = setTimeout(() => {
      cancel();
      qrImage.value = '';
      notice.value = text('QR code expired. Generate a new one.', '二维码已过期，请重新生成。');
    }, 60000);
    async function tick() {
      if (current !== generation) return;
      try {
        const result = await request(`qr/status?uuid=${encodeURIComponent(uuid)}`);
        if (result.meta?.code !== '200') throw new Error(result.meta?.message || text('QR code unavailable.', '二维码不可用。'));
        const state = result.result?.state;
        if (state === 3) {
          acceptToken({ access_token: result.result.token, refresh_token: result.result.refreshToken });
          return;
        }
        if (![1, 2].includes(state)) throw new Error(text('QR code expired. Generate a new one.', '二维码已过期，请重新生成。'));
        notice.value = state === 2 ? text('Scanned. Confirm on your phone.', '已扫码，请在手机端确认。') : text('Waiting for scan.', '等待扫码。');
        poll = setTimeout(tick, 2000);
      } catch (err) {
        if (current === generation && (err as Error).name !== 'AbortError') {
          stopQR();
          error.value = (err as Error).message;
          qrImage.value = '';
        }
      }
    }
    poll = setTimeout(tick, 2000);
  });
}
</script>

<template>
  <NSpace size="large" vertical>
    <NSpace role="group" :aria-label="text('Login method', '登录方式')">
      <NButton :type="mode === 'password' ? 'primary' : 'default'" @click="mode = 'password'">{{ text('Password', '账号密码') }}</NButton>
      <NButton :type="mode === 'sms' ? 'primary' : 'default'" @click="mode = 'sms'">{{ text('SMS code', '短信验证码') }}</NButton>
      <NButton :type="mode === 'qr' ? 'primary' : 'default'" @click="mode = 'qr'">{{ text('APP QR code', 'APP 扫码') }}</NButton>
    </NSpace>
    <template v-if="mode !== 'qr'">
      <NInput v-model:value="input.phone" :placeholder="text('Phone number', '手机号')" :aria-label="text('Phone number', '手机号')" :maxlength="11" @blur="checkCaptcha" />
      <NInput v-if="mode === 'password'" v-model:value="input.password" type="password" show-password-on="click" :placeholder="text('Password', '密码')" :aria-label="text('Password', '密码')" @blur="checkCaptcha" />
      <NSpace v-if="captchaURL" vertical>
        <NSpace align="center">
          <img :src="captchaURL" :alt="text('Image verification code', '图形验证码')" @error="error = text('Unable to load captcha. Refresh to retry.', '图形验证码加载失败，请刷新重试。')" />
          <NButton @click="refreshCaptcha" :disabled="busy">{{ text('Refresh captcha', '刷新图形验证码') }}</NButton>
        </NSpace>
        <NInput v-model:value="input.captcha" :placeholder="text('Image verification code', '图形验证码')" :aria-label="text('Image verification code', '图形验证码')" />
      </NSpace>
      <template v-if="mode === 'sms' || passwordVerified">
        <NButton @click="sendSMS" :loading="busy" :disabled="!canSubmit || busy || seconds > 0 || !!token">{{ seconds > 0 ? `${seconds}s` : text('Send SMS code', '发送短信验证码') }}</NButton>
        <NInput v-model:value="input.verify_code" :maxlength="6" :placeholder="text('SMS code', '短信验证码')" :aria-label="text('SMS code', '短信验证码')" />
      </template>
      <NButton type="primary" block @click="submit" :loading="busy" :disabled="!canSubmit || busy || !!token || ((mode === 'sms' || passwordVerified) && !/^\d{6}$/.test(input.verify_code))">
        {{ mode === 'password' && !passwordVerified ? text('Verify password', '验证密码') : text('Get token', '获取令牌') }}
      </NButton>
    </template>
    <template v-else>
      <NAlert type="info">{{ text('Scan with the latest WoPan APP (scanner in My) and confirm on your phone.', '使用最新版联通云盘 APP「我的」右上角扫码，并在手机端确认。') }}</NAlert>
      <NButton type="primary" @click="generateQR" :loading="busy" :disabled="busy">{{ text('Generate / refresh QR code', '生成 / 刷新二维码') }}</NButton>
      <img v-if="qrImage" :src="qrImage" width="240" height="240" :alt="text('WoPan login QR code', '联通云盘登录二维码')" />
    </template>
    <div role="status" aria-live="polite">{{ notice }}</div>
    <NAlert v-if="error" type="error" :title="text('Error', '错误')">{{ error }}</NAlert>
    <template v-if="token">
      <div>refresh_token: <NTag v-if="token.refresh_token" :bordered="false" type="info">{{ token.refresh_token }}</NTag><span v-else>{{ text('Not returned by this login method.', '当前登录方式未返回刷新令牌。') }}</span></div>
      <div>access_token: <NTag :bordered="false" type="info">{{ token.access_token }}</NTag></div>
    </template>
  </NSpace>
</template>
