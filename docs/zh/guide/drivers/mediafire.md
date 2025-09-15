---
author: Da3zKi7 (D@' 3z K!7)
# 这是页面的图标
icon: iconfont icon-state
# 这是控制侧边栏顺序
order: 185
# 一个页面可以有多个分类
category:
  - 指南
# 一个页面可以有多个标签
tag:
  - 存储
  - 指南
  - "302"
# 这篇文章会被置顶
sticky: true
# 这篇文章会出现在收藏文章中
star: true
---

# MediaFire

<br/>

![logo](/img/drivers/mediafire/mediafire_mf_logo_u1_full_color_reversed.svg)

站点：**https://mediafire.com**
<br/>

- MediaFire 已不再提供 `API_KEY` 或 `APP` 支持，因此必须设置用户会话值。

- :warning: 需要 Alist 版本 > ==3.53.0== 才能使用此驱动。

## **配置存储**

1. 打开 **http://localhost:5244/@manage/storages** 或你的自定义 AList 网页
2. 点击“添加”按钮绑定另一个存储
3. 选择 “MediaFire”
4. 设置挂载路径，例如 /MediaFire/MyCloud
5. 在另一个浏览器标签页访问 **https://mediafire.com**
6. 按 F12 或 (Ctrl / Command) + Shift + I 打开开发者工具
7. 点击“Network”（网络）标签（上方工具栏）
8. 按 F5 刷新页面并开始拦截所有请求

9. 复制 `Session Token`

   ![session_token](/img/drivers/mediafire/mediafire_session_token.png)

10. 切换到 AList 管理页面并粘贴到 Session Token 字段

11. 切换到 MediaFire 并复制 `Cookie`

    ![cookie](/img/drivers/mediafire/mediafire_cookie.png)

12. 切换回 AList 管理页面并粘贴到 Cookie 字段

13. 确认 Session Token 和 Cookie 已经设置

    ![session_token_cookie](/img/drivers/mediafire/mediafire_session_token_cookie.png)

<br/>

14. 再次点击“添加”按钮确认 MediaFire 存储。完成！

<br/>

## **根文件夹 ID**

默认是 “/”，因为此驱动从 "myfiles" 开始，然后通过文件夹 ID（如 "xxxyyyzzz123"）管理目录。

- 目前不支持自定义文件夹根路径，因为 MediaFire 的目录结构基于 ID，而不是顺序导航，例如 /myfiles/Photos/Christmas/

<br/>

### **功能**

1. 列表、链接、创建目录、移动、重命名、复制、删除、上传、上传结果
2. 会话自动刷新
3. 上传支持断点续传和恢复，因为是分块传输。非常适合大文件。

<br/>

### **提示**

1. `root folder ID`、`root folder Path` 会自动设置
2. MediaFire 会在 10 分钟后关闭当前会话，虽然已经实现了自动续期，但如果关闭了 AList 或电脑，会话会过期，必须重新配置 Session 和 Cookie 才能保持存储可用！
3. 如果你在服务器或手机上运行 AList，通常不会遇到烦人的会话过期问题，除非 AList 服务停止运行。

<br/>

### **默认使用的下载方式**

```mermaid
---
title: 默认使用哪种下载方式？
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|默认|a2[用户设备]
    classDef someclass fill:#f96
    c1[本地代理]-.备用.->a2[用户设备]
    b1[下载代理 URL]-.备用.->a2[用户设备]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
