---
icon: iconfont icon-state
order: 286
category:
  - Guide
tag:
  - Storage
  - Guide
  - "Local Proxy"
sticky: true
star: true
---

# Proton Drive

:::info Supported version
Available in `>= v3.54.0`.
:::

Site: **https://drive.proton.me**

## Overview

`ProtonDrive` is a read-write driver for personal Proton Drive accounts.

## Config

### Username / Password

Required Proton account credentials.

### TwoFA Code

Optional two-factor code. Fill it when the account requires 2FA during login or when Proton asks for re-authentication.

### Root Folder Path

Mounted Proton Drive path. The default is `/`.

## Notes

- After a successful login, the driver caches reusable credentials locally so later startups usually do not need a full fresh login.
- File copy is supported, but directory copy is not.
- Downloads are served through a temporary local bridge created by AList instead of a public Proton CDN link.
