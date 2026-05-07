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
  - "Native Rroxy"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---
# Local storage

:::tip
Supported version:

- Local video thumbnails: `>= v3.12.0`
- Global `Thumbnail size` setting: `>= v3.58.0`
:::

### **Root folder path**

The path of folder you wanted to mount. For example:

- Linux: `/root`
- Windows: `C:`



## **Local storage video thumbnail**

You need to use the `ffmpeg` tool to add, I will not (wait for replenishment) for the time being

- You need to use AList version ≥ [**v3.12.0**](https://github.com/alist-org/alist/releases/tag/v3.12.0)
- Generated thumbnail width follows `Manage -> Settings -> Preview -> Thumbnail size`. The current default is `144` px and height scales proportionally.
  - Add thumbnail for video with ffmpeg  -  by [**@GodFinal**](https://github.com/GodFinal) and [**@Xhofe**](https://github.com/Xhofe) in [**#3556**](https://github.com/alist-org/alist/pull/3556) [**(309d6)**](https://github.com/alist-org/alist/commit/309d655)
  - Support both time and percent for video thumbnail  - by [**@1024th**](https://github.com/1024th) in [**#7802**](https://github.com/AlistGo/alist/pull/7802) [(**31a74**)](https://github.com/AlistGo/alist/commit/31a74708)



## **Recycle bin path**

path to recycle bin, delete permanently if empty or keep 'delete permanently'

If you fill in this path, you will move the file into the folder when deleting the local storage file, so that you have a chance to regret it.

The method of filling in the above -mentioned mounting path is different from different system filling methods.

==If you do n’t know if you fill in it correctly, you can test it yourself first and then use the production environment to use it yourself.==

- Linux: `/root`
- Windows: `C:`




### **The default download method used**


```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    end
    c1[local proxy]:::someclass==default===>a2[user equipment]
    classDef someclass fill:#f96
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```
