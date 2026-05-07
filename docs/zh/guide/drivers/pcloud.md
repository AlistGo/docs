---
icon: iconfont icon-state
order: 287
category:
  - Guide
tag:
  - Storage
  - Guide
  - "302"
sticky: true
star: true
---

# pCloud

:::info 支持版本
`>= v3.54.0` 可用。
:::

官网：**https://www.pcloud.com**

## 概述

`pCloud` 是面向个人 pCloud 账号的可读写驱动。

## 配置项

### Access Token

通过 pCloud 授权流程拿到的 OAuth token。

### Hostname

选择正确的 pCloud 区域：

- `us`
- `eu`

### Root Folder ID

可选。留空表示挂载账号根目录。你可以从这类 URL 里拿到目录 ID：`https://my.pcloud.com/#/filemanager?folder=12345678901`。

### Client ID / Client Secret

可选的自定义 OAuth 应用凭据。

## 说明

- `Hostname` 需要和你的 pCloud 账号区域一致。
- 驱动支持上传、重命名、移动、复制和递归删除。
- 下载直链会在需要时向 pCloud 实时请求。
