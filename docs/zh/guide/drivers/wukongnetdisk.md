---
icon: iconfont icon-state
order: 283
category:
  - Guide
tag:
  - Storage
  - Guide
  - "302"
sticky: true
star: true
---

# WuKongNetdisk（悟空网盘）

:::info 支持版本
`>= v3.58.0` 可用。
:::

官网：**https://pan.wkbrowser.com**

## 概述

`WuKongNetdisk` 是悟空网盘的可读写驱动。

## 配置项

### Cookie

必填。登录 `https://pan.wkbrowser.com/` 后，从网页请求里抓取即可。

### Root Folder ID

默认是 `0`，表示账号根目录。只有想直接挂载某个子目录时，才需要改成对应文件夹 ID。

### Aid

上游网页接口使用的请求参数。除非服务端规则变化，否则保持默认值 `590353` 即可。

### Language

上游接口请求使用的语言，默认是 `zh`。

### Page Size

列出大目录时每次请求的批量大小，默认是 `100`。

## 说明

- AList 会自动为下载链接补上需要的 `Referer` 和 `Cookie` 请求头。
- 当前驱动还不支持 `Copy`。
- 这个驱动不支持覆盖上传；如果同名文件需要替换，通常要先删除旧文件或先改名。
