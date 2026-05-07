---
icon: iconfont icon-state
order: 287
category:
  - Guide
tag:
  - Storage
  - Guide
  - "302"
sticky: true
star: true
---

# pCloud

:::info Supported version
Available in `>= v3.54.0`.
:::

Site: **https://www.pcloud.com**

## Overview

`pCloud` is a read-write driver for personal pCloud accounts.

## Config

### Access Token

OAuth token obtained from pCloud authorization.

### Hostname

Choose the correct pCloud region:

- `us`
- `eu`

### Root Folder ID

Optional. Leave it empty for the account root folder. You can get a folder ID from URLs such as `https://my.pcloud.com/#/filemanager?folder=12345678901`.

### Client ID / Client Secret

Optional custom OAuth app credentials.

## Notes

- Make sure `Hostname` matches your pCloud account region.
- The driver supports upload, rename, move, copy, and recursive delete.
- Direct download links are requested from pCloud on demand.
