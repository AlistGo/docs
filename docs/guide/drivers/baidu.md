---
# This is the icon of the page
icon: state
# This control sidebar order
order: 12
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Baidu Netdisk

:::tip
Due to the limitation of Baidu Disk API, downloading files larger than about 20M needs to carry the header: "User-Agent": "pan.baidu.com", so when downloading files larger than 20M, you need to set the request header yourself, such as using curl:
```bash
curl -L -X GET 'YOUR_LINK' -H 'User-Agent: pan.baidu.com'
```
Or use the proxy function in this program to transfer.
:::

### Refresh token
[Click here](https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://alist.nn.ci/tool/baidu/callback&scope=basic,netdisk&qrcode=1) to get the refresh token.

### Root folder path
The root foler to mount, defaults to `/`, same as local storage.

### Download api
- official: The official interface, very stable, but for larger files, UA needs to be modified and the speed is slow
- crack: unofficial interface, no need to modify UA and some files may not limit the speed, but **maybe** unstable
  - ==crack: Unofficial Interface== Seems to be Harmonized? [**Click here for details to view FAQs**](../../faq/why.md#baidu-cloud-disk-unofficial-download-error-appears-hit-black-userlist-hit-illegal-dlna)



### Add "User-Agent" usage example

:::: details If you don't know how to set "User-Agent" see here

 ==The following methods are limited to Baidu super member users== 

 ==Prompt again The following methods are limited to Baidu super member users== 

It will only be useful if a member finishes modifying **`"User-Agent"`** (choose official and 302)

If you don’t change **`"User-Agent"`**, you can enable ==Web Agent==, the disadvantage is that you need to build an Alist machine for transfer, that is to say, you need a large broadband to help you transfer



:::tabs#ua

@tab Web plugin

- The advantage of using a browser plug-in to modify is that it can be played directly online, of course, downloading is also possible.

![alist](/img/drivers/baidu/bdUA.png)

@tab IDM

![alist](/img/drivers/baidu/idm-ua.png)

@tab Aria2

![alist](/img/drivers/baidu/aria2-ua.png)

:::



::::

### The default download method used

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
