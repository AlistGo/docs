---
# This is the icon of the page
icon: link
# This control sidebar order
order: 10
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

# 离线下载


::: warning  请仔细阅读以下提示

有两款离线下载功能软件  

两款用法都一样，提前设置好软件配置(具体配置看下面说明)，

然后回到前端界面， ==找到你想把离线文件上传到哪个文件夹，你就手动进入到该文件夹== 

然后再右下角找到离线下载按钮，自行选择使用 Aria2下载还是qBittorrent下载(＞v 3.11.0)

:::

## 1.Aria2

[**点击查看使用说明**](../../config/other.md)

## 2.qBittorrent

（这里以Windows端举例，Linux端不清楚有没有）

首先我们先要在 **`qBittorrent`** 客户端配置好预设值

根据[源码](https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159)我们知道预设值分别是 admin:adminadmin@localhost:8080/

- **ip**：localhost
- **port**：8080
- **user**：admin
- **password**：adminadmin

将以上参数我们填写到 **`qBittorrent`** 客户端，配置好后我们去Alist前端进行离线下载（**方法参考开头的说明**）

- 若提交离线链接后提示：**Qbittorrent not ready** 将Alist和qBittorrent都重启试试看

预设值配置查看地址：

- **https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159**

- ```{ *** Value: "http://admin:adminadmin@localhost:8080/", Type: conf.TypeString, *** } ```

![Offline download](/img/advanced/offline-download.png)



### 注意事项

1. 在后台qBittorrent任务中出现：**`torrent parse timeout`**，解析超时
2. 可以解析种子下载，但是在上传的时候出现 **`The system cannot find the path specified.`** 找不到路径

以上两种办法大概率是因为 qBittorrent 软件本体导致的，可能是因为绿色版,修改版 进行了一些功能阉割 修改导致的，建议去官网下载安装即可恢复（由本人亲自踩坑后得出的结论）

- **qBittorrent**官网：**https://www.qbittorrent.org/**
- **qBittorrent**GitHub：**https://github.com/c0re100/qBittorrent-Enhanced-Edition**



**qBittorrent**视频教程

<ArtPlayer 
  src="https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2804817007920660481&hd=2&raw=true" 
  poster="/img/advanced/qbittorrent.png"
/>

**视频若失效可以前往观看：暂无**
