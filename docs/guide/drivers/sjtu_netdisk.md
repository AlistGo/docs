---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 217
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "302"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---
# SJTUNetdisk

**https://pan.sjtu.edu.cn**

:::tip

- SJTU Netdisk uses `302` redirect as the default download method.
- Login credentials may expire; use `Keep alive` to maintain the session.

:::

<br/>

## **User token**

Open the developer debugging tool (F12) in your browser, switch to the **Network** tab and check **Disable cache**. After logging in to SJTU Netdisk, find the request that carries the authentication information, copy the `user_token` value and fill it in.

![user_token](/img/drivers/sjtu_netdisk/user_token.jpg)

<br/>

## **Keep alive**

When enabled, AList will periodically refresh the user token to keep the session alive, preventing the token from expiring after long periods of inactivity. Find the response header of the request that carries `Set-Cookie`, copy the `keepalive` value and fill it in.

![keep_alive](/img/drivers/sjtu_netdisk/keep_alive.jpg)

<br/>

## **User id**

Find the request that carries the `user ID` &mdash; it is located in the response body. Copy the `id` value and fill it in.

![user_id](/img/drivers/sjtu_netdisk/user_id.jpg)

<br/>

## **Order by**

Choose the field by which files and folders are sorted:

- `Name` &mdash; Sort by file/folder name
- `ModificationTime` &mdash; Sort by last modified time
- `Size` &mdash; Sort by file size

<br/>

## **Order by type**

Choose the sort direction:

- `Asc` &mdash; Ascending order
- `Desc` &mdash; Descending order

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
