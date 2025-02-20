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
  - Webdav
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# WebDav

::: tip

<Badge text="≥ v3.42.0" type="info"/> The above versions need to open the two permissions of `Webdav Read` and `Webdav Manage` in User => Permissions

- If you only read and do not modify, you only need to open `Webdav Read`


- If you want to add, delete or modify files, you also need to open the permission of `Webdav Manage`

Besides, since v3.42.0, writing to WebDAV not only requires the `Webdav Manage` permission but also basic permissions such as `rename`, `delete`, and `copy`.

:::

### **WebDAV config**

| Name     | Value                       |
| -------- | --------------------------- |
| Url      | http[s]\://domain:port/dav/ |
| Host     | domain                      |
| Path     | dav                         |
| Scheme   | http/https                  |
| Port     | Same as web port            |
| Username | Same as web username        |
| Password | Same as web password        |

Can't fill in? [Click to view Fill in Example](#webdav-fill-in-example)

### **WebDav Support**

| Storage strategy | list | download | mkdir | rename | move | copy | upload |
| ---------------- | :--: | :------: | :---: | :----: | :--: | :--: | :----: |
| LocalStorage     |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| AliyunDirve      |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| Onedrive         |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| 189Cloud         |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| GoogleDrive      |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ❌  |   ✅   |
| 123pan           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ❌  |   ✅   |
| FTP              |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ❌  |   ✅   |
| SFTP             |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ❌  |   ✅   |
| PikPak           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| S3               |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| USS              |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| WebDAV           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| Teambition       |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| Mediatrack       |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| 139yun           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| YandexDisk       |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| BaiduNetdisk     |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| Quark            |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| KodBox           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |

## **Software that can be used to mount WebDav**

1. **Windows**
   - [Potplayer](https://potplayer.daum.net/), [kmplayer](https://www.kmplayer.com/home), RaiDrive, [kodi](https://kodi.tv/download), [OneCommander](https://www.onecommander.com/), [Mountain Duck](https://mountainduck.io/), [netdrive](https://www.netdrive.net/):x:, [rclone](https://rclone.org/), [AIMP](https://www.aimp.ru/)
2. **Android**
   - [Nplayer](https://www.aliyundrive.com/s/cf3p39UXkxa), [kmplayer](https://www.kmplayer.com/home), ES File Manager, [kodi](https://kodi.tv/download), [nova nova magic change](https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526), [reex](https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8e0027b7473f82cc64bbb9be0a34794c32c07), cx File Manager, Solid Explorer, [X-plore File Manager](https://www.lonelycatgames.com/apps/xplore), [MiXplorer](https://mixplorer.com/)
3. **IOS**
   - [VidHub](https://okaapps.com/product/1659622164), Nplayer, [kmplayer](https://www.kmplayer.com/home), infuse, zFuse, Fileball File Manager
4. **电视TV**
   - [VidHub](https://okaapps.com/product/1659622164), [Nplayer](https://www.aliyundrive.com/s/cf3p39UXkxa), [kodi](https://kodi.tv/download), [nova nova magic change](https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526)
   - If you only look at Ali, you can use Ali's official cooperation
     - Huanshi store-Alibaba cloud disk TV version, online disk player-Alibaba cloud disk TV version
5. **Mac**
   - [VidHub](https://okaapps.com/product/1659622164), IINA, [Mountain Duck](https://mountainduck.io/), infuse, [netdrive](https://www.netdrive.net/), [rclone](https://rclone.org/)
6. **Linux**
   - davfs2, [rclone](https://rclone.org/)
7. **Notes**
   - [Joplin ](https://joplinapp.org/)

If there is a suitable addition, please add~



### **WebDav fill-in example**

Give a few examples of filling in **`WebDav`**, the account password is the account password of your AList user

This is basically the way of writing, and the way of writing may be different for different software. If there is no separate path option, it is normal to add the `/dav` option after the site

The different buttons at the top below can be clicked to view

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

@tab nas

![webdav](/img/guide/webdav/nas.png)


:::
