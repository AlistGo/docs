# Alist Manager Script for Windows
# Version: 1.8.0 (自动编码兼容 PS5.1 + PS7+)
# Author: Troray (改写 by ChatGPT)

# -----------------------------
# 自动检测 PowerShell 版本并设置输出编码
$psVersion = $PSVersionTable.PSVersion.Major

if ($psVersion -ge 7) {
    # PowerShell 7+ UTF-8
    chcp 65001 > $null
    [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
    $EncName = "UTF-8"
} else {
    # PowerShell 5.1 / CMD GBK
    chcp 936 > $null
    [Console]::OutputEncoding = [System.Text.Encoding]::GetEncoding(936)
    $EncName = "GBK"
}

# 提示用户当前编码（可选）
Write-Host "当前终端编码: $EncName" -ForegroundColor Yellow
# -----------------------------

param($Action, $InstallPath)
if (-not $Action) { $Action = "menu" }
if (-not $InstallPath) { $InstallPath = "C:\alist" }

# 颜色定义
$Green  = "Green"
$Red    = "Red"
$Yellow = "Yellow"
$White  = "White"
$ServiceName = "AlistService"

# -----------------------------
# 输出函数
function Write-Info($msg, $color="White") {
    $validColors = @("Black","DarkBlue","DarkGreen","DarkCyan","DarkRed",
                     "DarkMagenta","DarkYellow","Gray","DarkGray","Blue",
                     "Green","Cyan","Red","Magenta","Yellow","White")
    if ($validColors -contains $color) {
        [Console]::ForegroundColor = $color
        [Console]::WriteLine($msg)
        [Console]::ResetColor()
    } else {
        [Console]::WriteLine($msg)
    }
}

# 下载文件
function Download-File($url, $output) {
    Try {
        Invoke-WebRequest -Uri $url -OutFile $output -UseBasicParsing -TimeoutSec 30
        return $true
    } Catch {
        Write-Info "下载失败: $url" $Red
        return $false
    }
}

# 获取最新版本
function Get-LatestVersion {
    $apiUrl = "https://dapi.alistgo.com/v0/version/latest"
    Try {
        $json = Invoke-RestMethod -Uri $apiUrl -TimeoutSec 10
        return $json
    } Catch {
        return $null
    }
}

# 安装 Alist
function Install-Alist {
    if (-Not (Test-Path $InstallPath)) {
        New-Item -ItemType Directory -Path $InstallPath | Out-Null
    }

    $latest = Get-LatestVersion
    if ($null -eq $latest) {
        Write-Info "获取版本信息失败，使用 GitHub 源" $Yellow
        $url = "https://github.com/alist-org/alist/releases/latest/download/alist-windows-amd64.zip"
    } else {
        $version = $latest.version
        Write-Info "最新版本: $version" $Green
        $url = "https://github.com/alist-org/alist/releases/download/v$version/alist-windows-amd64.zip"
    }

    $tmpZip = "$env:TEMP\alist.zip"
    if (-Not (Download-File $url $tmpZip)) { exit 1 }

    Expand-Archive -Path $tmpZip -DestinationPath $InstallPath -Force
    Remove-Item $tmpZip -Force

    Write-Info "Alist 已安装到 $InstallPath" $Green
    Write-Info "运行: `"$InstallPath\alist.exe server`"" $Yellow
}

# 更新 Alist
function Update-Alist {
    if (-Not (Test-Path "$InstallPath\alist.exe")) {
        Write-Info "未检测到已安装的 Alist，请先安装" $Red
        exit 1
    }
    Write-Info "开始更新..." $Green
    Install-Alist
}

# 卸载 Alist
function Uninstall-Alist {
    if (Test-Path $InstallPath) {
        Remove-Item -Recurse -Force $InstallPath
        Write-Info "Alist 已卸载" $Green
    } else {
        Write-Info "未检测到安装目录 $InstallPath" $Yellow
    }
}

# 注册服务
function Service-Install {
    if (-Not (Test-Path "$InstallPath\alist.exe")) {
        Write-Info "请先安装 Alist 再注册服务" $Red
        exit 1
    }
    Write-Info "正在注册 Windows 服务 $ServiceName ..." $Green
    sc.exe create $ServiceName binPath= "`"$InstallPath\alist.exe`" server" start= auto DisplayName= "Alist Service" | Out-Null
    sc.exe description $ServiceName "Alist Web 文件管理" | Out-Null
    Write-Info "服务注册完成，已设置为开机自启" $Green
}

# 删除服务
function Service-Remove {
    Write-Info "正在删除 Windows 服务 $ServiceName ..." $Yellow
    sc.exe stop $ServiceName | Out-Null
    sc.exe delete $ServiceName | Out-Null
    Write-Info "服务已删除" $Green
}

function Service-Start   { sc.exe start $ServiceName }
function Service-Stop    { sc.exe stop $ServiceName }
function Service-Restart { Service-Stop; Start-Sleep -Seconds 2; Service-Start }
function Service-Status  { sc.exe query $ServiceName }

# 菜单
function Show-Menu {
    while ($true) {
        Clear-Host
        Write-Info "`n=== Alist Windows 管理脚本 ===`n" $Green
        Write-Info "1. 安装 Alist" $White
        Write-Info "2. 更新 Alist" $White
        Write-Info "3. 卸载 Alist" $White
        Write-Info "-------------------------" $White
        Write-Info "4. 注册为 Windows 服务 (开机自启)" $White
        Write-Info "5. 删除 Windows 服务" $White
        Write-Info "6. 启动服务" $White
        Write-Info "7. 停止服务" $White
        Write-Info "8. 重启服务" $White
        Write-Info "9. 查看服务状态" $White
        Write-Info "-------------------------" $White
        Write-Info "0. 退出" $White
        $choice = Read-Host "请输入选项"

        switch ($choice) {
            "1" { Install-Alist; Pause }
            "2" { Update-Alist; Pause }
            "3" { Uninstall-Alist; Pause }
            "4" { Service-Install; Pause }
            "5" { Service-Remove; Pause }
            "6" { Service-Start; Pause }
            "7" { Service-Stop; Pause }
            "8" { Service-Restart; Pause }
            "9" { Service-Status; Pause }
            "0" { exit 0 }
            default { Write-Info "无效选择" $Red; Pause }
        }
    }
}

# 主程序
switch ($Action) {
    "install"         { Install-Alist }
    "update"          { Update-Alist }
    "uninstall"       { Uninstall-Alist }
    "service-install" { Service-Install }
    "service-remove"  { Service-Remove }
    "start"           { Service-Start }
    "stop"            { Service-Stop }
    "restart"         { Service-Restart }
    "status"          { Service-Status }
    "menu"            { Show-Menu }
    default           { Show-Menu }
}
