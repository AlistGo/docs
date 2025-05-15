---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 256
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "Native Rroxy"
  - "302"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---
# Cloudreve V4 / Share

## Parameter Explanation

### Address

The address of the Cloudreve V4 server, such as: `https://www.example.com`. It is better to remove the slash `/` after it.

### Authentication

Cloudreve V4 supports authentication using Token. This means the mounting authentication methods are divided into:

1. `Username` + `Password`: Automatically uses the login interface to obtain Access Token and Refresh Token, there might be issues with CAPTCHA.
2. `Refresh Token` Only: Automatically uses the refresh interface to renew Access Token and Refresh Token, parameters can be found from browser requests or Local Storage.
3. `Access Token` Only: Can be temporarily used but will expire and cannot be renewed.
4. None: Anonymous user, suitable for public sharing.
5. [Reference](../drivers/common.html#reference): Fill in `ref:/{mount path}` in `Remark`: Reference authentication, tokens, etc., from "Mounted Storage".

Steps to get tokens:

:::::tabs

@tab From Local Storage

:::note
There may be multiple sessions; please select the one you want to mount.
:::

![cloudreve_v4_token_local_storage](/img/drivers/cloudreve_v4/cloudreve_v4_token_local_storage.png)


@tab From Network

:::note
You may need to log in anew to see this request.
:::

![cloudreve_v4_token_resp](/img/drivers/cloudreve_v4/cloudreve_v4_token_resp.png)

:::::


### Root Folder Path

Cloudreve V4 uses a custom URI as the path, which can be obtained from the `?path=` in the web link. The obtained parameters may need to be [URL decoded](https://www.google.com/search?q=URL+decode).

#### Mounting My Files

Default is `cloudreve://my/`, listing user files.

#### Mounting Share

Supports mounting folder-type shares, the path should be filled as: `cloudreve://{ShareID}@share/`.

- ShareID is the parameter after `/s/` in the share link.

- Currently, Cloudreve V4 does not support creating password-protected shares. However, if the data is migrated from V3, the previously created sharing password will be retained. The URI of the share link with the password (`/s/{shareID}/{sharePassword}`) is `cloudreve://{shareID}:{sharePassword}@share`.

### Enable Folder Size

Enable Cloudreve V4 server to calculate the size of each folder. Enabling this feature may cause server errors or slow performance, and it is `disabled` by default.

### Enable Thumbnails

Enable Cloudreve V4 server to generate thumbnails for each file. Enabling this feature may cause server errors or slow performance, and it is `disabled` by default.

### Enable Version Upload

Enable overwrite upload and keep the previous version, which consumes extra space. Disabled by default, delete the existing file before overwriting upload.

### Custom UA

Used to customize the `User-Agent` header information used in requests. Leaving it blank will use Alist default settings.

### Sorting

Supports changing the sorting parameters when requesting lists.

## Upload

The supported storage policies for uploading are as follows:

- Local storage
- Slave storage
- OneDrive
- S3

Upload storage policies can be set within Cloudreve V4 web interface by entering the corresponding folder (requires the server to be Cloudreve Pro).

If upload permissions are enabled for shares, uploads are supported. It requires the server to check "Enhance anonymous user permissions" for the user group (requires the server to be Cloudreve Pro).

## **The default download method used**

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
