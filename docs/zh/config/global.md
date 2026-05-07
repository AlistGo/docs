---
# This is the icon of the page
icon: iconfont icon-chrome
# This control sidebar order
order: 9
# A page can have multiple categories
category:
  - Config
# A page can have multiple tags
tag:
  - Config
  - Settings
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 全局设置

:::tip
支持版本：

- 设备会话数量限制、淘汰策略和 TTL 设置：`>= v3.52.0`
:::

## **隐藏文件**

匹配被正则表达式（`javascript`）隐藏的文件。不明白的不要乱填。错误的正则表达式会导致前端页面崩溃。每行一个。默认情况下，有一个示例表达式`/\/README.md/i`将 README.md 从所有目录中隐藏。

并不是真的在隐藏。它仍然存在于 api 返回的列表中，只是没有出现在前端列表中。因此，如果您想真正隐藏，请添加[元信息](../guide/advanced/meta.md)。

<br/>



## **打包下载**

是否开启文件打包下载，默认为 true。【不推荐使用尤其是文件很大很多时】

- 推荐使用将文件推送到Aria2进行下载，支持下载文件夹保存目录结构
- 详细查看【[两个Aria2有什么区别](./other.md#其他)】

<br/>



## **自定义头部**

在此处设置的任何内容都会自动放置在网页头部的开头

- 如何配置PWA（Desktop、Android、IOS）：**[alist/issues/6724](https://github.com/alist-org/alist/issues/6724#issuecomment-2220251541)**

<br/>



## **自定义body**

在此处设置的任何内容都会自动放置在网页正文的末尾

<br/>



## **链接过期时间**

直接链接的过期时间，以小时为单位。如果为 0，则不会过期。默认值为 0。

::: warning
只有加了密码的路径的直链才会有过期时间，否则不会过期。因为过期时间是加到sign查询参数中的，没有加密码的路径是不会检查sign的。
:::

<br/>



## **隐私正则表达式**

不想在错误消息中显示的内容，每行一个正则表达式（在 `Golang` 中）。匹配的内容将被替换为对应长度的*。

<br/>



## **ocr api**

用于识别验证码。你可以自己部署：https://hub.docker.com/r/xhofe/ddddocr_server 默认的 ocr api 部署在 [koyeb](https://app.koyeb.com/) 上（无可用性保证），不建议在生产环境中使用。

<br/>



## **签名所有**

向所有文件的直接链接添加签名(无论是否有密码) 即 `https://xxxx.com/d/xx?sign=vUQ5KFXnwMseKnIUXGRcfoG3cEHzKFBiPGp1NriMDXA=:0`

若需要关闭自行关闭即可，但需要注意安全问题，关闭签名后若站点能被公网访问，可能会被绕过密码访问私人文件。

还有两种方式也会携带 `sign?xxx`参数，1.添加存储勾选`启用签名`、2.元信息添加密码

三种方式的范围 `签名所有` > `元信息添加密码` > 添加存储勾选`启用签名`

1. 签名所有：如果开启此选项，后续无论是否元信息加密、添加存储是否勾选`启用签名`都会携带sign参数
2. 元信息添加密码：只是在这条元信息路径下的文件都会携带sign参数
   - 如果开启**应用到子文件夹**，此路径下所有文件都会携带sign参数
3. 添加存储勾选`启用签名`：单独只这个存储驱动携带sign参数

<br/>



## **转发直链参数**

可以自行前往查看：**https://github.com/alist-org/alist/issues/3123**

<br/>



## **文件名字符映射**

主要是来映射一些特殊符 让Alist来正常工作

比如 `/` 符号在Alist程序里面是 路径符号 有些人的文件带 `/` 符号导致文件中途断开无法查看等错误，我们就可以通过这种方式来映射转换一下。

```json
{"/": "|","xx1":"xx1","xx2":"xx2"}
```

默认的是开头的第一个(`"/": "|","`)，后续有想自己添加的可以自己在后面添加，格式就是如上格式很简单。

<br/>



## **启用 Webauthn 登录**

**Webauthn** 是什么? 自己在搜索引擎吧，今天教大家如何使用

在后台`设置`-->`全局`-->打开`启用 Webauthn 登录`，回到后台`个人资料`-->绑定`添加 Webauthn 凭据`

- `添加 Webauthn 凭据`使用的是本台电脑的`PIN`或者`配套设备(例如手环,手表)`【支持 Windows Hello配置中的所有选项,例如`人脸`和`指纹`】
- 就像绑定单点登录那样进行绑定，绑定好后我们就可以使用 **`Webauthn`** 进行登录了
  - 在登录页面点击最右侧的登录按钮，输入我们的用户名，点击登录，然后再解锁需要的`Webauthn`验证方式就可以登录
- 添加`Webauthn`需要一个安全来源，只能在`https`或者`localhost`使用
  - 不安全的来源，例如：http，192.168.x.x，127.0.0.1，或者直接使用服务器IP，等这些地方不可以使用

<br/>

## **最大设备数**

全局活跃设备会话数量上限。

- `0` 表示不限制
- 会在用户登录生成设备会话时生效

<br/>

## **设备淘汰策略**

当新的登录会超过 `最大设备数` 时，后端的处理方式。

- `deny`：拒绝新的登录
- `evict_oldest`：先让最早的活跃设备会话失效

<br/>

## **设备会话 TTL**

过期 / 失效设备会话记录的保留时间，单位为秒。

- 用于自动清理 inactive / expired 的设备会话记录
