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

:::info Supported version
The driver is available in `>= v3.53.0`.

`Direct link expiry` is available in `>= v3.54.0`.
:::

Site: **https://gofile.io**

## Overview

`Gofile` is a read-write driver for personal Gofile accounts.

If `Root folder ID` is left empty, AList reads the account root folder automatically during initialization.

## Config

### API Token

Required. Get it from your Gofile profile page.

### Root Folder ID

Optional. Leave it empty to use the account root folder detected by AList.

### Link Expiry

AList-side cache duration, in days, for generated direct links.

- `0`: disable caching and request a fresh link every time
- `> 0`: keep the generated direct link in AList cache for that many days

### Direct Link Expiry

Server-side expiration time, in hours, sent to Gofile when AList asks it to generate a direct link.

- `0`: no upstream expiration
- `> 0`: Gofile expires the generated direct link after that many hours

## Notes

- Changing `Direct link expiry` only affects newly created links.
- The driver supports upload, mkdir, rename, move, copy, and delete.
