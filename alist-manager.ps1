param($Action, $InstallPath)

# -----------------------------
# �Զ���� PowerShell �汾�������������
$psVersion = $PSVersionTable.PSVersion.Major

# UTF-8 ��������� BOM��
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
Write-Host "��ǰ�ն˱���: $EncName" -ForegroundColor Yellow
# -----------------------------

if (-not $Action) { $Action = "menu" }
if (-not $InstallPath) { $InstallPath = "C:\alist" }

# -----------------------------
# ��ɫ�볣��
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

    # ת���������������
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
        Write-Info "����ʧ��: $url" $Red
        return $false
    }
}

function Get-LatestVersion {
    $apiUrl = "https://api.github.com/repos/alist-org/alist/releases/latest"
    Try {
        $json = Invoke-RestMethod -Uri $apiUrl -Headers @{ "User-Agent" = "PowerShell" } -TimeoutSec 10
        return $json.tag_name.TrimStart("v")
    } Catch {
        Write-Info "��ȡ�汾��Ϣʧ�ܣ�ʹ��Ĭ�ϰ汾 3.52.0" $Yellow
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
        Write-Info "�������� nssm ..." $Green
        if (-Not (Download-File "https://nssm.cc/release/nssm-2.24.zip" $tmpZip)) {
            Write-Info "nssm ����ʧ�ܣ����ֶ����� nssm-2.24.zip ���ŵ� $InstallPath" $Red
            exit 1
        }
        if (Test-Path $tmpDir) { Remove-Item $tmpDir -Recurse -Force }
        Expand-Archive $tmpZip -DestinationPath $tmpDir -Force

        $nssmExeSrc = Get-ChildItem -Path $tmpDir -Recurse -Filter "nssm.exe" | Where-Object { $_.FullName -match "win64" } | Select-Object -First 1
        if (-Not $nssmExeSrc) {
            Write-Info "δ�ҵ� nssm.exe" $Red
            exit 1
        }

        Copy-Item $nssmExeSrc.FullName $InstallPath -Force
        Remove-Item $tmpZip -Force
        Remove-Item $tmpDir -Recurse -Force
        Write-Info "nssm ��װ���" $Green
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
    Write-Info "��⵽ CPU �ܹ�: $arch" $Green

    $version = Get-LatestVersion
    Write-Info "���°汾: $version" $Green

    $filename = "alist-$version-windows-$arch.zip"
    $officialUrl = "https://alistgo.com/download/Alist/v$version/$filename"
    $tmpZip = "$env:TEMP\alist.zip"
    Write-Info "���Դӹٷ���������: $officialUrl" $Green
    $success = Download-File $officialUrl $tmpZip

    if (-not $success) {
        Write-Info "�ٷ���������ʧ�ܣ�" $Yellow
        Write-Info "�Ƿ�ʹ�� GitHub Դ���أ�" $Green
        Write-Info "1. ʹ�� GitHub Ĭ�ϵ�ַ" $Green
        Write-Info "2. ʹ�� GitHub ����" $Green
        $choice = Read-Host "��ѡ�� [1-2] (Ĭ�� 1)"
        if ($choice -eq "2") {
            $proxyInput = Read-Host "����������ַ (https://��ͷ��/��β)"
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
        Write-Info "��ʼ�� GitHub ����: $url" $Green
        if (-Not (Download-File $url $tmpZip)) {
            Write-Info "GitHub ����ʧ�ܣ�������������" $Red
            exit 1
        }
    }

    Expand-Archive -Path $tmpZip -DestinationPath $InstallPath -Force
    Remove-Item $tmpZip -Force
    Write-Info "Alist �Ѱ�װ�� $InstallPath" $Green
}

function Invoke-AlistAdminRandom {
    if (-Not (Test-Path "$InstallPath\alist.exe")) {
        throw "δ�ҵ� $InstallPath\alist.exe�����Ȱ�װ Alist��"
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
        throw "��������˺�/����ʧ�ܡ��������:`n$output"
    }
    $username = $uMatch.Groups[1].Value
    $password = $pMatch.Groups[1].Value
    return @{ Username = $username; Password = $password; Raw = $output }
}

function Service-InstallAndStart {
    if (-Not (Test-Path "$InstallPath\alist.exe")) {
        Write-Info "���Ȱ�װ Alist ��ע�����" $Red
        exit 1
    }

    Install-NSSM
    Write-Info "����ע�� Windows ���� $ServiceName ..." $Green
    & $nssmPath install $ServiceName "$InstallPath\alist.exe" "server"
    & $nssmPath set $ServiceName Start SERVICE_AUTO_START

    Write-Info "������������ $ServiceName ..." $Green
    & $nssmPath start $ServiceName

    Write-Info "�״ΰ�װ��������� admin �˺�/����..." $Green
    try {
        $creds = Invoke-AlistAdminRandom
        Write-Info "�˺�: $($creds.Username)" $Green
        Write-Info "����: $($creds.Password)" $Green
    } catch {
        Write-Info $_.Exception.Message $Red
        Write-Info "�������ʧ�ܣ����������������������ԣ����ֶ�ִ�У�alist.exe admin random" $Yellow
    }

    Write-Info "��¼��ַ: http://$(Get-LocalIP):5244" $Yellow
}

function Service-Start {
    Install-NSSM
    Write-Info "������������ $ServiceName ..." $Green
    & $nssmPath start $ServiceName
    Write-Info "�����������������Զ������룻�����������ֶ�ִ�У�alist.exe admin random" $Yellow
    Write-Info "��¼��ַ: http://$(Get-LocalIP):5244" $Yellow
}

function Service-Stop { Install-NSSM; & $nssmPath stop $ServiceName }
function Service-Restart { Service-Stop; Start-Sleep -Seconds 2; Service-Start }
function Service-Remove {
    Install-NSSM
    Write-Info "����ɾ�� Windows ���� $ServiceName ..." $Yellow
    & $nssmPath stop $ServiceName | Out-Null
    & $nssmPath remove $ServiceName confirm | Out-Null
    Write-Info "������ɾ��" $Green
}
function Service-Status { Install-NSSM; & $nssmPath status $ServiceName }

function Show-Menu {
    while ($true) {
        Clear-Host
        Write-Info "`n=== Alist Windows ����ű� ===`n" $Green
        Write-Info "1. ��װ Alist" $White
        Write-Info "2. ���� Alist" $White
        Write-Info "3. ж�� Alist" $White
        Write-Info "-------------------------" $White
        Write-Info "4. ע�Ტ���������״ΰ�װ�����һ�Σ�" $White
        Write-Info "5. ɾ�� Windows ����" $White
        Write-Info "6. �������񣨲������룩" $White
        Write-Info "7. ֹͣ����" $White
        Write-Info "8. �������񣨲������룩" $White
        Write-Info "9. �鿴����״̬" $White
        Write-Info "-------------------------" $White
        Write-Info "0. �˳�" $White
        $choice = Read-Host "������ѡ��"

        switch ($choice) {
            "1" { Install-Alist; Pause }
            "2" { Install-Alist; Pause }
            "3" { Remove-Item -Recurse -Force $InstallPath; Write-Info "��ж��"; Pause }
            "4" { Service-InstallAndStart; Pause }
            "5" { Service-Remove; Pause }
            "6" { Service-Start; Pause }
            "7" { Service-Stop; Pause }
            "8" { Service-Restart; Pause }
            "9" { Service-Status; Pause }
            "0" { exit 0 }
            default { Write-Info "��Чѡ��" $Red; Pause }
        }
    }
}

switch ($Action) {
    "install"         { Install-Alist }
    "update"          { Install-Alist }
    "uninstall"       { Remove-Item -Recurse -Force $InstallPath; Write-Info "��ж��" }
    "service-install" { Service-InstallAndStart }
    "service-remove"  { Service-Remove }
    "start"           { Service-Start }
    "stop"            { Service-Stop }
    "restart"         { Service-Restart }
    "status"          { Service-Status }
    "menu"            { Show-Menu }
    default           { Show-Menu }
}
