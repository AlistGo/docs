---
icon: iconfont icon-state
order: 188
category:
  - Guide
tag:
  - Storage
  - Guide
  - "302"
sticky: true
star: true
---

# Gofile

:::info 支持版本
驱动本体在 `>= v3.53.0` 可用。

`Direct link expiry` 配置项在 `>= v3.54.0` 可用。
:::

官网：**https://gofile.io**

## 概述

`Gofile` 是面向个人 Gofile 账号的可读写驱动。

如果 `Root folder ID` 留空，AList 会在初始化时自动读取账号根目录。

## 配置项

### API Token

必填。从 Gofile 个人资料页获取。

### Root Folder ID

可选。留空时使用 AList 自动识别出来的账号根目录。

### Link Expiry

AList 侧对生成直链的缓存时长，单位是天。

- `0`：不缓存，每次都重新向 Gofile 申请新链接
- `> 0`：在 AList 中缓存对应天数

### Direct Link Expiry

AList 向 Gofile 申请直链时传给上游的服务器侧过期时间，单位是小时。

- `0`：不上游过期
- `> 0`：让 Gofile 在指定小时后使该直链过期

## 说明

- 修改 `Direct link expiry` 只会影响之后新生成的链接。
- 这个驱动支持上传、建目录、重命名、移动、复制和删除。
