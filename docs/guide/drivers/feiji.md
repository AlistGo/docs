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

# FeiJi Cloud

:::tip
Supported version:

- FeiJiPan driver: `>= v3.31.0`
:::

:::danger
This driver is not recommended for normal use.

- Account restriction, suspension, or freeze risk exists.
- Public sharing, large traffic, automation, or abusive usage is especially risky.
- If you still use it, keep usage conservative and be prepared for the provider to limit the account at any time.
:::

FeiJi Cloud：https://www.feijipan.com/

## **Root folder ID**

root folder ID the default is `0`，Other directory ID View the figure below obtaining method

<img src="/img/drivers/feiji/feiji.png" alt="FeiJi folder_id" />

<br/>



## **username、password**

Just fill in your own Feiji Cloud Account Password

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
