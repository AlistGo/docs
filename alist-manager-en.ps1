# Alist Manager Script for Windows
# Version: 3.57.0 (Random password only on first install)

# -----------------------------
# Auto-detect PowerShell version and set output encoding
$psVersion = $PSVersionTable.PSVersion.Major
if ($psVersion -ge 7) {
    chcp 65001 > $null
    [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
    $EncName = "UTF-8"
} else {
    chcp 936 > $null
    [Console]::OutputEncoding = [System.Text.Encoding]::GetEncoding(936)
    $EncName = "GBK"
}
Write-Host "Current terminal encoding: $EncName" -ForegroundColor Yellow
# -----------------------------

param($Action, $InstallPath)
if (-not $Action) { $Action = "menu" }
if (-not $InstallPath) { $InstallPath = "C:\alist" }

# -----------------------------
# Colors & constants
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
    if ($validColors -contains $color) {
        [Console]::ForegroundColor = $color
        [Console]::WriteLine($msg)
        [Console]::ResetColor()
    } else {
        [Console]::WriteLine($msg)
    }
}

function Pause-English {
    Write-Host "Press Enter to continue..." -ForegroundColor Yellow
    [void][System.Console]::ReadLine()
}

function Download-File($url, $output) {
    Try {
        Invoke-WebRequest -Uri $url -OutFile $output -UseBasicParsing -TimeoutSec 30
        return $true
    } Catch {
        Write-Info "Download failed: $url" $Red
        return $false
    }
}

function Get-LatestVersion {
    $apiUrl = "https://api.github.com/repos/alist-org/alist/releases/latest"
    Try {
        $json = Invoke-RestMethod -Uri $apiUrl -Headers @{ "User-Agent" = "PowerShell" } -TimeoutSec 10
        return $json.tag_name.TrimStart("v")
    } Catch {
        Write-Info "Failed to fetch version info, using default version 3.52.0" $Yellow
        return "3.52.0"
    }
}

# -----------------------------
# Get real physical network adapter IPv4
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

