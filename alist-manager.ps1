param($Action, $InstallPath)

# -----------------------------
# 自动检测 PowerShell 版本并设置输出编码
$psVersion = $PSVersionTable.PSVersion.Major

# UTF-8 编码对象（无 BOM）
$global:Utf8NoBom = New-Object System.Text.UTF8Encoding($false)

if ($psVersion -ge 7) {
    chcp 65001 > $null
    [Console]::OutputEncoding = $global:Utf8NoBom
    $EncName = "UTF-8"
} else {
    chcp 936 > $null
    [Console]::OutputEncoding = [System.Text.Encoding]::GetEncoding(936)
    $EncName = "GBK"
}
Write-Host "当前终端编码: $EncName" -ForegroundColor Yellow
# -----------------------------

if (-not $Action) { $Action = "menu" }
if (-not $InstallPath) { $InstallPath = "C:\alist" }

# -----------------------------
# 颜色与常量
$Green  = "Green"
$Red    = "Red"
$Yellow = "Yellow"
$White  = "White"
$ServiceName = "AlistService"
$nssmPath = "$InstallPath\nssm.exe"

# -----------------------------
function Write-Info($msg, $color="White") {
    $validColors = @("Black","DarkBlue","DarkGreen","DarkCyan","DarkRed",
                     "DarkMagenta","DarkYellow","Gray","DarkGray","Blue",
                     "Green","Cyan","Red","Magenta","Yellow","White")

    # 转码输出，避免乱码
    $outMsg = [System.Text.Encoding]::Default.GetString(
                  [System.Text.Encoding]::Convert(
                      [System.Text.Encoding]::UTF8,
                      [Console]::OutputEncoding,
                      [System.Text.Encoding]::UTF8.GetBytes($msg)
                  )
              )

    if ($validColors -contains $color) {
        [Console]::ForegroundColor = $color
        [Console]::WriteLine($outMsg)
        [Console]::ResetColor()
    } else {
        [Console]::WriteLine($outMsg)
    }
}

function Download-File($url, $output) {
    Try {
        Invoke-WebRequest -Uri $url -OutFile $output -UseBasicParsing -TimeoutSec 30
        return $true
    } Catch {
        Write-Info "下载失败: $url" $Red
        return $false
    }
}

function Get-LatestVersion {
    $apiUrl = "https://api.github.com/repos/alist-org/alist/releases/latest"
    Try {
        $json = Invoke-RestMethod -Uri $apiUrl -Headers @{ "User-Agent" = "PowerShell" } -TimeoutSec 10
        return $json.tag_name.TrimStart("v")
    } Catch {
        Write-Info "获取版本信息失败，使用默认版本 3.52.0" $Yellow
        return "3.52.0"
    }
}

function Get-LocalIP {
    $realNICs = Get-NetIPAddress -AddressFamily IPv4 | Where-Object {
        $_.IPAddress -ne "127.0.0.1" -and
        $_.IPAddress -notlike "169.*" -and
        $_.InterfaceAlias -notmatch "vEthernet|Virtual|VMware|Loopback|WSL|Hyper-V" -and
        $_.ValidLifetime -ne "Infinite"
    }

    $ip = $realNICs | Sort-Object InterfaceMetric | Select-Object -First 1 -ExpandProperty IPAddress

    if (-not $ip) { $ip = "127.0.0.1" }
    return $ip
}

function Install-NSSM {
    if (-Not (Test-Path $nssmPath)) {
        $tmpZip = "$env:TEMP\nssm.zip"
        $tmpDir = "$env:TEMP\nssm"
        Write-Info "正在下载 nssm ..." $Green
        if (-Not (Download-File "https://nssm.cc/release/nssm-2.24.zip" $tmpZip)) {
            Write-Info "nssm 下载失败，请手动下载 nssm-2.24.zip 并放到 $InstallPath" $Red
            exit 1
        }
        if (Test-Path $tmpDir) { Remove-Item $tmpDir -Recurse -Force }
        Expand-Archive $tmpZip -DestinationPath $tmpDir -Force

        $nssmExeSrc = Get-ChildItem -Path $tmpDir -Recurse -Filter "nssm.exe" | Where-Object { $_.FullName -match "win64" } | Select-Object -First 1
        if (-Not $nssmExeSrc) {
            Write-Info "未找到 nssm.exe" $Red
            exit 1
        }

        Copy-Item $nssmExeSrc.FullName $InstallPath -Force
        Remove-Item $tmpZip -Force
        Remove-Item $tmpDir -Recurse -Force
        Write-Info "nssm 安装完成" $Green
    }
}

function Get-Arch {
    switch ($env:PROCESSOR_ARCHITECTURE) {
        "AMD64" { return "amd64" }
        "ARM64" { return "arm64" }
        default { return "386" }
    }
}

