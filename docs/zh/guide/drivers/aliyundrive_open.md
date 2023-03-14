---
# This is the icon of the page
icon: state
# This control sidebar order
order: 3
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 阿里云盘 Open

:::tip

阿里云盘 open，使用的是官方授权 API 开发。

:::

<script setup lang="ts">
import { ref } from "vue";
const minutes = ref<string|number>("unknown")
const max = ref<string|number>("unknown")
const getLimit = async ()=>{
  const resp = await fetch("https://api.nn.ci/alist/ali_open/limit")
  const res = await resp.json()
  minutes.value = res.minutes
  max.value = res.max
}
typeof fetch !== "undefined" && getLimit()
</script>

:::danger 请仔细阅读注意事项

1.  ==此工具获取的刷新令牌仅可以用于 **阿里云盘开放平台** 存储挂载方式== 
2. AList 挂载时填写的 token 也应该是这个工具提供的，之前方式获取的不可以
3. 暂不适用于其他，同时也仅限用于 Alist 使用
4. 同一 IP 在{{ minutes }}分钟内请求{{ max }}次，会出现 **TooManyRequests** :no_entry_sign:避免滥用，请勿滥用:no_entry_sign:
   - 例如在 保存/编辑 的时候算一次请求，查看文件看视频下载不算。

:::

## 刷新令牌

前往：**https://alist.nn.ci/tool/aliyundrive/request**

#### 获取示意图

以下两种方式都可以获得 **refresh_token**

:::tabs#alitoken

@tab Go to login

![token](/img/drivers/aliyun/token1.png)

@tab Scan QrCoden

![token](/img/drivers/aliyun/token2.png)

:::

## Root folder file_id

打开阿里云盘官网，点击进入要设置的文件夹时点击 URL 后面的字符串

如 https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940

这个文件夹的 file_id 即为 `5fe01e1830601baf774e4827a9fb8fb2b5bf7940`

![file_id](/img/drivers/aliyundrive.png)

## 客户端 ID，秘钥

正常用户不需要填写为空即可，如果自己申请了官方授权也可以使用自己的进行填写，为空时默认使用 AList 提供的。



## 移除方式

- 回收站：在AList删除后进入网盘回收站，会占用云盘空间，但是后期如果误删可以找回。
- 删除：直接删除不会停留在回收站，不会占用云盘空间，但是后期如果误删可以不能找回。
  - 注：请勿泄露自己阿里云盘Open获取的Token，若不小心泄露请立刻马上去  [**其他说明 ¹**](#打开%20阿里云盘%20APP%20-->%20我的%20-->右上角设置齿轮%20-->%20隐私设置%20-->%20授权管理%20-->%20点击%20AList%20进行查看) 解除授权保护您账号的安全，解除授权后2小时后（建议多等待几个小时后再去授权获取Token）



## 其他说明

一、

> AList 仅获取了 云盘用户 (**名称 头像 ¹**)，(**访问文件权限 ²**)和(**写入文件权限 ³**)，未获取手机号权限
>
> 详情可以通过以下两种方式查看
>
> 1. 扫码获取刷新令牌时的**提示**
> 2. ##### 打开 **阿里云盘 APP --> 我的 -->右上角设置齿轮 --> 隐私设置 --> 授权管理 --> 点击 AList** 进行查看
>    
>    - 若不使用了可以随时手动解除权限

二、

> 默认使用的是阿里云盘自带播放器 - **Aliyun Video Previewer**
>
> 上传到云盘的视频，会经过转码服务转成 H.264 编码的视频流。（好处是 IOS 可以播放了...嗯 应该是这样）
>
> - 新上传到云盘的视频，默认只预转码视频的前 30s。第一次播放时会触发完整的视频转码。转码后的视频会缓存，之后再次触发播放不需要重新转码。
> - 不足 30s 的视频不会触发预转码，只会在第一次播放时开始转码。
> - 实时转码需要一定时间。
> - 画质分别为：LD|SD|HD|FHD|QHD



## 默认使用的下载方式

```mermaid
---
title: 默认使用的那种下载方式？
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|默认|a2[用户设备]
    classDef someclass fill:#f96
    c1[本机代理]-.备选.->a2[用户设备]
    b1[代理URL]-.备选.->a2[用户设备]
    click a1 "../drivers/common.html#webdav-策略"
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```
