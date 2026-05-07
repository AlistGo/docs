---
# This is the icon of the page
icon: iconfont icon-snow
# This control sidebar order
order: 9
# A page can have multiple categories
category:
  - Config
# A page can have multiple tags
tag:
  - Config
  - Settings
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Other settings

:::tip
Supported version:

- Manually setting the admin token in UI/API: `>= v3.56.0`
:::

### **Aria2**

Set Aria2 uri and Aria2 for offline download. Aria2 needs to be installed on the same server(container if use docker) as alist.

<br/>



## **Qbittorrent url**

Used to customize **Qbittorrent** parameters to configure the client to use

The default value is: http://admin:adminadmin@localhost:8080/, you can modify it by referring to [specific instructions. ](../guide/advanced/offline-download.md#_2-qbittorrent)

<br/>



## **115、PikPak、Thunder(Pro)**

**You need to add the corresponding driver first, and then set the temporary directory in the background**

Allow the use of offline download tools such as 115/PikPak/Thunder in any storage. If you use offline download in 115/PikPak/Thunder storage, the file will be downloaded directly to the target directory

- Otherwise, the file will be downloaded to the temporary directory configured by the user, and then transferred to the target directory
  - For example, in the front-end page of the `GoogleDrive` storage driver, calling `Pikpak offline-download` will first download to the Pikpak temporary folder directory set in the background, and then transfer from Pikpak to the `GoogleDrive` file after the Pikpak offline download is completed
- **https://github.com/AlistGo/alist/pull/7716**

<br/>



### **Token**

The token that can be used to access all API.

- In `Manage -> Settings -> Other`, you can copy it, set a fixed value manually, or reset it to a random value.
- After changing it, remember to update scripts, proxy programs, or automation that still use the old token.

<br/>



### **other**

1. When using it, I found that there are two Aria2, but what is the difference? [**Click to view the detailed description**](../faq/why.md#what-is-the-difference-between-the-two-aria2)
2. Support using Aria2 to download folders at the same time and save the folder directory structure style

   1. Configure Aria2 method: `Settings` in the lower right corner --> `Aria2 RPC link` --> `Aria2 RPC secret key (fill in if any)`
      - Aria2 is downloaded locally, so you only need to download it locally. Of course, it also supports pushing to other people's computers or your own server or other computers in your own intranet, provided that there is a device on the public network or intranet that has downloaded Aria2
   
   2. Opening method, `Toggle Checkbox` in the lower right corner--> select list file/folder--> `Download` at the bottom--> `send to Aria2`
   
   3. But it is recommended not to download too much at one time. For example, downloading thousands of folders and tens of thousands of files at one time may cause AList to crash
