---
# This is the icon of the page
icon: github
# This control sidebar order
order: 9
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Advanced
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# GitHub登录

### Github client id

客户端ID

### Github client secrets

秘钥ID



打开 **https://github.com/settings/developers**  点击  **`New OAuth App`**



### Register OAuth 填写说明


- Application name
  - 随便写想叫什么叫什么
- ==**Homepage URL**== 
  - 主页网址地址
    - 可以使用http https都可以
- Application description
  - 随便写
- ==**Authorization callback URL**==
  - 回调URL地址
  - **https://你的域名/api/auth/github_callback**
    - 可以使用http https都可以



填写完毕后记得获取一下 **Client secrets**，然后填写到Alist后台。

::: warning
若想使用GitHub登录，首选需要你搭建Alist的机器能连接访问GitHub才可以调用使用，不然连接不上无法使用
:::




### 完整填写参考示意图

![github](/img/advanced/github.png)



### 视频教程

<ArtPlayer
  src="https://hub.onmicrosoft.cn/public/video/weibo?uid=7821998556&cursor=4872400300415846&raw=true" 
  poster="/img/advanced/github-login.png"
/>

**视频若失效可以前往观看: https://b23.tv/Fm8AkC5**
