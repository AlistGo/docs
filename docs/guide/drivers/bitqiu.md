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

:::info Supported version
Available in `>= v3.55.0`.
:::

Site: **https://pan.bitqiu.com**

## Overview

`BitQiu` is a read-write driver for BitQiu personal cloud storage.

## Config

### Username / Password

BitQiu account credentials.

### Root Folder ID

Defaults to `0`, which means the account root. Fill in another folder ID only if you want to mount a subfolder directly.

### User Platform

Optional device identifier. If you leave it empty, AList generates one automatically and saves it back to the driver.

### Order Type / Order Desc

Controls the upstream list ordering.

### Page Size

Number of entries requested per page. The default is `24`.

### User Agent

Optional custom user agent for upstream requests. Leave the default unless BitQiu changes its web restrictions.

## Notes

- The driver supports uploads, folders, rename, move, copy, and delete.
- Downloads are returned as direct BitQiu links.
- Larger `Page size` reduces pagination requests, but also increases each list response size.
