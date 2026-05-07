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
  - "本地代理"
  - "302"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 夸克网盘 / TV

**https://pan.quark.cn**

:::tip
支持版本：

- `使用转码地址` 与夸克视频 `302` 预览/下载：`>= v3.58.0`
:::

:::warning
夸克原始下载链路仍然比较依赖请求头、账号状态和服务器带宽，所以普通下载路径下，`本地代理` / `native proxy` 依然是兼容性最好的选择。

启用 `使用转码地址` 后，AList 会在访问夸克视频文件时优先返回夸克转码后的播放地址，并支持 `302`。如果转码地址不可用，会自动回退到普通下载地址。
:::

## **夸克网盘**

### **Cookie**

按F12打开“调试”，选中“网络”，随意在左侧选择请求，找到携带 `Cookie` 参数的就可以

![quark](/img/drivers/quark/quark_cookie.png)

<br/>



### **根文件夹ID**

根目录ID为 `0`

- 子文件夹ID进入文件夹后顶部地址栏获取目录ID，如果子目录越深目录ID在地址栏越靠后，想挂载哪个子目录就写那个子目录ID就可以

![url](/img/drivers/quark/quark_fileid.png)

注意：请使用Chrome浏览器来获取Cookies，使用Firefox获取的Cookies或仍将停留在访客并请求登录。

<br/>

### **使用转码地址**

`使用转码地址` 只对 `夸克` 的视频文件生效。

- 关闭时：使用原始下载地址，画质保持原文件，也适用于非视频文件，但通常还是建议配合代理 / `native proxy` 使用。
- 开启时：使用夸克转码后的播放地址，更适合网页播放，并支持 `302`，但拿到的是转码流，不是原始文件画质。

<br/>



### **[在线预览/下载]很慢?**

夸克网盘访问或播放慢，通常和会员限速、请求头限制，以及你部署 AList 的机器带宽有关。对于原始下载链路来说，`本地代理` / `native proxy` 依然是更稳妥的方案；如果你主要是看视频，也可以尝试开启上面的 `使用转码地址`。

- 什么是`本地代理`？

  - `本地代理`就是你搭建AList的机器来中转,就是先下载到你搭建AList的机器，再由机器转发给你，你搭建AList的机器速度不够快，再转发给你的速度自然也不够快
1. 换带宽更高的服务器来中转
2. 在自己家里电脑搭建
3. 如果主要是视频播放，可以尝试开启 `使用转码地址`
4. 如果仍然无法满足需求，只能更换线路或放弃使用

<br/>



### **默认使用的下载方式**


```mermaid
---
title: 默认使用的哪种下载方式？
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a1 fill:#d9f99d,stroke:#333,stroke-width:2px,color:#111
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    a1
    end
    c1[本地代理 / native proxy]:::someclass====|默认 / 最稳妥|a2[用户设备]
    a1[使用转码地址的302]-.视频文件 + 已开启选项.->a2[用户设备]
    b1[代理URL]-.备选.->a2[用户设备]
    classDef someclass fill:#f96
    click a1 "../drivers/common.html#webdav-策略"
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```

说明：[**alist/issues/4318**](https://github.com/alist-org/alist/issues/4318#issuecomment-1536214188)

<br/>



## **夸克TV**

TV 版支持 `302`，但是只能 `访问` 和 `下载` 两个操作，其它操作不支持(接口不支持)

<br/>



### **添加方式**

1. 选择 `夸克TV / QuarkTV` 驱动，填写挂载路径，然后保存
2. 返回全部驱动页面，使用手机APP扫描二维码（如果不显示二维码，驱动右上角点击点击`表格布局` 从列表模式切换成表格模式）
3. 扫码确认后，禁用驱动，再启用`驱动`即可使用
   - `Refresh token 刷新令牌`、`Device id 设备ID `、`Query token` 会自动填充，不需要人工填写
     - 请不要进行编辑手动修改

![](/img/drivers/tv_qrcode.png)

<br/>



### **根文件夹ID**

根目录ID为 `0`

- 子文件夹ID进入文件夹后顶部地址栏获取目录ID，如果子目录越深目录ID在地址栏越靠后，想挂载哪个子目录就写那个子目录ID就可以

![url](/img/drivers/quark/quark_fileid.png)

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
