---
icon: iconfont icon-api
order: 62
category:
  - Guide
tag:
  - Storage
  - Guide
  - 123 Open
sticky: true
star: true
author: Qianshi (okatu-loli)
---

# 123 Open (Open Platform)

`123 Open` is an open platform API provided by 123YunPan (123 Cloud Drive), which allows mounting and access within Alist using key-based authentication.

It supports file browsing, uploading, previewing, downloading, and file management. Alist also automatically maintains the token lifecycle.

::: warning Paid Features Required
Basic features like file listing are free, but **direct link functionalities (e.g., preview, download) require paid open platform access**.

Please visit [123YunPan](https://www.123pan.com/) to purchase the "VIP" service and go to the [123 Open Platform](https://www.123pan.com/developer) to create an application and obtain your credentials (Client ID and Client Key).
:::

::::: tabs#123 Open

@tab Integration Guide

## Integration Guide

To mount 123YunPan resources to Alist using `123 Open`, complete the following steps:

### Prerequisites

- You have a registered and logged-in 123YunPan account
- You have created an application at the [123YunPan Open Platform](https://www.123pan.com/developer) and obtained:
    - **Client ID**
    - **Client Key**
- (Optional) You have subscribed to the "VIP" service to enable advanced features such as direct links

::: warning Notes
During the mounting process, Alist will use the `Client ID` and `Client Key` to automatically obtain and maintain an access token in the background, without user intervention.

This process happens locally, with no third-party relay, so there is **no risk of privacy leakage**.  
However, please keep your `Client ID` and `Client Key` safe to avoid exposure.
:::

---

@tab Direct Link Settings

## Configure Direct Link Space (for Preview/Download)

::: danger Required Setting
If Direct Link Space is not enabled, Alist cannot generate preview or download links.
:::

### 1. Enable Direct Link Space

Visit [123YunPan](https://www.123pan.com/) and follow these steps:

1. Locate the target folder and right-click it
2. Click **Enable Direct Link Space**
3. After enabling, the directory will show a direct link icon 🔗

![Direct Link Space](/img/drivers/123/open/123_link.png)

### 2. Get Folder ID

1. Enter the folder
2. The Folder ID is the last part of the URL in your browser's address bar
3. Use this ID in Alist as the mount directory

---

@tab Feature Support

## Feature Support Details

The following features are currently supported by the `123 Open` driver:

### ✅ Supported Features

- 📁 **Browse files/folders**
- 📥 **Download / Preview** (requires direct link enabled)
- 📤 **Upload files** (supports instant and chunked upload)
- 🗂️ **Create folders**
- ✏️ **Rename**
- 🗃️ **Move files/folders**
- 🗑️ **Delete**
- 🔐 **Automatic token acquisition and refresh**

::: tip Upload Note
If the uploaded file does not include a complete hash, Alist will cache the file and calculate the MD5 automatically.
:::

### ⚠️ Unsupported Features

::: warning The following features are not currently supported:

- ❌ Copy files/folders
- ❌ Online compression/decompression
- ❌ Archive (batch) download
  :::

::: danger Root Directory Limitation
Although the root directory (ID = 0) can be mounted, **direct link features such as preview, video playback, or image viewing are not available in the root directory**.

It is recommended to mount a **subfolder with Direct Link Space enabled**.
:::

---

:::::

## Default Download Method

```mermaid
---
title: Default Download Method
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|Default|a2[User Device]
    classDef someclass fill:#f96
    c1[Local Proxy]-.Alternative.->a2[User Device]
    b1[Proxy URL]-.Alternative.->a2[User Device]
    click a1 "../drivers/common.html#webdav-strategy"
    click b1 "../drivers/common.html#webdav-strategy"
    click c1 "../drivers/common.html#webdav-strategy"
