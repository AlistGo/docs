---
icon: iconfont icon-state
order: 202
category:
  - Guide
tag:
  - Storage
  - Guide
  - "Local Proxy"
sticky: true
star: true
---

# FTPS

:::info Supported version
Available in `>= v3.58.0`.
:::

## Overview

`FTPS` is the FTP-over-TLS driver. If you only need plain FTP, use the existing `FTP` driver instead.

## Config

### Address

FTPS server address with port, for example `example.com:21` or `example.com:990`.

### Username / Password

Login credentials for the FTPS server.

### Root Folder Path

Mounted root path on the remote server. The default is `/`.

### Encoding

Optional filename encoding, same purpose as the `FTP` driver.

### TLS Mode

- `Explicit`: STARTTLS after connecting, usually on port `21`
- `Implicit`: direct TLS from the beginning, usually on port `990`

### TLS Insecure Skip Verify

Allow insecure TLS connections, for example when the server uses a self-signed certificate.

## Notes

- Transfers are streamed through AList, so the AList server must be able to reach the FTPS server directly.
- Enable `TLS Insecure Skip Verify` only when you understand the certificate risk.
