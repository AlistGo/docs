---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 256
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "本地代理"
  - "302"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---
# Cloudreve V4 / 分享

## 参数说明

### 地址

Cloudreve V4 服务器的地址，如：`https://www.example.com`，最好删掉后面的斜线`/`。

### 鉴权

Cloudreve V4 使用 Token 进行鉴权，这意味着挂载鉴权方式分为：

1. `用户名`+`密码`：会自动使用登录接口获取 Access Token 和 Refresh Token，存在验证码问题
2. 仅 `Refresh Token`：会自动使用刷新接口续期 Access Token 和 Refresh Token，参数可从浏览器请求或者 Local Storage 中找到
3. 仅 `Access Token`：能够临时使用，但会过期，且无法续期
4. 无：匿名用户，适用于公开分享
5. [引用](../drivers/common.html#引用)：`备注`填写 `ref:/{挂载路径}`，从 `已挂载的存储` 中引用认证、令牌等

Token 获取方法：

:::::tabs

@tab 本地存储

:::note
可能有多个会话，请选择要挂载的那个。
:::

![cloudreve_v4_token_local_storage](/img/drivers/cloudreve_v4/cloudreve_v4_token_local_storage.png)


@tab 浏览器请求

:::note
可能需要全新登录才能看到这个请求。
:::

![cloudreve_v4_token_resp](/img/drivers/cloudreve_v4/cloudreve_v4_token_resp.png)

:::::



### 根文件夹路径

Cloudreve V4 采用自定义 URI 作为路径。可从网页链接的 `?path=` 中获取。获取到的参数可能需要 [URL 解码](https://www.bing.com/search?q=URL+%E8%A7%A3%E7%A0%81)。

#### 挂载「我的文件」

默认为 `cloudreve://my/`，列出用户文件。

#### 挂载「分享」

支持挂载文件夹类型的分享，路径填写为：`cloudreve://{分享ID}@share/`。

- 分享ID为分享链接 `/s/` 后面的参数。

- 目前 Cloudreve V4 不支持「创建带密码的分享」。但如果数据迁移自 V3，先前创建的分享密码会被保留。带密码的分享链接（`/s/{分享ID}/{分享密码}`），对应的 URI 为 `cloudreve://{分享ID}:{分享密码}@share`。

### 启用文件夹大小

让 Cloudreve V4 服务端统计每个文件夹的大小，启用可能会造成服务端报错、运行缓慢，默认禁用。

### 启用缩略图

让 Cloudreve V4 服务端为每个文件生成略缩图，启用可能会造成服务端报错、运行缓慢，默认禁用。

### 启用版本上传

启用覆盖上传并保留之前的版本，需要消耗额外的空间。默认禁用，为覆盖上传前删除已有的文件。

### 自定义 UA

用于自定义请求使用的 `User-Agent` 头部信息。留空为 Alist 默认。

### 排序

支持更改请求列表时排序的参数。

## 上传

支持上传到的存储策略如下：

- 本机存储
- 从机存储
- OneDrive
- S3

上传的存储策略请在 Cloudreve V4 网页端进入相应文件夹中进行设置（需要服务端为 Cloudreve Pro）。

如果分享开启了上传权限，支持上传。需要服务端为用户组勾选「提升匿名用户权限」（需要服务端为 Cloudreve Pro）。


## **默认使用的下载方式**

```mermaid
---
title: 默认使用的哪种下载方式？
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