function Install-Alist {
    if (-Not (Test-Path $InstallPath)) { New-Item -ItemType Directory -Path $InstallPath | Out-Null }

    $arch = Get-Arch
    Write-Info "检测到 CPU 架构: $arch" $Green

    $version = Get-LatestVersion
    Write-Info "最新版本: $version" $Green

    $filename = "alist-$version-windows-$arch.zip"
    $officialUrl = "https://alistgo.com/download/Alist/v$version/$filename"
    $tmpZip = "$env:TEMP\alist.zip"
    Write-Info "尝试从官方镜像下载: $officialUrl" $Green
    $success = Download-File $officialUrl $tmpZip

    if (-not $success) {
        Write-Info "官方镜像下载失败！" $Yellow
        Write-Info "是否使用 GitHub 源下载？" $Green
        Write-Info "1. 使用 GitHub 默认地址" $Green
        Write-Info "2. 使用 GitHub 代理" $Green
        $choice = Read-Host "请选择 [1-2] (默认 1)"
        if ($choice -eq "2") {
            $proxyInput = Read-Host "请输入代理地址 (https://开头，/结尾)"
            if ($proxyInput) {
                $ghProxy = $proxyInput
                $downloadBase = "${ghProxy}https://github.com/alist-org/alist/releases/latest/download"
            } else {
                $downloadBase = "https://github.com/alist-org/alist/releases/latest/download"
            }
        } else {
            $downloadBase = "https://github.com/alist-org/alist/releases/latest/download"
        }

        $url = "$downloadBase/$filename"
        Write-Info "开始从 GitHub 下载: $url" $Green
        if (-Not (Download-File $url $tmpZip)) {
            Write-Info "GitHub 下载失败！请检查网络或代理" $Red
            exit 1
        }
    }

    Expand-Archive -Path $tmpZip -DestinationPath $InstallPath -Force
    Remove-Item $tmpZip -Force
    Write-Info "Alist 已安装到 $InstallPath" $Green
}

function Invoke-AlistAdminRandom {
    if (-Not (Test-Path "$InstallPath\alist.exe")) {
        throw "未找到 $InstallPath\alist.exe，请先安装 Alist。"
    }
    Push-Location $InstallPath
    try {
        $output = & "$InstallPath\alist.exe" admin random 2>&1
    } finally {
        Pop-Location
    }

    $uMatch = ($output | Select-String -Pattern 'username:\s*(\S+)' -AllMatches).Matches | Select-Object -First 1
    $pMatch = ($output | Select-String -Pattern 'password:\s*(\S+)' -AllMatches).Matches | Select-Object -First 1
    if (-not $uMatch -or -not $pMatch) {
        throw "解析随机账号/密码失败。命令输出:`n$output"
    }
    $username = $uMatch.Groups[1].Value
    $password = $pMatch.Groups[1].Value
    return @{ Username = $username; Password = $password; Raw = $output }
}

function Service-InstallAndStart {
    if (-Not (Test-Path "$InstallPath\alist.exe")) {
        Write-Info "请先安装 Alist 再注册服务" $Red
        exit 1
    }

    Install-NSSM
    Write-Info "正在注册 Windows 服务 $ServiceName ..." $Green
    & $nssmPath install $ServiceName "$InstallPath\alist.exe" "server"
    & $nssmPath set $ServiceName Start SERVICE_AUTO_START

    Write-Info "正在启动服务 $ServiceName ..." $Green
    & $nssmPath start $ServiceName

    Write-Info "首次安装，随机生成 admin 账号/密码..." $Green
    try {
        $creds = Invoke-AlistAdminRandom
        Write-Info "账号: $($creds.Username)" $Green
        Write-Info "密码: $($creds.Password)" $Green
    } catch {
        Write-Info $_.Exception.Message $Red
        Write-Info "随机生成失败（服务已启动）。如需重试，可手动执行：alist.exe admin random" $Yellow
    }

    Write-Info "登录地址: http://$(Get-LocalIP):5244" $Yellow
}

function Service-Start {
    Install-NSSM
    Write-Info "正在启动服务 $ServiceName ..." $Green
    & $nssmPath start $ServiceName
    Write-Info "已启动。后续不会自动改密码；如需重置请手动执行：alist.exe admin random" $Yellow
    Write-Info "登录地址: http://$(Get-LocalIP):5244" $Yellow
}

function Service-Stop { Install-NSSM; & $nssmPath stop $ServiceName }
function Service-Restart { Service-Stop; Start-Sleep -Seconds 2; Service-Start }
function Service-Remove {
    Install-NSSM
    Write-Info "正在删除 Windows 服务 $ServiceName ..." $Yellow
    & $nssmPath stop $ServiceName | Out-Null
    & $nssmPath remove $ServiceName confirm | Out-Null
    Write-Info "服务已删除" $Green
}
function Service-Status { Install-NSSM; & $nssmPath status $ServiceName }

function Show-Menu {
    while ($true) {
        Clear-Host
        Write-Info "`n=== Alist Windows 管理脚本 ===`n" $Green
        Write-Info "1. 安装 Alist" $White
        Write-Info "2. 更新 Alist" $White
        Write-Info "3. 卸载 Alist" $White
        Write-Info "-------------------------" $White
        Write-Info "4. 注册并启动服务（首次安装后随机一次）" $White
        Write-Info "5. 删除 Windows 服务" $White
        Write-Info "6. 启动服务（不改密码）" $White
        Write-Info "7. 停止服务" $White
        Write-Info "8. 重启服务（不改密码）" $White
        Write-Info "9. 查看服务状态" $White
        Write-Info "-------------------------" $White
        Write-Info "0. 退出" $White
        $choice = Read-Host "请输入选项"

        switch ($choice) {
            "1" { Install-Alist; Pause }
            "2" { Install-Alist; Pause }
            "3" { Remove-Item -Recurse -Force $InstallPath; Write-Info "已卸载"; Pause }
            "4" { Service-InstallAndStart; Pause }
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

switch ($Action) {
    "install"         { Install-Alist }
    "update"          { Install-Alist }
    "uninstall"       { Remove-Item -Recurse -Force $InstallPath; Write-Info "已卸载" }
    "service-install" { Service-InstallAndStart }
    "service-remove"  { Service-Remove }
    "start"           { Service-Start }
    "stop"            { Service-Stop }
    "restart"         { Service-Restart }
    "status"          { Service-Status }
    "menu"            { Show-Menu }
    default           { Show-Menu }
}
