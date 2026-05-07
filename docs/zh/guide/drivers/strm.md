---
icon: iconfont icon-state
order: 282
category:
  - Guide
tag:
  - Storage
  - Guide
  - "本地代理"
sticky: true
star: true
---

# STRM

:::info 支持版本
`>= v3.58.0` 可用。
:::

## 概述

`Strm` 是一个虚拟驱动。它会读取一个或多个已经挂载到 AList 的路径，把其中的媒体文件对外暴露为 `.strm` 文件。

适合给 Kodi、Plex 一类媒体工具，或本地媒体库程序消费 AList 链接，而不是直接读取原始网盘文件。

## Paths 写法

`Paths` 一行写一条规则：

- `别名:/挂载路径`
- `/挂载路径`

示例：

```text
movies:/115/Movies
tv:/s3/TV
/local/media
```

规则说明：

- 如果一行写成 `别名:/挂载路径`，`别名` 会成为虚拟顶层目录名。
- 如果一行只写 `/挂载路径`，AList 会使用最后一级目录名作为虚拟名称。
- 如果只有一条有效映射，驱动会直接把内容平铺到挂载根目录，而不是额外再套一层顶级目录。

## 配置项

### Paths

必填。这里填的是 AList 挂载路径，不是服务器本地磁盘路径。

### SiteUrl

写入 `.strm` 文件中的站点前缀 URL。如果全局 `site_url` 已经正确，可以留空。

### PathPrefix

生成的 `.strm` 内容里的路径前缀，默认是 `/d`。

### FilterFileTypes

哪些扩展名会被暴露为 `.strm`。

### DownloadFileTypes

哪些扩展名仍然按普通文件直接下载，而不是转成 `.strm`。

### EncodePath

是否先对路径做编码，再写进生成的 `.strm` 内容。

### WithoutUrl

只生成路径内容，例如 `/d/path/to/file`，不带完整站点 URL 前缀。

### WithSign / SignExpireHours

给生成链接追加签名参数。`SignExpireHours = 0` 时使用全局链接过期策略。

### SaveStrmToLocal / SaveStrmLocalPath / SaveLocalMode

可选地把生成结果同步到本地磁盘：

- `insert`：只创建缺失文件
- `update`：刷新已变化的文件
- `sync`：刷新文件，并删除本地多余文件或目录

### RotateSignNow

把它设为 `true` 并保存一次后，驱动会立即重写已有本地 `.strm` 文件中的签名，保存后该值会自动重置为 `false`。

## 说明

- 这个驱动的挂载根始终是 `/`。
- 不支持上传。
- 如果启用了 `WithSign` 且同时把 `.strm` 写到了本地，当旧签名需要刷新时就使用 `RotateSignNow`。
