---
icon: iconfont icon-state
order: 285
category:
  - Guide
tag:
  - Storage
  - Guide
  - "302"
sticky: true
star: true
---

# BitQiu

:::info 支持版本
`>= v3.55.0` 可用。
:::

官网：**https://pan.bitqiu.com**

## 概述

`BitQiu` 是比特球个人网盘的可读写驱动。

## 配置项

### Username / Password

BitQiu 账号和密码。

### Root Folder ID

默认是 `0`，表示账号根目录。只有想直接挂某个子目录时，才需要改成对应文件夹 ID。

### User Platform

可选的设备标识。如果留空，AList 会自动生成一个并回写保存到驱动配置中。

### Order Type / Order Desc

控制上游列表接口的排序字段和排序方向。

### Page Size

每页请求的条目数量，默认是 `24`。

### User Agent

可选的上游请求 UA。除非 BitQiu 网页限制发生变化，否则建议保留默认值。

## 说明

- 这个驱动支持上传、建目录、重命名、移动、复制和删除。
- 下载返回的是 BitQiu 直链。
- `Page Size` 越大，请求次数越少，但单次列表响应也会更大。
