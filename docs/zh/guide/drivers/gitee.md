---
icon: iconfont icon-state
order: 272
category:
  - Guide
tag:
  - Storage
  - Guide
  - "302"
sticky: true
star: true
---

# Gitee

:::info 支持版本
`>= v3.55.0` 可用。
:::

## 概述

`Gitee` 是基于 Gitee Contents API 的仓库浏览驱动。

当前驱动是只读的：可以列出仓库内容并下载文件，但不会把修改提交回 Gitee。

## 配置项

### Owner / Repo

必填。假设仓库地址是 `https://gitee.com/owner/repo`，则填写：

- `Owner`：`owner`
- `Repo`：`repo`

### Ref

要浏览的分支、标签或提交 SHA。留空时，AList 会自动使用仓库默认分支。

### Root Folder Path

可选的仓库子目录路径，例如 `/docs`。

### Token

可选。访问私有仓库，或避免匿名请求限流时再填写。

### Endpoint

Gitee API 地址。除非你有自定义兼容接口，否则保持默认即可，默认值是 `https://gitee.com/api/v5`。

### Download Proxy

可选的下载前缀，例如 `https://mirror.example.com/`。

### Cookie

可选。来自 Gitee 用户信息请求返回的 Cookie；当原始文件下载需要登录态时会有帮助。

## 说明

- 如果 `Ref` 指向 tag 或 commit SHA，本质上挂载的是一个固定快照。
- `Download proxy` 只会改写最终下载链接前缀，不会改变仓库列表接口的读取方式。
