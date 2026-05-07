---
# This is the icon of the page
icon: iconfont icon-people
# This control sidebar order
order: 2
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Advanced
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# User

:::tip
Supported version:

- Role-scoped path aggregation and `Check path limit`: `>= v3.53.0`
- Device sessions, `My Sessions`, and global device-limit controls: `>= v3.52.0`
:::

## **Username**
Username for login
## **Password**
Password for login
:::tip
Password is invalid for guest user.

If you enter an incorrect password 6 times in a row, the current IP will be blocked for 30 minutes and you will not be able to enter your account and password to log in. However, it will not affect other IPs. It will only target IPs that entered 6 incorrect passwords.

- Restarting will immediately remove the 30-minute ban time

:::

<br/>



## **Base path**
The root path that users see when he/she log in

-----

Q: **How to allow a user to see multiple folder paths?**

A: You can create a new [alias](alias.md) storage, add all the paths you need to show the user to the alias, and then point to the newly created alias storage in the user path

<br/>

## **Roles and paths**

- AList now recommends managing user access through roles.
- A role can contain multiple permission scopes. Each scope is a path plus its permission bits.
- The user's effective permissions are the union of all assigned role scopes.
- `Base path` only controls the default landing path after login. It does not replace role permission scopes.

<br/>



## **Permission**
- Can see hides: Can see the hides files and folders
- Access without password: Can access without password
- Add offline download tasks: Add offline download tasks
- Mkdir or upload: Can make directory or upload files
- Rename: Can rename files and folders
- Move: Can move files and folders
- Copy: Can copy files and folders
- Delete: Can delete files and folders
- Webdav read: Can read files and folders with webdav
- Webdav manage: Can manage files and folders with webdav
- FTP read: Can read files and folders with FTP
- FTP manage: Can manage files and folders with FTP
- Read archives: Read the contents of the file in the compressed package
  - After turning on this option, compressed package format files will be previewed by default (as shown in the figure below), which will consume some server traffic, but will not download them all.
  - If you want to turn off the preferred preview of the compressed format, ==**Manage => Setting => Preview by default when opening archives**==, this option is turned off, and the preference is the download mode
- Decompress: Decompress compressed package files online
- Check path limit: Restrict access to paths covered by the user's role permission scopes

![](/img/advanced/user_read_archives_light.png#light)

![](/img/advanced/user_read_archives_dark.png#dark)

<br/>



## **Disabled**

After checking, this user will stop using it and cannot log in. The guest account is disabled by default. If you want to enable the guest account, please close it manually.

<br/>

## **Device sessions**

- AList identifies a device by the `Client-Id` header, or by the `client_id` query parameter in API requests. The web UI generates and stores a stable client id automatically.
- `max_devices` is a global setting. `0` means unlimited devices.
- When `max_devices` is greater than `0`, `device_evict_policy` controls the overflow behavior:
  - `deny`: block the new login
  - `evict_oldest`: invalidate the oldest active device session first
- `device_session_ttl` is also a global setting. It is measured in seconds and is used to clean stale device-session records automatically.
- Configure these global controls in `Manage => Settings => Global`.
- Users can review and evict their own devices in `Manage => Session => My Session`.
- Admins can view all device sessions in `Manage => Session => Management`.
- Logging out marks the current device session inactive. After that, requests from the same device session must log in again.

<br/>



## **Tips**

1. Are you worried that visitors can see all files? [**Click to see how to set it up here**](../../faq/why.md#how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in)

2. **`Guest user is disabled, login please`**: In order to protect your AList security, the guest access permission is closed, if you need guest access, open it yourself 
   - AList Manage --> users --> `guest` -->  **Disable** uncheck
   
3. Question about **`Copy/Upload`**

   - If you upload (including offline download and upload) large files, or upload a lot of files (hundreds or thousands), it is not recommended to use AList to operate, please go to the corresponding network disk official website to operate directly
   
4. Non-admin users can manage offline download, copy, upload and other operations in the background
   - AList needs to be upgraded to <Badge text="v3.39.1" type="info" vertical="middle" /> version, and admin can also view the user's task progress and operations

![](/img/advanced/user_manage.png)
