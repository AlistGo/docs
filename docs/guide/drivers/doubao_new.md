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

# Doubao New

:::info Supported version
- Driver support: `>= v3.57.0`
- Built-in PDF preview (`Doubao Preview`): `>= v3.57.0`
:::

## Overview

`DoubaoNew` is the newer Doubao drive driver based on the Feishu-side APIs.

## Config

### Authorization

DPoP access token used in the `Authorization` header. If you paste only the raw token value, AList will automatically add the `DPoP ` prefix.

### Dpop

Value of the `DPoP` request header.

### Cookie

Optional shortcut. If the cookie contains `LARK_SUITE_ACCESS_TOKEN` and `LARK_SUITE_DPOP`, AList can extract `Authorization` and `Dpop` from it.

### Root Folder ID

Leave it empty to mount the top-level drive. Fill in another folder token only if you want to mount a subfolder directly.

### Debug

Enable upload-related debug logs.

## Notes

- The driver supports list, upload, mkdir, move, rename, and delete.
- `Copy` is not implemented yet.
- PDF files can use the built-in Doubao preview when the provider returns preview metadata. AList reads provider-generated preview images page by page instead of converting the file locally.
- If the headers stop working after token expiry or account changes, refresh them from the Doubao web app and save the driver again.
