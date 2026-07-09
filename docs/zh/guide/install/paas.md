---
# This is the title of the article
# title: One-click Script
# This is the icon of the page
icon: iconfont icon-module
# This control sidebar order
order: 7
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

# PaaS

具体用法请参考对应仓库中的`README.md`。

### Claw Cloud Run
#### [推荐≥180天Github账号登录注册，送5美元每月](https://console.run.claw.cloud/signin?link=NTSWKY97GQWH)
#### 填写示例：
- **Application Name**：`自定义`
- **Image Name**：`xhofe/alist:latest`
- **Usage**：CPU `0.2` | Memory `512M`
- **Network**：`5244 `
- **Environment Variables**

```
ALIST_ADMIN_PASSWORD=管理员密码，或在log里查看初始密码再重置
SITE_URL=你的网站 URL，使用默认可不填
TZ=Asia/Shanghai
PUID=0
PGID=0
UMASK=022
ENABLE_H2C=true
```
- 更多设置，详见[环境变量说明](https://pkg.go.dev/github.com/alist-org/alist/v3@v3.52.0/internal/conf#Config)
- **Local Storage**：`/opt/alist/data`[1G免费]
- 最后按**Update**提交，开启**Alist**！
- 按以上配置，每天0.06美分。

## **Koyeb**

https://github.com/alist-org/alist-koyeb

## **Render**

https://github.com/alist-org/alist-render

## **Heroku**

https://github.com/alist-org/alist-heroku-postgres

## **Sealos**
[![](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3Dalist)
