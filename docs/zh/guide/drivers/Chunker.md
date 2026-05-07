---
icon: iconfont icon-state
order: 97
category:
  - Guide
tag:
  - Storage
  - Guide
  - 本地代理
sticky: true
star: true
---

# Chunker（分片）

:::info 支持版本
当前驱动在 `2026-03-26` 之后的 `beta` 构建中可用，尚未进入 `v3.58.0` 稳定版。
:::

## 介绍

`Chunker` 是一个类似 `Crypt` 的覆盖型驱动。

它对 AList 暴露的是一个完整逻辑文件，但在底层会把大文件拆成多个分片，存放到一个或多个已经挂载好的存储里。

适合的场景：

- 绕过底层存储的单文件大小限制
- 把大文件拆成更容易管理的分片
- 将分片文件分散到多个已挂载存储
- 尽量保持与默认 `rclone chunker` 命名和 metadata 布局兼容

## 使用方式

先在 AList 已经挂载的存储中准备一个或多个目录，再把这些挂载路径填给 `Chunker`。

示例：

- 已有存储挂载为 `/onedrive`、`/s3`、`/115`
- 在里面分别创建 `/onedrive/chunks-a`、`/s3/chunks-b`、`/115/chunks-c`
- 新增一个 `Chunker` 存储，挂载到 `/media`
- `Remote path` 填 `/onedrive/chunks-a`
- `Extra remote paths` 填 `/s3/chunks-b` 和 `/115/chunks-c`
- 以后向 `/media` 上传文件

结果：

- 小文件直接存到主路径
- 大文件会被拆成多个分片
- metadata 存在主路径
- 分片文件会分布到配置好的目标路径中

::: warning

`Remote path` 和 `Extra remote paths` 填的是 **AList 挂载路径**，不是服务器本地磁盘路径。

不要把它们指回 `Chunker` 自己的挂载路径，否则会形成递归套娃。

:::

## 配置项说明

### Remote path

主 AList 挂载目录。

- 保存 metadata
- 保存小于等于 `Chunk size` 的文件
- 当 `Store chunks in primary path` 开启时，也会参与保存部分分片

### Extra remote paths

额外的 AList 挂载目录，一行一个。

- 只用于保存分片文件
- 配置后，分片会在可用目标之间轮询分布
- 留空时，会退化为单存储分片

### Store chunks in primary path

控制主路径在存在额外路径时，是否也参与分片分布。

- 开启：主路径保存 metadata、小文件，以及一部分分片
- 关闭：主路径只保存 metadata 和小文件，分片只去 `Extra remote paths`
- 如果 `Extra remote paths` 为空，这个开关没有效果

### Chunk size

超过这个大小的文件会被拆分。

- Web 页面里按 `MB` 输入
- 内部保存为字节数
- 默认值是 `2048 MB`，也就是 `2147483648` 字节，即 `2 GiB`

### Name format

分片文件名使用魔法字符生成：

- `{name}`：原始文件名
- `{chunk}`：分片序号
- `{chunk:N}`：宽度为 `N` 的零填充分片序号

规则：

- `{name}` 必须且只能出现一次
- `{chunk}` 或 `{chunk:N}` 必须且只能出现一次
- `{name}` 必须出现在分片序号之前

默认值：

```text
{name}.rclone_chunk.{chunk:3}
```

示例：

```text
{name}.rclone_chunk.{chunk:3}
{name}.part{chunk:4}
chunk-{name}-{chunk}
```

### Start from

分片编号起始值。

- `1` 时，分片名类似 `001`、`002`、`003`
- `0` 时，分片名类似 `000`、`001`、`002`

### Metadata format

- `simplejson`：写入与 `rclone chunker` 兼容的 metadata
- `none`：不写 metadata 附加内容

如果 `Metadata format` 设为 `none`，那么 `Hash type` 也必须设为 `none`。

### Hash type

分片文件 metadata 中记录的哈希类型。

可选值：

- `none`
- `md5`
- `sha1`

这个配置只在 `Metadata format = simplejson` 时有意义。

## 兼容性说明

`Chunker` 的设计目标是尽量贴近 `rclone chunker`，但有一个边界需要明确：

- 默认分片命名与常见 `rclone chunker` 布局兼容
- `simplejson` metadata 与 `rclone chunker` 兼容
- AList 当前 `name_format` 使用的是新魔法字符语法：`{name}`、`{chunk}`、`{chunk:N}`
- 多存储分片分布是 **AList 自己的扩展能力**

最后这一点很关键：如果一个文件的分片被分散到了多个 AList 存储里，`rclone chunker` 并不能直接理解这种跨存储分布布局。

## 说明

- 如果你希望 AList 自动进行分片，请把文件上传到 `Chunker` 挂载路径，而不是底层原始分片目录。
- 在 `Chunker` 中，AList 会隐藏底层分片文件，对外只显示一个逻辑文件。
- 下载会经过 AList 代理，因为分片文件可能需要在多个对象之间做拼接或跨分片 Range 读取。
