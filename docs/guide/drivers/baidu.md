---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 12
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "302"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Baidu Netdisk

:::tip
Due to the limitation of Baidu Disk API, downloading files larger than about 20M needs to carry the header: "User-Agent": "pan.baidu.com", so when downloading files larger than 20M, you need to set the request header yourself, such as using curl:
```bash
curl -L -X GET 'YOUR_LINK' -H 'User-Agent: pan.baidu.com'
```
Or use the proxy function in this program to transfer.
:::

## **Refresh token**
[Click here](https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://alist.nn.ci/tool/baidu/callback&scope=basic,netdisk&qrcode=1) to get the refresh token.



## **Root folder path**
The root foler to mount, defaults to `/`

- Mount a folder separately, according to the following format, `/` is the root directory, just extend to that directory if you want to mount that directory
  - /folder_A/....../folder_x

<br/>



## **Custom crack ua**

[**UA used when using 【Native Proxy & Crack API】**](https://github.com/alist-org/alist/issues/5602#issuecomment-1831188682)

<br/>



## **Download api**

- official: The official interface, very stable, but for larger files, UA needs to be modified and the speed is slow (SVIP speed fast)
- crack: unofficial interface，You must modify the UA and some files may not have a speed limit, but it will be unstable (not guaranteed 100%availability) Need to use a version greater than `3.19.0`
  -  ==Need to change the UA to`netdisk`==，Modification method refer to [add-user-agent-user-example](#add-user-agent-usage-example)
  -  Or turn on the Web proxy, you do not need to modify the UA (you need a large broadband to use it stably)
  -  It is limited to play/download **`video (only tested in the mp4 format other formats are not tested)`**,If it is other format files, such a prompt will appear
  -  This is not a mistake, this is a limit, please do not panic.

```json{3}
{
	error_code: 31119,
	error_msg: "hit black userlist , hit illeage dlna",
	request_id: 541111111111111140
}
```

<br/>



## **Add "User-Agent" usage example**

::::danger If you don't know how to set "User-Agent" see here

 ==The following methods are limited to Baidu super member users== 

 ==Prompt again The following methods are limited to Baidu super member users== 

It will only be useful if a member finishes modifying **`"User-Agent"`** (choose official and 302)

If you don’t change **`"User-Agent"`**, you can enable ==Web Agent==, the disadvantage is that you need to build an Alist machine for transfer, that is to say, you need a large broadband to help you transfer

<div>
    <p style="text-align: center;"><span>Tutorial on how to modify UA in web page 302 mode: <br/></span>On the left is<span style="color:red;font-weight: bold;font-size: xx-large;">『Official』</span>API，On the right is the<span style="color:blue;font-weight: bold;font-size: xx-large;">『Crack』</span>API</p>
    <div class="image-preview">
        <video width="360" height="240" controls>
            <source src="https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4" type="video/mp4">
        </video>
        <video width="360" height="240" controls>
            <source src="https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E9%9D%9E%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4" type="video/mp4">
        </video>
    </div>
</div>

:::tabs#ua

@tab Web plugin

- The advantage of using a browser plug-in to modify is that it can be played directly online, of course, downloading is also possible.

Example <Badge text="1" type="info" vertical="middle" />: If you really don’t know it, you can take a look at an example on the web page: **https://www.bilibili.com/video/BV1UA4y1X7J8**

Example <Badge text="2" type="info" vertical="middle" />: Another plugin method covering 360, Chrome, Edge: **https://youtu.be/PP6b0WSzYMc**

![alist](/img/drivers/baidu/bdUA.png)

@tab Aria2

1. First follow the figure below to set the **`user-agent" `**, and then click the button option in the lower right corner, click ** gear ** (local settings) to configure the parameters well 

2. Then open the third button option in the lower right corner (**Open the check box**), and then go to the list to select the file we want to download
3. Select the files we need to download. After selecting, there will be a row of buttons. Select the second option on the right. One is sent to Aria2.

If you use the webpage to modify the **`user-agent`**, you do not need to configure the `UA` of ==**Aria2**==, and you can download it directly to Aria2

![alist](/img/drivers/baidu/aria2-ua.png)

@tab Motrix

1. First follow the figure below to set the **`user-agent" `**, and then click the button option in the lower right corner, click ** gear ** (local settings) to configure the parameters well 
2. Then open the third button option in the lower right corner (**Open the check box**), and then go to the list to select the file we want to download
3. Select the files we need to download. After selecting, there will be a row of buttons. Select the second option on the right. One is sent to Aria2.

If you use the webpage to modify the **`user-agent`**, you do not need to configure the `UA` of ==**Motrix**==, and you can download it directly to Aria2

- Motrix Download link：[Motrix Official website](https://motrix.app/)，[Motrix-GitHub](https://github.com/agalwood/Motrix)

![alist](/img/drivers/baidu/motrix-ua.png)

:::

::::

## **Upload Config**

Official Documentation: [百度网盘开放平台 - 上传 - 能力说明](https://pan.baidu.com/union/doc/3ksg0s9ye)

> Baidu Netdisk requires that each slice be uploaded within 30 seconds, so excessively high concurrency during file uploads may result in a significant number of failures.

- Upload Threads: The number of slices to upload concurrently.
- Upload API: The domain endpoint used for uploading.
- Custom Upload Slice Size: Allows you to specify the size of each slice. Note that there are limitations, and this feature is available to VIPs only.
- Low Bandwidth Upload Mode: Attempts to address the frequent `Client.Timeout exceeded while awaiting headers` errors encountered in low upload bandwidth scenarios (e.g., residential broadband). When enabled, it uses the smallest possible slice size.


<br/>



## **The default download method used**

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```
