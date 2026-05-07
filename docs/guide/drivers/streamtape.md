---
icon: iconfont icon-state
order: 281
category:
  - Guide
tag:
  - Storage
  - Guide
  - "Local Proxy"
sticky: true
star: true
---

# Streamtape

:::info Supported version
Available in `>= v3.58.0`.
:::

Site: **https://streamtape.com**

## Overview

`Streamtape` is a read-write driver for personal Streamtape accounts.

Use `API Login` and `API Key` from your Streamtape account settings. `Root folder ID` defaults to `0`, which means the account root.

## Config

### API Login / API Key

Required. Copy both values from your Streamtape account settings page.

### Root Folder ID

Leave `0` for the top-level folder. Fill in another folder ID only if you want to mount a subfolder.

### Enable Range Control

When enabled, AList reshapes range requests before reading the Streamtape link. This is mainly useful for smoother browser preview and streaming.

### Range Mode

- `chunk`: split reads into fixed-size parts. Use `Range chunk mb` and `Range concurrency`.
- `full`: use one full-length range request.
- `percent`: size each part by a percentage of the whole file. Use `Range percent`.

### Range Chunk MB / Range Concurrency / Range Percent

Only the fields used by the selected `Range mode` take effect.

## Notes

- Downloads and previews are served through AList proxy for this driver.
- `Copy` is not implemented in the current driver.
- If playback is unstable, keep `Enable range control` on and start with `chunk`, `8 MB`, and concurrency `4`.
