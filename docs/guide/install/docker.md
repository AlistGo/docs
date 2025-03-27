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

# Use Docker

## Install

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

#### **Env**

| Name        | Default | Desc                                                                                                                       |
|:------------|:--------|----------------------------------------------------------------------------------------------------------------------------|
| `PUID`      | `0`     | User UID                                                                                                                   |
| `PGID`      | `0`     | User GID                                                                                                                   |
| `UMASK`     | `022`   | https://en.wikipedia.org/wiki/Umask                                                                                        |
| `RUN_ARIA2` |         | Whether to run ARIA2 concurrently, default is `true` if aria2 is pre-installed, otherwise it is `false`.                   |
| `TZ`        |         | Default is the UTC time zone. If you want to specify a time zone, you can set this variable, for example: `Asia/Shanghai`. |

#### **Image Versions**

Stable version: `xhofe/alist:latest` or specify a specific version, such as `xhofe/alist:v3.41.0` `xhofe/alist:v3.40.0`

Latest image version, please refer to https://hub.docker.com/r/xhofe/alist/tags

Dev version: `xhofe/alist:beta`

Pre-installed environment image suffix:

| Suffix   | Desc                                                                    |
|:---------|-------------------------------------------------------------------------|
| `aio`    | An image that includes all of the following pre-installed environments. |
| `ffmpeg` | Pre-installed FFmpeg image for generating thumbnail for local storage   |
| `aria2`  | Pre-installed aria2 image for offline downloading.                      |

You can append a suffix using the `-` symbol after any of the mirror tags to switch to an image with the corresponding environment. For example, `xhofe/alist:latest-aio` `xhofe/alist:beta-aria2` `xhofe/alist:v3.40.0-ffmpeg`

If the thumbnail generation function still does not work when using the pre-installed ffmpeg, please confirm:

+ You are using local storage
+ Switched to grid view
+ The thumbnail switch in local storage driver settings is enabled
+ The configuration path for the thumbnail cache folder in local storage is correct, for example, `data/thumbnail`

When using a pre-installed aria2 mirror, you might see errors like the following in the alist logs:

```
ERRO[2022-11-20 12:05:19] error [unaligned 64-bit atomic operation] while run task  [download http://xxx.com/xxx.png to [/ftp](/)]
```

The solution is, if the CPU architecture is 64-bit, you can try to manually pull a 64-bit image or rebuild the container. If the CPU architecture is 32-bit, there is currently no available solution.

## See the admin's info:

#### Lower than v3.25.0

```bash
docker exec -it alist ./alist admin
```

#### Higher than v3.25.0

Versions above 3.25.0 change the password to an encrypted hash value, and the password cannot be calculated directly. If the password is forgotten, it can only be re-**`randomly generated`** or **`manually set`**

```bash
# Randomly generate a password
docker exec -it alist ./alist admin random
# Manually set a password, `NEW_PASSWORD` refers to the password you need to set
docker exec -it alist ./alist admin set NEW_PASSWORD
```

## **Update**
::: details docker-cli update
1. docker ps -a #View the container (find the ID of the Alist container)
2. docker stop ID #Stop Alist running, otherwise it cannot be deleted (this time the ID of the Alist container is d429749a6e69, it is different for each installation)
3. docker rm ID #Delete the Alist container (the data is still there as long as you don't delete it manually)
4. docker pull xhofe/alist:latest
5. [Enter the installation command and click to view](#docker-cli)
6. The update is complete, go and have a look.. It's that simple

**There is a missing step in the picture, it is step 4 in the tutorial....remember to execute**
![docker](/img/faq/updocker.png)
:::

:::details docker-compose update
1. docker-compose pull

2. docker-compose up -d

:::

Q: My version is v3.x.x and I cannot upgrade to the latest version. `docker pull xhofe/alist:latest` does not work to pull the latest version. After changing to docker-compose, it is still version 3.x.x

A: The reason is that your docker has set up a mirror, and the latest version cannot be updated from the mirror, so modify /etc/docker/daemon.json and delete "registry-mirrors": ["mirror accelerator address"]

- If deletion doesn’t work, you can consider replacing it with a `mirror acceleration address`
- Or simple and rude: when downloading, replace `xhofe/alist:latest` with `xhofe/alist:v3.16.3` (specify the version, the latest when writing the tutorial is 3.16.3)

### **Compile Image**

Install Docker, clone the repository, then navigate to the root directory of the repository. No further preparation is required.

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


Available build args:

|                       | Desc           |
|:----------------------|----------------|
| `INSTALL_FFMPEG=true` | Install ffmpeg |
| `INSTALL_ARIA2=true`  | Install aria2  |
