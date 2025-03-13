---
# This is the icon of the page
icon: iconfont icon-btpanel
# This control sidebar order
order: 4
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Install
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 宝塔面板(适用9.2.0及以上的版本) 部署指引

## 宝塔面板 docker 应用商店部署 部署指南

前往[宝塔面板官网](https://www.bt.cn/new/download.html)，选择正式版的脚本下载安装
  （如果已安装，请跳过此步）



#### 步骤 1：

安装后登录宝塔面板，在左侧导航栏点击Docker，首先进入会提示安装Docker服务，点击立即安装，按提示完成安装 

#### 步骤 2：

完成安装后在应用商店中找到Alist，点击安装，配置域名、端口等基本信息即可完成安装

注意：
域名为非必填，如果填写了域名则通过【网站】--> 【反向代理】来管理，填写域名后不需要勾选【允许外部访问】，否则需要勾选后才可以通过端口访问

#### 步骤 3：

安装后在浏览器输入上一步设置的域名或者IP+端口即可访问。




