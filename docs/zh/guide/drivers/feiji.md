---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 91
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

# 小飞机网盘

:::tip
支持版本：

- 小飞机网盘驱动：`>= v3.31.0`
:::

:::danger
这个驱动不建议日常或通用场景使用。

- 存在账号受限、封禁或冻结风险。
- 公开分享、大流量使用、自动化抓取或滥用场景尤其危险。
- 如果你仍要使用，请尽量低调控制用量，并准备好随时被平台限制账号。
:::

小飞机网盘：https://www.feijipan.com/

## **根文件夹ID**

根目录ID，默认为`0`，其它目录ID查看下图获取方式

<img src="/img/drivers/feiji/feiji.png" alt="FeiJi folder_id" />

<br/>



## **账户、密码**

填写自己的小飞机网盘帐号密码

<br/>



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
