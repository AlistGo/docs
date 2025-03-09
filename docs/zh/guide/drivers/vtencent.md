---
# This is the icon of the page
icon: fa-solid fa-x
# This control sidebar order
order: 19
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "本地代理"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
watermark:
  content: 个人版于 2024年12月31日 正式下线
  globalAlpha: 0.3
  rotate: 10
  width: 650
  height: 300
---

# 腾讯智能创作平台

腾讯智能创作平台官网链接：**https://app.v.tencent.com**

:::caution 已下线关闭服务，无法使用

智能创作平台个人版于 ==2024年12月31日== 正式下线。

- **https://mp.weixin.qq.com/s/bfKVkF3iVMMQsh6FNo_UTg**

![](/img/drivers/vtencent/vtencent_close.png)

:::

<br/>



### **Cookie**

随意在F12请求中找到一个携带Cookie的参数复制就可以

- 建议使用靠后刷新出来的请求中的Cookie参数，会携带含有 **`tf_x`** 参数的Cookie
- `login`、`DescribeTasks`、`DescribeAccount`、`DescribeUserProfile`、`DescribePlatformSettings`、`CreateBindWechatQRCode`

可以使用的Cookie是需要携带含有 **`tf_x`** 参数的Cookie，下图示例中左侧的可以使用，右侧的无法使用。

![](/img/drivers/vtencent/vtencent_cookie.png)

<br/>



### **根文件夹ID**

根目录ID为：`9`，如果想单独挂载其它子文件夹，参考阿里云盘的方式

- 如果填写好后还是不显示，请手动右下角按钮进行刷新

<br/>



### **Tf uid**

不需要填写，存储填写正确Cookie保存后会自动填写 `Tf uid`

<br/>



### **默认使用的下载方式**


```mermaid
---
title: 默认使用的哪种下载方式？
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    end
    c1[本机代理]:::someclass==默认===>a2[用户设备]
    classDef someclass fill:#f96
    b1[代理URL]-.备选.->a2[用户设备]
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```
