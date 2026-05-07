---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 171
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "Native Proxy"
  - "302"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Quark / TV

**https://pan.quark.cn**

:::tip
Supported version:

- `Use transcoding address` and Quark video `302` preview/download: `>= v3.58.0`
:::

:::warning
Quark original download links are still sensitive to headers, account limits, and server bandwidth, so `local proxy` / `native proxy` remains the most compatible choice for the regular download path.

If you enable `Use transcoding address`, AList can return Quark's transcoded video address for video files and support `302` redirection. When the transcoding address is unavailable, AList falls back to the regular download link.
:::

## **Quark Cloud**

### **Cookie**

Press F12 to open "Debug", select "Network", select any request on the left, and find the one with the `Cookie` parameter.

![quark](/img/drivers/quark/quark_cookie.png)

<br/>



### **Root Folder ID**

Root Folder ID is `0`

- After entering the folder, get the directory ID in the top address bar. If the subdirectory is deeper, the directory ID will be at the back of the address bar. Just write the subdirectory ID you want to mount.

![url](/img/drivers/quark/quark_fileid.png)

Note that only Cookies captured in Chrome is available, use Firefox's Cookies may remain in guest and still require login.

<br/>

### **Use transcoding address**

`Use transcoding address` is only used for `Quark` video files.

- Disabled: use the original download link. This keeps the original file quality and still works for non-video files, but proxy / native proxy is usually the safer default.
- Enabled: use Quark's transcoded video address, which is better for web playback and supports `302`, but it uses the transcoded stream instead of the original file quality.

<br/>



### **The default download method used**


```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a1 fill:#d9f99d,stroke:#333,stroke-width:2px,color:#111
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    a1
    end
    c1[local proxy / native proxy]:::someclass====|default / most compatible|a2[user equipment]
    a1[302 via transcoding address]-.video files + option enabled.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    classDef someclass fill:#f96
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```

illustrate：[**alist/issues/4318**](https://github.com/alist-org/alist/issues/4318#issuecomment-1536214188)



## **Quark TV**

The TV version supports `302`, but only `List` and `Download` operations are supported. Other operations are not supported (the interface does not support it).

<br/>



### **Add method**

1. Select the `QuarkTV` driver, fill in the mounting path, and then save

2. Return to the all driver page and use the mobile APP to scan the QR code (If the QR code is not displayed, click on `Table Layout` in the upper right corner of the driver to switch from list mode to table mode)

3. After scanning the QR code to confirm, disable the driver, then enable the `driver` to use it.
   - `Refresh token`、`Device id `、`Query token`, It will be filled in automatically, no manual filling is required
     - Please do not edit manually and modify it

![](/img/drivers/tv_qrcode.png)

<br/>



### **Root Folder ID**

Root Folder ID is `0`

- After entering the folder, get the directory ID in the top address bar. If the subdirectory is deeper, the directory ID will be at the back of the address bar. Just write the subdirectory ID you want to mount.

![url](/img/drivers/quark/quark_fileid.png)

<br/>



### **The default download method used**

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```
