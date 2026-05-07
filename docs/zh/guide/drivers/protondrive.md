---
icon: iconfont icon-state
order: 286
category:
  - Guide
tag:
  - Storage
  - Guide
  - "本地代理"
sticky: true
star: true
---

# Proton Drive

:::info 支持版本
`>= v3.54.0` 可用。
:::

官网：**https://drive.proton.me**

## 概述

`ProtonDrive` 是面向个人 Proton Drive 账号的可读写驱动。

## 配置项

### Username / Password

必填的 Proton 账号和密码。

### TwoFA Code

可选的双重认证验证码。当账号登录要求 2FA，或者 Proton 要求重新认证时填写。

### Root Folder Path

要挂载的 Proton Drive 路径，默认是 `/`。

## 说明

- 首次成功登录后，驱动会在本地缓存可复用凭据，后续重启通常不需要每次都完整重新登录。
- 支持文件复制，但暂不支持目录复制。
- 下载不是直接返回公开 Proton CDN 链接，而是通过 AList 创建的临时本地桥接地址提供。
