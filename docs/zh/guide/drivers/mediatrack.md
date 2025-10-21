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

# 分秒帧

**https://app.mediatrack.cn**

## **访问令牌**

登录后可以在请求头中获取

![token](/img/drivers/mediatrack/mediatrack-token.png)

## **项目编号**

从官网网址获取：

![Project id](/img/drivers/mediatrack/mediatrack-projectid.png)

## **根文件夹 ID**

登录后从请求中获取

![id](/img/drivers/mediatrack/mediatrack-rootid.png)

## **设备指纹**

登录后从请求中获取

![id](/img/drivers/mediatrack/mediatrack-device-fingerprint.jpg)


### **默认使用的下载方式**

```mermaid
---
title: 默认使用的哪种下载方式？
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|默认|a2[用户设备]
    classDef someclass fill:#f96
    c1[本机代理]-.备选.->a2[用户设备]
    b1[代理URL]-.备选.->a2[用户设备]
    click a1 "../drivers/common.html#webdav-策略"
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```