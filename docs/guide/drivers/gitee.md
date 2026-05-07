---
icon: iconfont icon-state
order: 272
category:
  - Guide
tag:
  - Storage
  - Guide
  - "302"
sticky: true
star: true
---

# Gitee

:::info Supported version
Available in `>= v3.55.0`.
:::

## Overview

`Gitee` is a repository-browsing driver for Gitee contents API.

The current driver is read-only: it can list files and download them, but it does not write commits back to Gitee.

## Config

### Owner / Repo

Required. For a repository like `https://gitee.com/owner/repo`, fill in:

- `Owner`: `owner`
- `Repo`: `repo`

### Ref

Branch, tag, or commit SHA to browse. If you leave it empty, AList uses the repository default branch automatically.

### Root Folder Path

Optional repository subdirectory to mount, for example `/docs`.

### Token

Optional. Use it for private repositories or to avoid low anonymous rate limits.

### Endpoint

Gitee API endpoint. Leave it empty unless you need a custom compatible endpoint. The default is `https://gitee.com/api/v5`.

### Download Proxy

Optional prefix added before download URLs, for example `https://mirror.example.com/`.

### Cookie

Optional cookie returned from Gitee user-info requests. It can help when raw file downloads require authenticated cookies.

## Notes

- If `Ref` points to a tag or commit SHA, you are effectively mounting a fixed snapshot.
- `Download proxy` only rewrites the final download URL prefix; it does not change how the repository is listed.
