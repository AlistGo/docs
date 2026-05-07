---
author: Da3zKi7 (D@' 3z K!7)
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 185
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

# MediaFire

:::tip
支持版本：

- MediaFire 驱动与会话自动续期：`>= v3.53.0`
:::

<br/>

![logo](/img/drivers/mediafire/mediafire_mf_logo_u1_full_color_reversed.svg)

站点：**https://mediafire.com**
<br/>

- MediaFire 目前不再提供 `API_KEY` 或 `APP` 接入方式，因此必须填写用户会话相关字段。

## **配置存储**

1. 打开 **http://localhost:5244/@manage/storages** 或你自己的 AList 管理页
2. 点击 `添加`
3. 选择 `MediaFire`
4. 填写挂载路径，例如 `/MediaFire/MyCloud`
5. 新开一个标签页访问 **https://mediafire.com**
6. 按 `F12` 或 `Ctrl / Command + Shift + I` 打开开发者工具
7. 切到上方的 `Network`
8. 按 `F5` 刷新页面，开始抓取请求
9. 复制 `Session Token`

   ![session_token](/img/drivers/mediafire/mediafire_session_token.png)

10. 回到 AList 管理页，粘贴到 `Session Token`
11. 再回到 MediaFire，复制 `Cookie`

    ![cookie](/img/drivers/mediafire/mediafire_cookie.png)

12. 回到 AList 管理页，粘贴到 `Cookie`
13. 确认 `Session Token` 和 `Cookie` 都已填写

    ![session_token_cookie](/img/drivers/mediafire/mediafire_session_token_cookie.png)

<br/>

14. 再点击一次 `添加` 完成存储配置

<br/>

## **根文件夹 ID**

默认是 `/`。这个驱动的根实际上对应 MediaFire 的 `myfiles`，目录内部再按 folderID 管理，例如 `xxxyyyzzz123`。

- 当前不支持直接按 `/myfiles/Photos/Christmas/` 这样的层级路径指定自定义根目录，因为 MediaFire 的目录结构以 ID 为主。

<br/>

### **特性**

1. 支持 `List`、`Link`、`MakeDir`、`Move`、`Rename`、`Copy`、`Remove`、`Put`、`PutResult`
2. 存储在线时会自动续期 `Session Token`
3. 上传按分块进行，支持断点续传与恢复，适合大文件

<br/>

### **提示**

1. `根文件夹 ID` 和 `根文件夹路径` 会自动设置
2. MediaFire 会话有效期较短。AList 会在存储在线时每隔几分钟自动续期一次 `Session Token`，因此长时间运行的实例通常不需要人工频繁刷新
3. 如果 AList 重启、长时间休眠，或者 MediaFire 主动让登录失效，仍然可能需要重新抓取新的 `Session Token` 和 `Cookie`
4. `分块大小` 控制 MediaFire 上传时每个分块的大小。数值越大，请求次数越少；如果网络不稳定，较小的分块通常更稳

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
