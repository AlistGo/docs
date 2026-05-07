---
icon: iconfont icon-state
order: 282
category:
  - Guide
tag:
  - Storage
  - Guide
  - "Local Proxy"
sticky: true
star: true
---

# STRM

:::info Supported version
Available in `>= v3.58.0`.
:::

## Overview

`Strm` is a virtual driver. It reads one or more already-mounted AList paths and exposes media files as `.strm` files.

It is useful when you want Kodi, Plex-style tools, or local media libraries to consume AList links instead of the original cloud files directly.

## Paths Format

Fill `Paths` with one rule per line:

- `alias:/mounted/path`
- `/mounted/path`

Examples:

```text
movies:/115/Movies
tv:/s3/TV
/local/media
```

Rules:

- If a line has the form `alias:/mounted/path`, `alias` becomes the virtual top-level folder name.
- If a line is only `/mounted/path`, AList uses the last path segment as the virtual name.
- If there is only one valid mapping, the driver flattens it to the mount root instead of creating one extra top-level folder.

## Config

### Paths

Required. These must be AList mounted paths, not local filesystem paths.

### SiteUrl

Prefix URL written into generated `.strm` files. Leave it empty if your global `site_url` is already correct.

### PathPrefix

Path prefix inside generated `.strm` content. The default is `/d`.

### FilterFileTypes

Extensions that should be exposed as `.strm`.

### DownloadFileTypes

Extensions that should stay as normal downloadable files instead of becoming `.strm`.

### EncodePath

Encode file paths before writing them into the generated `.strm` content.

### WithoutUrl

Generate path-only `.strm` content such as `/d/path/to/file`, without the full site URL prefix.

### WithSign / SignExpireHours

Append signed query parameters to generated links. `SignExpireHours = 0` uses the global link expiration behavior.

### SaveStrmToLocal / SaveStrmLocalPath / SaveLocalMode

Optionally write the generated results to local disk:

- `insert`: only create missing local files
- `update`: refresh changed local files
- `sync`: refresh files and remove extra local files or folders

### RotateSignNow

Set it to `true` and save once to immediately rewrite existing local `.strm` files with fresh signatures. The value resets to `false` automatically after saving.

## Notes

- The driver mount root is always `/`.
- Upload is not supported.
- If `WithSign` is enabled and you also save `.strm` files locally, use `RotateSignNow` when the old signed links need to be refreshed.
