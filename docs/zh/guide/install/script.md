---
# This is the title of the article
# title: One-click Script
# This is the icon of the page
icon: iconfont icon-script
# This control sidebar order
order: 1
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

# 一键脚本

仅适用于 Linux amd64/arm64 平台。

::: tabs

@tab 正式版
**安装**
```bash
curl -fsSL "https://alistgo.com/v3.sh" -o v3.sh && bash v3.sh
```
![v3-install](/img/guide/v3-install.png)

**面板管理命令**

使用命令：`alist` 或者 `alist-manager`
![alist-manager](/img/guide/alist-manager.png)



@tab 测试版
**安装**
```bash
curl -fsSL "https://alistgo.com/beta.sh" | bash -s install
```

**更新**
```bash
curl -fsSL "https://alistgo.com/beta.sh" | bash -s update
```

**卸载**
```bash
curl -fsSL "https://alistgo.com/beta.sh" | bash -s uninstall
```

@tab Windows版
**安装**
```bash
iex ([System.Text.Encoding]::UTF8.GetString((iwr -useb "https://alistgo.com/alist-manager.ps1").Content))
```
![alist-windows-install](/img/guide/alist-windows-install.png)

## 安装步骤

### 1. 打开管理员终端
- 右键点击 Windows 开始菜单
- 选择 **"终端管理员"** 或 **"Windows PowerShell (管理员)"**

### 2. 运行安装脚本
- 在管理员终端中粘贴脚本链接
- 按回车键执行脚本

### 3. 交互式安装界面
脚本启动后会显示交互式安装界面，包含以下选项：
- **安装/更新 Alist**
- **卸载 Alist**
- **注册 Windows 系统服务**
- **启动/停止服务**
- **删除系统服务**

**安装说明：**
- 默认安装路径：`C:\alist`
- 注册系统服务时，脚本会自动下载 NSSM 程序
- 把alist的服务加入到Windows系统服务，服务注册成功后，Alist 将随 Windows 开机自动启动

### 4. 服务启动与配置
**服务自动启动后，您将看到：**
- Alist 生成的默认账号和密码
- Web 登录地址

**修改密码方法：**
- **方法一：** 通过 Web 界面 → 个人资料 → 修改密码
- **方法二：** 命令行修改
  ```cmd
  cd C:\alist
  .\alist admin set 新密码
  ```

### 5. 故障排除
**如果服务未启动：**
- 在交互界面选择选项 **6** 启动服务

**重置密码：**
```cmd
cd C:\alist
.\alist admin random
```

### 6. 卸载说明
**完整卸载步骤：**
1. 先选择选项 **5** 删除注册的 Windows 系统服务
2. 再选择选项 **3** 卸载 Alist 程序
3. 卸载完成后，安装路径下的所有文件将被删除

> **注意：** 卸载前请确保已备份重要数据



:::

## **自定义路径**

默认安装在 `/opt/alist` 中。 自定义安装路径，将安装路径作为第二个参数添加，必须是绝对路径（如果路径以 alist 结尾，则直接安装到给定路径，否则会安装在给定路径 alist 目录下），如 安装到 `/root`：

:::tabs

@tab 正式版
```bash
# Install
curl -fsSL "https://alistgo.com/v3.sh" -o v3.sh && bash v3.sh install /root
# update
curl -fsSL "https://alistgo.com/v3.sh" -o v3.sh && bash v3.sh update /root
# Uninstall
curl -fsSL "https://alistgo.com/v3.sh" -o v3.sh && bash v3.sh uninstall /root
```

@tab 测试版
```bash
# Install
curl -fsSL "https://alistgo.com/beta.sh" | bash -s install /root
# update
curl -fsSL "https://alistgo.com/beta.sh" | bash -s update /root
# Uninstall
curl -fsSL "https://alistgo.com/beta.sh" | bash -s uninstall /root
```

:::





- 启动: `systemctl start alist`
- 关闭: `systemctl stop alist`
- 状态: `systemctl status alist`
- 重启: `systemctl restart alist`



## **获取密码**

需要进入脚本安装AList的目录文件夹內执行如下命令

#### 低于v3.25.0版本

```bash
./alist admin
```


#### 高于v3.25.0版本

3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 **`随机生成`** 或者 **`手动设置`**

```bash
# 随机生成一个密码
./alist admin random
# 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码
./alist admin set NEW_PASSWORD
```



## **一直在加载怎么办?**

挂载了一些网盘但是不能用了重启了一下AList，发现进不去 网页提示：`获取设置失败：请稍后，正在加载存储`怎么办？

1. 等待几分钟
2. 通过使用命令将`失效的/无法启动的`存储停止运行



:::tabs#stop
@tab Linux

如果通过命令停止 ==必须先进入你AList所在的文件夹输入命令==

如果我们不知道是那个存储原因导致的，可以通过命令列出所有的存储

```bash
./alist storage list
```

```bash{1}
[root@OPSD-g8xXordx3B9f alist]# ./alist storage list
INFO[2023-11-23 17:54:10] reading config file: data/config.json
INFO[2023-11-23 17:54:10] load config from env with prefix: ALIST_
INFO[2023-11-23 17:54:10] init logrus...
INFO[2023-11-23 17:54:10] Found 2 storages
┌─────────────────────────────────────────────────────────────────┐
│ ID    Driver            Mount Path                      Enabled │
│─────────────────────────────────────────────────────────────────│
│ 1     S3                /R2                             true    │
│ 2     UrlTree           /233                            true    │
└─────────────────────────────────────────────────────────────────┘
```