# -----------------------------
function Install-NSSM {
    if (-Not (Test-Path $nssmPath)) {
        $tmpZip = "$env:TEMP\nssm.zip"
        $tmpDir = "$env:TEMP\nssm"
        Write-Info "Downloading nssm ..." $Green
        if (-Not (Download-File "https://nssm.cc/release/nssm-2.24.zip" $tmpZip)) {
            Write-Info "nssm download failed, please manually download nssm-2.24.zip and place it in $InstallPath" $Red
            exit 1
        }
        if (Test-Path $tmpDir) { Remove-Item $tmpDir -Recurse -Force }
        Expand-Archive $tmpZip -DestinationPath $tmpDir -Force

        $nssmExeSrc = Get-ChildItem -Path $tmpDir -Recurse -Filter "nssm.exe" | Where-Object { $_.FullName -match "win64" } | Select-Object -First 1
        if (-Not $nssmExeSrc) {
            Write-Info "nssm.exe not found" $Red
            exit 1
        }

        Copy-Item $nssmExeSrc.FullName $InstallPath -Force
        Remove-Item $tmpZip -Force
        Remove-Item $tmpDir -Recurse -Force
        Write-Info "nssm installation completed" $Green
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
    Write-Info "Detected CPU architecture: $arch" $Green

    $version = Get-LatestVersion
    Write-Info "Latest version: $version" $Green

    # Official mirror URL (based on CPU arch)
    $filename = "alist-$version-windows-$arch.zip"
    $officialUrl = "https://alistgo.com/download/Alist/v$version/$filename"
    $tmpZip = "$env:TEMP\alist.zip"
    Write-Info "Trying to download from official mirror: $officialUrl" $Green
    $success = Download-File $officialUrl $tmpZip

    if (-not $success) {
        Write-Info "Official mirror download failed!" $Yellow
        Write-Info "Do you want to download from GitHub instead?" $Green
        Write-Info "1 = GitHub default URL" $Green
        Write-Info "2 = GitHub proxy" $Green
        $choice = Read-Host "Choose download source [1-2] (default 1)"
        if ($choice -eq "2") {
            $proxyInput = Read-Host "Enter proxy URL (https://..., end with /)"
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
        Write-Info "Downloading from GitHub: $url" $Green
        if (-Not (Download-File $url $tmpZip)) {
            Write-Info "GitHub download failed! Please check your network or proxy" $Red
            exit 1
        }
    }

    # Extract
    Expand-Archive -Path $tmpZip -DestinationPath $InstallPath -Force
    Remove-Item $tmpZip -Force
    Write-Info "Alist installed at $InstallPath" $Green
}

# -----------------------------
function Invoke-AlistAdminRandom {
    if (-Not (Test-Path "$InstallPath\alist.exe")) {
        throw "$InstallPath\alist.exe not found. Please install Alist first."
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
        throw "Failed to parse random username/password. Command output:`n$output"
    }
    $username = $uMatch.Groups[1].Value
    $password = $pMatch.Groups[1].Value
    return @{ Username = $username; Password = $password; Raw = $output }
}

# -----------------------------
function Service-InstallAndStart {
    if (-Not (Test-Path "$InstallPath\alist.exe")) {
        Write-Info "Please install Alist first before registering the service" $Red
        exit 1
    }

    Install-NSSM
    Write-Info "Registering Windows service $ServiceName ..." $Green
    & $nssmPath install $ServiceName "$InstallPath\alist.exe" "server"
    & $nssmPath set $ServiceName Start SERVICE_AUTO_START

    Write-Info "Starting service $ServiceName ..." $Green
    & $nssmPath start $ServiceName

    Write-Info "First install, generating random admin username/password..." $Green
    try {
        $creds = Invoke-AlistAdminRandom
        Write-Info "Username: $($creds.Username)" $Green
        Write-Info "Password: $($creds.Password)" $Green
    } catch {
        Write-Info $_.Exception.Message $Red
        Write-Info "Random generation failed (service started). You can retry manually: alist.exe admin random" $Yellow
    }

    Write-Info "Login URL: http://$(Get-LocalIP):5244" $Yellow
}

function Service-Start {
    Install-NSSM
    Write-Info "Starting service $ServiceName ..." $Green
    & $nssmPath start $ServiceName
    Write-Info "Service started. Password will not change automatically. To reset: alist.exe admin random" $Yellow
    Write-Info "Login URL: http://$(Get-LocalIP):5244" $Yellow
}

function Service-Stop { Install-NSSM; & $nssmPath stop $ServiceName }
function Service-Restart { Service-Stop; Start-Sleep -Seconds 2; Service-Start }
function Service-Remove {
    Install-NSSM
    Write-Info "Removing Windows service $ServiceName ..." $Yellow
    & $nssmPath stop $ServiceName | Out-Null
    & $nssmPath remove $ServiceName confirm | Out-Null
    Write-Info "Service removed" $Green
}
function Service-Status { Install-NSSM; & $nssmPath status $ServiceName }

# -----------------------------
function Show-Menu {
    while ($true) {
        Clear-Host
        Write-Info "`n=== Alist Windows Manager ===`n" $Green
        Write-Info "1. Install Alist" $White
        Write-Info "2. Update Alist" $White
        Write-Info "3. Uninstall Alist" $White
        Write-Info "-------------------------" $White
        Write-Info "4. Register and start service (random admin on first install)" $White
        Write-Info "5. Remove Windows service" $White
        Write-Info "6. Start service (no password change)" $White
        Write-Info "7. Stop service" $White
        Write-Info "8. Restart service (no password change)" $White
        Write-Info "9. Show service status" $White
        Write-Info "-------------------------" $White
        Write-Info "0. Exit" $White
        $choice = Read-Host "Enter your choice"

        switch ($choice) {
            "1" { Install-Alist; Pause-English }
            "2" { Install-Alist; Pause-English }
            "3" { Remove-Item -Recurse -Force $InstallPath; Write-Info "Uninstalled" ; Pause-English }
            "4" { Service-InstallAndStart; Pause-English }
            "5" { Service-Remove; Pause-English }
            "6" { Service-Start; Pause-English }
            "7" { Service-Stop; Pause-English }
            "8" { Service-Restart; Pause-English }
            "9" { Service-Status; Pause-English }
            "0" { exit 0 }
            default { Write-Info "Invalid choice" $Red; Pause-English }
        }
    }
}

# -----------------------------
switch ($Action) {
    "install"         { Install-Alist }
    "update"          { Install-Alist }
    "uninstall"       { Remove-Item -Recurse -Force $InstallPath; Write-Info "Uninstalled" }
    "service-install" { Service-InstallAndStart }
    "service-remove"  { Service-Remove }
    "start"           { Service-Start }
    "stop"            { Service-Stop }
    "restart"         { Service-Restart }
    "status"          { Service-Status }
    "menu"            { Show-Menu }
    default           { Show-Menu }
}
