---
# This is the icon of the page
icon: fa-solid fa-x
# This control sidebar order
order: 186
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

# Mediatrack

**https://app.mediatrack.cn**

### **Access token**

You can get it in request header after logging in

![token](/img/drivers/mediatrack/mediatrack-token.png)

### **Project id**
Get from official website url:

![Project id](/img/drivers/mediatrack/mediatrack-projectid.png)

### **Root folder id**

Get it from the request after logging in

![id](/img/drivers/mediatrack/mediatrack-rootid.png)

## **Device fingerprint**

Get it from the request after logging in

![id](/img/drivers/mediatrack/mediatrack-device-fingerprint.jpg)



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