输入查询命令后我们会进入另一种模式无法输入，如果添加的存储过多可以通过键盘的 ↑ 和 ↓ 来往下翻，等找到后可以按`Ctrl+C`退出

例如我们是因为 `233` 这个存储停止的，我们就输入命令来停止，然后在 重启一下AList就可以了

```bash
./alist storage disable /233
```

```bash{1,5}
[root@OPSD-g8xXordx3B9f alist]# ./alist storage disable /233
INFO[2023-11-23 17:54:52] reading config file: data/config.json
INFO[2023-11-23 17:54:52] load config from env with prefix: ALIST_
INFO[2023-11-23 17:54:52] init logrus...
INFO[2023-11-23 17:54:52] Storage with mount path [/233] have been disabled
```



@tab Windows

如果通过命令停止 ==必须先进入你AList所在的文件夹输入命令==

如果我们不知道是那个存储原因导致的，可以通过命令列出所有的存储

```bash
alist.exe storage list
```

```bash{1}
C:\Users\admin\Desktop\alist>alist.exe storage list
INFO[2023-11-23 18:36:23] reading config file: data\config.json
INFO[2023-11-23 18:36:23] load config from env with prefix: ALIST_
INFO[2023-11-23 18:36:23] init logrus...
INFO[2023-11-23 18:36:23] Found 13 storages
┌──────────────────────────────────────────────────────────────────┐
│ ID    Driver            Mount Path                      Enabled  │
│──────────────────────────────────────────────────────────────────│
│ 1     AliyundriveOpen   /open                           true     │
│ 9     Local             /code                           true     │
│ 10    AList V3          /ceshi                          true     │
└──────────────────────────────────────────────────────────────────┘
```

输入查询命令后我们会进入另一种模式无法输入，如果添加的存储过多可以通过键盘的 ↑ 和 ↓ 来往下翻，等找到后可以按`Ctrl+C`退出

例如我们是因为 `open` 这个存储停止的，我们就输入命令来停止，然后在 重启一下AList就可以了

```bash
alist.exe storage disable /open
```

```bash{1,5}
C:\Users\admin\Desktop\alist>alist.exe storage disable /open
INFO[2023-11-23 18:41:43] reading config file: data\config.json
INFO[2023-11-23 18:41:43] load config from env with prefix: ALIST_
INFO[2023-11-23 18:41:43] init logrus...
INFO[2023-11-23 18:41:43] Storage with mount path [/open] have been disabled
```



@tab Mac

如果通过命令停止 ==必须先进入你AList所在的文件夹输入命令==

由于暂时没有Mac设备，无法提供具体示例，但是命令都是一样的也可以参考 Linux 和 Windows

列出存储:

```bash
alist storage list
```

停止存储:

```bash
alist storage disable /Path
```



@tab Docker

这里的 `Docker` 目前只提供了使用文档命令安装的默认版本，==如果你搭建多个Docker版本的AList你需要修改个别参数喔~==

如果我们不知道是那个存储原因导致的，可以通过命令列出所有的存储

```bash
docker exec -it alist ./alist storage list
```

```bash{1}
[root@OPSD-g8xXordx3B9f alist]# docker exec -it alist ./alist storage list
INFO[2023-11-23 11:50:08] reading config file: data/config.json
INFO[2023-11-23 11:50:08] load config from env with prefix: ALIST_
INFO[2023-11-23 11:50:08] init logrus...
INFO[2023-11-23 11:50:08] Found 8 storages
┌─────────────────────────────────────────────────────────────────┐
│ ID    Driver            Mount Path                      Enabled │
│─────────────────────────────────────────────────────────────────│
│ 1     PikPakShare       /pikpak                         true    │
│ 2     OnedriveAPP       /utena_onedrive                 true    │
│ 3     OnedriveAPP       /adelev_onedrive                true    │
│ 4     OnedriveAPP       /megan_onedrive                 true    │
│ 5     OnedriveAPP       /patti_onedrive                 true    │
└─────────────────────────────────────────────────────────────────┘
```

输入查询命令后我们会进入另一种模式无法输入，如果添加的存储过多可以通过键盘的 ↑ 和 ↓ 来往下翻，等找到后可以按`Ctrl+C`退出

例如我们是因为 `pikpak` 这个存储停止的，我们就输入命令来停止，然后在 重启一下AList就可以了

```bash
docker exec -it alist ./alist storage disable /pikpak
```

```bash{1,5}
[root@OPSD-g8xXordx3B9f alist]# docker exec -it alist ./alist storage disable /pikpak
INFO[2023-11-23 17:54:52] reading config file: data/config.json
INFO[2023-11-23 17:54:52] load config from env with prefix: ALIST_
INFO[2023-11-23 17:54:52] init logrus...
INFO[2023-11-23 17:54:52] Storage with mount path [/pikpak] have been disabled
```

@tab 其它

基本上都一样的命令，只是前缀文件不同，万变不离其宗。

查询存储:

```bash
alist storage list
```

停止存储:

```bash
alist storage disable /path
```



:::



