---
# This is the icon of the page
icon: iconfont icon-geometry
# This control sidebar order
order: 5
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

# 使用 Docker

## **安装**

#### **docker cli**

```bash
docker run -d --restart=unless-stopped -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:latest
```

#### **docker compose**

```yaml
version: '3.3'
services:
  alist:
    image: 'xhofe/alist:latest'
    container_name: alist
    volumes:
      - '/etc/alist:/opt/alist/data'
    ports:
      - '5244:5244'
    environment:
      - PUID=0
      - PGID=0
      - UMASK=022
    restart: unless-stopped
```

#### **环境变量**

| 名称          | 默认值   | 说明                                                 |
|:------------|:------|----------------------------------------------------|
| `PUID`      | `0`   | 运行身份 UID                                           |
| `PGID`      | `0`   | 运行身份 GID                                           |
| `UMASK`     | `022` | https://en.wikipedia.org/wiki/Umask                |
| `RUN_ARIA2` |       | 是否同时运行 ARIA2，当镜像含有 aria2 环境时默认为 `true`，否则为 `false` |
| `TZ`        |       | 默认为 UTC 时区，如果你想指定时区，则可以设置此变量，例如：`Asia/Shanghai`    |

#### **镜像版本**

稳定版：`xhofe/alist:latest` 或指定本版，如 `xhofe/alist:v3.41.0` `xhofe/alist:v3.40.0`

最新镜像版本，请参阅 https://hub.docker.com/r/xhofe/alist/tags

开发版：`xhofe/alist:beta`

预装环境镜像后缀:

| 后缀        | 说明                      |
|:----------|-------------------------|
| `aio`     | 同时包含下列所有预装环境的镜像         |
| `ffmpeg`  | 预装 ffmpeg 的镜像，用于本地存储缩略图 |
| `aria2`   | 预装 aria2 的镜像，用于离线下载     |

你可以在上述任意镜像标签后面，使用 `-` 符号附加后缀以切换到附带环境的镜像。如 `xhofe/alist:latest-aio` `xhofe/alist:beta-aria2` `xhofe/alist:v3.40.0-ffmpeg`

如果使用预装 ffmpeg 镜像缩略图功能仍无法使用，请确认:

+ 使用的是本地存储
+ 切换到网格视图
+ 本地存储的缩略图开关开启
+ 本地存储的缩略图缓存文件夹配置路径正确，例如 `data/thumbnail`

当使用预装 aria2 镜像时，可能会在 alist 的日志中看到类似错误：

```
ERRO[2022-11-20 12:05:19] error [unaligned 64-bit atomic operation] while run task  [download http://xxx.com/xxx.png to [/ftp](/)]
```

解决方法是，如果是 CPU 架构是 64 位，可以尝试手动拉取 64 位镜像或重新构建容器。 如果是 CPU 架构是 32 位，目前尚无可用方案。

## **查看管理员信息：**

#### **低于v3.25.0版本**

```bash
docker exec -it alist ./alist admin
```


#### **高于v3.25.0版本**

3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 **`随机生成`** 或者 **`手动设置`**

```bash
# 随机生成一个密码
docker exec -it alist ./alist admin random
# 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码
docker exec -it alist ./alist admin set NEW_PASSWORD
```

## **更新**
::: details docker-cli 更新


1. docker ps -a #查看容器(找Alist容器的ID)

2. docker stop ID #停止Alist运行,不然无法删除(这次Alist容器的ID是d429749a6e69，每一次安装都不一样自己看)

3. docker rm ID #删除Alist容器(数据还在只要你不手动删除)

4. docker pull xhofe/alist:latest

5. [输入安装命令点击查看](#docker-cli)

6. 更新好了 去看看吧..就这么简单

**图片中丢了一步，是教程中的第四步....记得执行**
![docker](/img/faq/updocker.png)

:::

:::details docker-compose 更新
1. docker-compose pull
2. docker-compose up -d

:::

Q：我的版本是v3.x.x 怎么也升级不到最新版 `docker pull xhofe/alist:latest`拉取最新不行 改成docker-compose安装还是3.x.x版本

A：原因是你的docker设置了镜像，从镜像更新不到最新版本，改一下/etc/docker/daemon.json，删除"registry-mirrors": ["镜像加速器地址"]

- 删除若不行，可以考虑更换一个`镜像加速地址`
- 或者简单粗暴：下载时将`xhofe/alist:latest` 替换为`xhofe/alist:v3.16.3`（指定版本，写教程时最新的是3.16.3）

### **编译镜像**

安装 docker，克隆仓库后进入仓库根目录，无需其他准备

::: tabs#Docker-build

@tab basic

```bash
docker build -t xhofe/alist:latest .
```

@tab build-arg

```bash
docker build -t xhofe/alist:latest-ffmpeg --build-arg INSTALL_FFMPEG=true .
```

:::


可用 build args：

|                       | 说明        |
|:----------------------|-----------|
| `INSTALL_FFMPEG=true` | 安装 ffmpeg |
| `INSTALL_ARIA2=true`  | 安装 aria2  |