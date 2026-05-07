---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 2
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "本地代理"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---
# 本机存储

:::tip
支持版本：

- 本地视频缩略图：`>= v3.12.0`
- 全局 `Thumbnail size` 设置：`>= v3.58.0`
:::

## **根文件夹ID**

您要挂载的文件夹的路径。 例如：

- Linux: `/root`
- Windows: `C:`



## **本地存储视频封面**

需要使用`ffmpeg` 工具来添加，暂时还不会（后续补充）

- 需要使用AList版本 ≥ [**v3.12.0**](https://github.com/alist-org/alist/releases/tag/v3.12.0)
- 生成出来的缩略图宽度会跟随后台 `设置 -> 预览 -> Thumbnail size`，当前默认值是 `144` 像素，高度按比例缩放。
  - Add thumbnail for video with ffmpeg  -  by [**@GodFinal**](https://github.com/GodFinal) and [**@Xhofe**](https://github.com/Xhofe) in [**#3556**](https://github.com/alist-org/alist/pull/3556) [**(309d6)**](https://github.com/alist-org/alist/commit/309d655)
  - Support both time and percent for video thumbnail  - by [**@1024th**](https://github.com/1024th) in [**#7802**](https://github.com/AlistGo/alist/pull/7802) [(**31a74**)](https://github.com/AlistGo/alist/commit/31a74708)



## **回收站路径**

回收站的路径，如果为空则永久删除或保持“永久删除”

如果填写此路径在删除本地存储文件时会将文件移动到此文件夹內，让你有一次后悔的机会。

填写方式参考上述挂载路径的方式不同系统填写方式不同。

==如果不知道是否填写正确，可以先自己在测试环境进行测试一下再进行生产环境使用==

- Linux: `/root`
- Windows: `C:`



### **默认使用的下载方式**


```mermaid
---
title: 默认使用的哪种下载方式？
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    end
    c1[本机代理]:::someclass==默认===>a2[用户设备]
    classDef someclass fill:#f96
    b1[代理URL]-.备选.->a2[用户设备]
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```
