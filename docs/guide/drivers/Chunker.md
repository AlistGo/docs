---
icon: iconfont icon-state
order: 97
category:
  - Guide
tag:
  - Storage
  - Guide
  - Local Proxy
sticky: true
star: true
---

# Chunker

:::info Supported version
Available in beta builds after `2026-03-26`. It is not included in `v3.58.0`.
:::

## Introduce

`Chunker` is an overlay storage driver similar to `Crypt`.

It exposes one logical file to AList, but stores large files as multiple chunk files in one or more already-mounted storages behind the scenes.

Typical use cases:

- bypass single-file size limits of an underlying storage
- keep large uploads split into manageable parts
- distribute chunk files across multiple mounted storages
- stay close to the default `rclone chunker` naming and metadata layout

## How To Use

Prepare one or more folders inside storages that are already mounted in AList, then point `Chunker` at those mounted paths.

Example:

- Existing storages are mounted at `/onedrive`, `/s3`, `/115`
- Create folders `/onedrive/chunks-a`, `/s3/chunks-b`, `/115/chunks-c`
- Add a new `Chunker` storage and mount it at `/media`
- Set `Remote path` to `/onedrive/chunks-a`
- Set `Extra remote paths` to `/s3/chunks-b` and `/115/chunks-c`
- Upload files to `/media`

Result:

- small files are stored directly in the primary path
- large files are split into chunks
- metadata is stored in the primary path
- chunks are distributed across the configured target paths

::: warning

`Remote path` and `Extra remote paths` must be **AList mounted paths**, not local filesystem paths on the server.

Do not point them back to the `Chunker` mount path itself, otherwise you create a recursive overlay.

:::

## Config Options

### Remote path

Primary AList mounted folder path.

- stores metadata
- stores files smaller than or equal to `Chunk size`
- can also store part of the chunk files when `Store chunks in primary path` is enabled

### Extra remote paths

Additional AList mounted folder paths, one path per line.

- used only for chunk files
- when configured, chunks are distributed round-robin across the available targets
- when left empty, `Chunker` falls back to single-storage chunking

### Store chunks in primary path

Controls whether the primary `Remote path` also participates in chunk distribution when extra paths exist.

- enabled: primary path stores metadata, small files, and part of the chunks
- disabled: primary path stores only metadata and small files; chunks go only to `Extra remote paths`
- if `Extra remote paths` is empty, this switch has no effect

### Chunk size

Files larger than this value will be split into chunks.

- the web UI accepts this field in `MB`
- internally it is stored in bytes
- default value is `2048 MB` = `2147483648` bytes = `2 GiB`

### Name format

Chunk file names are generated from magic tokens:

- `{name}`: original file name
- `{chunk}`: chunk number
- `{chunk:N}`: zero-padded chunk number with width `N`

Rules:

- `{name}` must appear exactly once
- `{chunk}` or `{chunk:N}` must appear exactly once
- `{name}` must appear before the chunk token

Default:

```text
{name}.rclone_chunk.{chunk:3}
```

Examples:

```text
{name}.rclone_chunk.{chunk:3}
{name}.part{chunk:4}
chunk-{name}-{chunk}
```

### Start from

Base number for chunk numbering.

- `1` means chunk names like `001`, `002`, `003`
- `0` means chunk names like `000`, `001`, `002`

### Metadata format

- `simplejson`: write chunk metadata in a layout compatible with `rclone chunker`
- `none`: do not write metadata sidecar content

If `Metadata format` is `none`, then `Hash type` must also be `none`.

### Hash type

Hash value stored in chunk metadata for chunked files.

Available values:

- `none`
- `md5`
- `sha1`

This field is only meaningful when `Metadata format = simplejson`.

## Compatibility

`Chunker` is designed to be close to `rclone chunker`, but there is an important boundary:

- default chunk names are compatible with the common `rclone chunker` layout
- `simplejson` metadata is compatible with `rclone chunker`
- the new `name_format` syntax in AList uses `{name}`, `{chunk}`, `{chunk:N}`
- multi-storage chunk distribution is an **AList extension**

That last point matters: if one file's chunks are spread across multiple AList storages, `rclone chunker` does not automatically understand that distributed layout.

## Notes

- Upload to the `Chunker` mount path, not to the underlying raw chunk folders, if you want AList to manage chunking for you.
- AList hides raw chunk files and presents them as one logical file in `Chunker`.
- Downloads are served through AList proxy because chunked files may need to be reassembled or ranged across multiple chunk objects.
