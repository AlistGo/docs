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

# WuKong Netdisk

:::info Supported version
Available in `>= v3.58.0`.
:::

Site: **https://pan.wkbrowser.com**

## Overview

`WuKongNetdisk` is a read-write driver for WuKong browser cloud storage.

## Config

### Cookie

Required. Capture it from `https://pan.wkbrowser.com/` after you log in.

### Root Folder ID

Defaults to `0`, which means the account root. Fill another folder ID only if you want to mount a subfolder directly.

### Aid

Request parameter used by the upstream web API. Keep the default value `590353` unless the service changes.

### Language

Request language used by the upstream API. The default is `zh`.

### Page Size

Batch size used when listing large folders. The default is `100`.

## Notes

- AList automatically sends the required `Referer` and `Cookie` headers for download links.
- `Copy` is not implemented in the current driver.
- Overwrite upload is disabled, so replacing a file with the same name may require deleting or renaming the old file first.
