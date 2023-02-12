---
# This is the icon of the page
icon: interact
# This control sidebar order
order: 3
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
# 手动安装

### 获取 AList
打开 [AList Release](https://github.com/Xhofe/alist/releases) 下载待部署系统对应的文件。最新版的前端已经和后端打包好了，不用再下载前端文件了。



xxxx 指的是不同系统/架构对应的名称，一般 Linux-x86/64 为 alist-linux-amd64。如果[你的 glibc 版本太低](../../faq/why.md#lib64-libc-so-6-version-glibc-2-28-not-found-required-by-alist-或者-accept-function-not-implemented)，建议下载 musl 版本

当你看到 `start server@0.0.0.0:5244` 的输出，之后没有报错，说明操作成功。 第一次运行时会输出初始密码。程序默认监听 5244 端口。 现在打开 `http://ip:5244` 可以看到登录页面，WebDAV 请参阅 [WebDav](../webdav.md)。

### 手动运行

:::tabs#os
@tab Linux
```bash
# 解压下载的文件，得到可执行文件：
tar -zxvf alist-xxxx.tar.gz
# 授予程序执行权限：
chmod +x alist
# 运行程序
./alist server
# 获得管理员信息
./alist admin
```
@tab macOS
```bash
# 解压下载的文件，得到可执行文件：
tar -zxvf alist-xxxx.tar.gz
# 授予程序执行权限：
chmod +x alist
# 运行程序
./alist server
# 获得管理员信息
./alist admin
```
@tab Windows
```bash
# 解压下载的文件，得到可执行文件：
unzip alist-xxxx.zip
# 运行程序
.\alist.exe server
# 获得管理员信息
.\alist.exe admin
```
@tab win(scoop)
```bash
# 安装
scoop install alist
# 运行
alist server
```
:::

### 守护进程

::::tabs#os
@tab Linux
使用任意方式编辑 `/usr/lib/systemd/system/alist.service` 并添加如下内容，其中 path_alist 为 AList 所在的路径

```ini
[Unit]
Description=alist
After=network.target
 
[Service]
Type=simple
WorkingDirectory=path_alist
ExecStart=path_alist/alist server
Restart=on-failure
 
[Install]
WantedBy=multi-user.target
```

然后，执行 `systemctl daemon-reload` 重载配置，现在你可以使用这些命令来管理程序：

- 启动: `systemctl start alist`
- 关闭: `systemctl stop alist`
- 配置开机自启: `systemctl enable alist`
- 取消开机自启: `systemctl disable alist`
- 状态: `systemctl status alist`
- 重启: `systemctl restart alist`

@tab macOS
使用任意方式编辑 `~/Library/LaunchAgents/ci.nn.alist.plist` 并添加如下内容，修改 `path_alist` 为 AList 所在的路径，`path/to/working/dir` 为 AList的工作路径

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>Label</key>
        <string>ci.nn.alist</string>
        <key>KeepAlive</key>
        <true/>
        <key>ProcessType</key>
        <string>Background</string>
        <key>RunAtLoad</key>
        <true/>
        <key>WorkingDirectory</key>
        <string>path/to/working/dir</string>
        <key>ProgramArguments</key>
        <array>
            <string>path_alist/alist</string>
            <string>server</string>
        </array>
    </dict>
</plist>
```

然后，执行 `launchctl load ~/Library/LaunchAgents/ci.nn.alist` 加载配置，现在你可以使用这些命令来管理程序：

- 开启: `launchctl start ~/Library/LaunchAgents/ci.nn.alist`

- 关闭: `launchctl stop ~/Library/LaunchAgents/ci.nn.alist`

- 卸载配置: `launchctl unload ~/Library/LaunchAgents/ci.nn.alist`


@tab Windows

方法1

用  **`.VBS`** 脚本启动和停止，分别创建两个脚本 分别是  启动.vbs 和 停止.vbs

直接在和Alist启动程序同级文件夹里面双击启动即可，不用担心没有反应 直接去 浏览器访问即可


::: info 两个启动脚本

**启动.vbs**

```vbscript
Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "alist.exe server",vbhide
Wscript.quit
```

**停止.vbs**

```vbscript
Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "taskkill /f /im alist.exe",0
Wscript.quit
```

1. 脚本不会创建的可以自行下载：[**脚本下载**](https://www.aliyundrive.com/s/DHPMhRtKUzY/folder/63e0961eae317bd4d4d945cda69dbb00f9837fb7)

2. 脚本不会使用的可以看看视频：[**参考视频**](https://www.bilibili.com/video/BV1DG411s7j5?t=266.2)

:::


如何实现Windows开机自启，可以参考上面提到的脚本使用视频(第二个)。

::::



:::info
对于所有平台，您可以使用以下命令来静默启动、停止和重新启动。 （v3.4.0 及更高版本）

```bash
# 携带`--force-bin-dir`参数启动服务
alist start
# 通过pid停止服务
alist stop
# 通过pid重启服务
alist restart
```

:::


### 如何更新

下载新版Alist，把之前的替换了即可。
