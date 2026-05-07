---
icon: iconfont icon-state
order: 202
category:
  - Guide
tag:
  - Storage
  - Guide
  - "本地代理"
sticky: true
star: true
---

# FTPS

:::info 支持版本
`>= v3.58.0` 可用。
:::

## 概述

`FTPS` 是 FTP over TLS 驱动。如果你只需要明文 FTP，请继续使用原有的 `FTP` 驱动。

## 配置项

### Address

带端口的 FTPS 服务地址，例如 `example.com:21` 或 `example.com:990`。

### Username / Password

FTPS 服务器登录账号和密码。

### Root Folder Path

远端服务器上的挂载根路径，默认是 `/`。

### Encoding

可选的文件名编码，作用与 `FTP` 驱动一致。

### TLS Mode

- `Explicit`：连接后再执行 STARTTLS，通常使用端口 `21`
- `Implicit`：从建立连接开始就直接走 TLS，通常使用端口 `990`

### TLS Insecure Skip Verify

允许不安全的 TLS 连接，例如服务器使用自签名证书时。

## 说明

- 传输会经过 AList 本机中转，所以 AList 所在服务器必须能直接访问 FTPS 服务器。
- 只有在明确了解证书风险时，才建议开启 `TLS Insecure Skip Verify`。
