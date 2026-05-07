---
icon: iconfont icon-state
order: 281
category:
  - Guide
tag:
  - Storage
  - Guide
  - "本地代理"
sticky: true
star: true
---

# Streamtape

:::info 支持版本
`>= v3.58.0` 可用。
:::

官网：**https://streamtape.com**

## 概述

`Streamtape` 是一个面向个人账号的可读写驱动。

你需要从 Streamtape 账号设置页获取 `API Login` 和 `API Key`。`Root Folder ID` 默认是 `0`，表示账号根目录。

## 配置项

### API Login / API Key

必填。到 Streamtape 账号设置页复制这两个值。

### Root Folder ID

挂根目录时保留 `0` 即可。只有想直接挂载某个子目录时，才需要改成对应文件夹 ID。

### Enable Range Control

开启后，AList 会在读取 Streamtape 链接前先重整 Range 请求，主要用于提升浏览器预览和流式播放的稳定性。

### Range Mode

- `chunk`：按固定分块读取，配合 `Range chunk mb` 和 `Range concurrency`
- `full`：使用单次完整 Range 请求
- `percent`：按文件总大小百分比分块，配合 `Range percent`

### Range Chunk MB / Range Concurrency / Range Percent

只有当前 `Range mode` 对应的字段会生效。

## 说明

- 这个驱动的下载和预览都会经过 AList 代理。
- 当前驱动还不支持 `Copy`。
- 如果播放不稳定，建议先保持 `Enable range control` 开启，并从 `chunk`、`8 MB`、并发 `4` 开始调。
