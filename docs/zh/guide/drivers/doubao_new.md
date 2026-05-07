---
icon: iconfont icon-state
order: 284
category:
  - Guide
tag:
  - Storage
  - Guide
  - "302"
sticky: true
star: true
---

# Doubao New（豆包新版）

:::info 支持版本
- 驱动可用：`>= v3.57.0`
- 内置 PDF 预览（`Doubao Preview`）：`>= v3.57.0`
:::

## 概述

`DoubaoNew` 是基于新版豆包 / 飞书侧接口实现的驱动。

## 配置项

### Authorization

用于 `Authorization` 请求头的 DPoP access token。如果你只粘贴原始 token 值，AList 会自动补上 `DPoP ` 前缀。

### Dpop

`DPoP` 请求头的值。

### Cookie

可选的快捷方式。如果 Cookie 中包含 `LARK_SUITE_ACCESS_TOKEN` 和 `LARK_SUITE_DPOP`，AList 可以自动从里面提取 `Authorization` 和 `Dpop`。

### Root Folder ID

留空时挂载顶层目录。只有想直接挂某个子目录时，才需要改成对应目录 token。

### Debug

开启上传相关的调试日志。

## 说明

- 这个驱动支持列表、上传、建目录、移动、重命名和删除。
- 当前还不支持 `Copy`。
- 当服务端返回预览元数据时，PDF 文件可以使用内置的 Doubao 预览。AList 会按页读取平台生成的预览图片，而不是在本地自行转换 PDF。
- 如果 token 过期或账号状态变化导致请求失败，需要重新从豆包网页端抓取这些头信息后再保存一次驱动。
