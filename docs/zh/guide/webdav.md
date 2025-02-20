---
# This is the title of the article
# title: One-click Script
# This is the icon of the page
icon: iconfont icon-waline
# This control sidebar order
order: 9
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - WebDAV
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# WebDAV

::: tip

<Badge text="≥ v3.42.0" type="info"/> 以上版本需要在用户 => 权限 打开 `Webdav 读取` 和 `Webdav 管理` 这两个权限

- 如果只读不修改则只需要打开 `Webdav 读取` 就可以


- 如果对文件进行增删改还需要打开 `Webdav 管理`的权限

此外，自v3.42.0版本起，写入 WebDAV 除了需要`webdav 管理`权限外，还需要`重命名`、`删除`、`复制`等基础权限。

:::

## **WebDAV 配置**

| Name     | Value                       |
| -------- | --------------------------- |
| Url      | http[s]\://domain:port/dav/ |
| Host     | domain                      |
| 路径     | dav                         |
| 协议     | http/https                  |
| 端口     | 与网页端一致                 |
| WebDAV用户名 | 与网页端用户名一致          |
| WebDAV密码 | 与网页端密码一致            |

不会填写？[点击查看填写示例](#webdav-填写示例)

## **WebDAV 存储支持**

| 存储类型          | 列出文件/文件夹 | 下载文件 | 创建目录 | 重命名 | 移动 | 复制 | 上传文件/文件夹 |
| ---------------- | :--: | :------: | :---: | :----: | :--: | :--: | :----: |
| 本地存储          |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| 阿里云盘          |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| Onedrive         |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| 天翼云盘          |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| GoogleDrive      |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ❌  |   ✅   |
| 123pan           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ❌  |   ✅   |
| FTP              |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ❌  |   ✅   |
| SFTP             |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ❌  |   ✅   |
| PikPak           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| S3               |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| USS              |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| WebDAV           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| Teambition       |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| 分秒帧           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| 和彩云           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| YandexDisk       |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| 百度网盘          |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| 夸克网盘          |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| KodBox           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |

## **可以用来挂载WebDav的软件**

1. **Windows**
   - [Potplayer](https://potplayer.daum.net/)，[kmplayer](https://www.kmplayer.com/home)，[RaiDrive](https://www.raidrive.com/)，[kodi](https://kodi.tv/download)，[OneCommander](https://www.onecommander.com/)，[Mountain Duck](https://mountainduck.io/)，[netdrive](https://www.netdrive.net/) :x:，[rclone](https://rclone.org/)，[AIMP](https://www.aimp.ru/)
2. **Android**
   - [Nplayer](https://www.alipan.com/s/cf3p39UXkxa)，[kmplayer](https://www.kmplayer.com/home)，ES文件管理器，[kodi](https://kodi.tv/download)，[nova魔改](https://www.alipan.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526)，[reex](https://www.alipan.com/s/cf3p39UXkxa/folder/63e8e0027b7473f82cc64bbb9be0a34794c32c07)，cx 文件管理器，Solid Explorer，[X-plore File Manager](https://www.lonelycatgames.com/apps/xplore)，[MiXplorer](https://mixplorer.com/)
3. **IOS**
   - [VidHub](https://zh.okaapps.com/product/1659622164)，Nplayer，[kmplayer](https://www.kmplayer.com/home)，infuse，zFuse, Fileball文件管理器
4. **电视TV**
   - [VidHub](https://zh.okaapps.com/product/1659622164)，[Nplayer](https://www.alipan.com/s/cf3p39UXkxa)，[kodi](https://kodi.tv/download)，[nova魔改](https://www.alipan.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526)
   - 若只看阿里可以使用阿里官方合作的
     - 欢视商店-阿里云盘TV版，网盘播放器-阿里云盘TV版
5. **Mac**
   - [VidHub](https://zh.okaapps.com/product/1659622164)，IINA，[Mountain Duck](https://mountainduck.io/)，infuse，[netdrive](https://www.netdrive.net/)，[rclone](https://rclone.org/)
6. **Linux**
   - davfs2，[rclone](https://rclone.org/)
7. **笔记软件**
   - [Joplin ](https://joplinapp.org/)

若有合适的欢迎补充~



### **WebDav 填写示例**

举几个填写 **`WebDav示例`** 账号密码就是你AList用户的账号密码

基本是这个写法，软件不同写法也可能不同，如果没有单独留路径选项那正常就是在 站点后面添加`/dav`选项

下方顶部不同按钮是可以点击查看的

:::tabs#WebDav

@tab Nplayer

![webdav](/img/guide/webdav/nplayer.png)

@tab reex

![webdav](/img/guide/webdav/reex.png)

@tab ES

<div class="image-preview">  
    <img src="/img/guide/webdav/es-ios.png" />  
    <img src="/img/guide/webdav/es-android.png" />
</div>

@tab Infuse

![webdav](/img/guide/webdav/infuse.png)

@tab Fileball

![webdav](/img/guide/webdav/fileball.png)

@tab Potplayer

![webdav](/img/guide/webdav/potplayer.png)

@tab 群辉

![webdav](/img/guide/webdav/nas.png)

:::
