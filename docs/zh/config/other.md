---
# This is the icon of the page
icon: iconfont icon-snow
# This control sidebar order
order: 9
# A page can have multiple categories
category:
  - Config
# A page can have multiple tags
tag:
  - Config
  - Settings
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 其他设置

:::tip
支持版本：

- 在 UI/API 中手动设置管理员 token：`>= v3.56.0`
:::

## **Aria2**

设置 Aria2 URI 以供离线下载。 Aria2 需要和 AList 安装在同一台服务器(如果使用docker则是容器)上。

<br/>



## **Qbittorrent url**

用于自定义**Qbittorrent**参数用来配置客户端中使用

预设值为：http://admin:adminadmin@localhost:8080/
可以参考进行修改，[具体说明。](../guide/advanced/offline-download.md#_2-qbittorrent)

<br/>



## **115、PikPak、迅雷(专业版)**

**需要先添加对应的驱动，然后在后台设置临时目录**

允许在任意存储使用 115/PikPak/迅雷 等离线下载工具，如果在 115/PikPak/迅雷 存储中使用离线下载，文件会被直接下载到目标目录

- 否则，文件会下载至用户配置的临时目录中，然后转移至目标目录
  - 例如在 `GoogleDrive`存储驱动前端页面，调用 `Pikpak offline-download`，会先下载到后台设置的Pikpak临时文件夹目录，等Pikpak离线下载完毕后，再从Pikpak转移到`GoogleDrive`文件里面
- **https://github.com/AlistGo/alist/pull/7716**

<br/>



## **Token**

可用于访问程序所有 API 的令牌。

- 在 `后台 -> 设置 -> 其他` 中，可以复制它、手动设置固定值，或者重置为一个新的随机值。
- 修改后，记得同步更新仍在使用旧 token 的脚本、代理程序或自动化任务。

<br/>



### **其他**

1. 使用起来时候发现有两个Aria2，但是有什么不同呢? [**点击查看详情说明**](../faq/why.md#两个aria2有什么不同)
2. 支持使用Aria2下载文件夹同时并保存文件夹目录结构样式
   1. 配置Aria2方式：右下角`设置` --> `Aria2 RPC 链接` --> `Aria2 RPC 秘钥(如果有要填写)`
      - Aria2 下载到自己本地，所以只需要在自己本地下载即可，当然也支持推送到别人电脑或者自己服务器或者自己内网其它电脑，前提是有公网或者内网的设备已经下载了Aria2
   2. 开启方式，右下角`开启复选框`--> 选择列表文件/夹-->底部`下载`-->`发送到Aria2`
   3. 但是建议别一次性下载太多例如一次性下载上千个文件夹然后上万个文件.
