---
# This is the icon of the page
icon: iconfont icon-chrome
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

# Global settings

:::tip
Supported version:

- Device-session limit, eviction policy, and TTL settings: `>= v3.52.0`
:::

### **Hide files**

Match files hidden by regular expressions(`javascript`). If you don't understand, don't fill in them randomly. Wrong regular expressions `/\/README.md/i` will cause the front-end page to crash. One per line. By default, there is an example expression that hides README.md in all directories.

It's not really hiding. It still exists in the list returned by the api, it just doesn't show up in the frontend list. So if you want to really hide, add a [meta](../guide/advanced/meta.md) record instead.

<br/>



### **Package download**

Whether to enable package download, default is true. 【Not recommended especially when there are many or large files】

- It is recommended to push files to Aria2 for downloading. Aria2 supports the download folder to save the directory structure.
- View in detail【[What is the difference between the two Aria2](./other.md#other)】

<br/>



### **Customize head**

Any content you want which are automatically placed at the beginning of the head of the web page

- How to configure PWA（Desktop、Android、IOS）：**[alist/issues/6724](https://github.com/alist-org/alist/issues/6724#issuecomment-2220251541)**

<br/>



### **Customize body**

Any content you want which are automatically placed at the end of the body of the web page

<br/>



### **Link expiration**

The expiration time of the direct link, in hours. If it equals 0, it will not expire. Default is 0.
::: warning
Only the straight chain of the path with the password added will have an expiration time, otherwise it will not expire.Because the expiration time is added to the sign query parameter, and the path without adding the password will not check the sign.
:::

<br/>



### **Privacy regs**

What you don't want to show in the error message, One regular expression (in `Golang`) per line. The matched content will be replaced with * of the corresponding length.

<br/>



### **Ocr api**

Used to identify verification codes. You can deploy yourself: https://hub.docker.com/r/xhofe/ddddocr_server. The default ocr api is deployed on the [koyeb](https://app.koyeb.com/)(No availability guarantee), which is not recommended to use in production environment.

<br/>



### **Sign all**

Add signatures to the direct link of all files (whether with password or not) 

That is`https://xxxx.com/d/xx?sign=vUQ5KFXnwMseKnIUXGRcfoG3cEHzKFBiPGp1NriMDXA=:0`

If you need to close it, you can close it yourself, but you need to pay attention to security issues. After closing the signature, if the site can be accessed by the public network, the password may be bypassed to access private files.

There are two other methods that also carry the `sign?xxx` parameter, 1. Add Storage Select `Enable Signing`, 2. Meta Information Add Password

The scope of the three methods`Sign All` > `Meta Information Add Password` > Add Storage Select `Enable Signing`

1. Sign All: If this option is turned on, the sign parameter will be carried regardless of whether meta-information is encrypted or not, and whether `Enable Signing` is checked when adding storage.
2. Meta Information Add Password：Only files under this meta information path will carry the sign parameter.
   - If **Apply to sub folder** is turned on, all files in this path will carry the sign parameter
3. Add Storage Select `Enable Signing`：Only this storage driver carries the sign parameter.

<br/>



## **Forward direct link params**

You can check it out yourself：**https://github.com/alist-org/alist/issues/3123**

<br/>



### **Filename char mapping**

Mainly to map some special characters so that Alist can work normally

For example, the `/` symbol is a path symbol in the Alist program. Some people’s files have `/` symbols that cause the file to be disconnected halfway and cannot be viewed. We can use this method to map and convert.

```json
{"/": "|","xx1":"xx1","xx2":"xx2"}
```

The default is the first one at the beginning. If you want to add it later, you can add it later. The format is as simple as above.

<br/>



## **Webauthn login enabled**

What is **Webauthn**? Search for yourself, today I just teach you how to use it

In the background `Settings`-->`Global`-->Open `Webauthn login enabled`, go back to the background `Profile`-->Bind `Add a Webauthn credential`

- `Add a Webauthn credential` using the `PIN` of this computer or `complementary devices (such as bracelets, watches)` [support all options in Windows Hello configuration, such as `face` and `fingerprint`]
- Just like binding single sign-on, we can use **`Webauthn`** to log in after binding

  - On the login page, click the login button on the far right, enter our user name, click login, and then unlock the required `Webauthn` verification method to log in
- Adding `Webauthn` requires a secure origin and can only be used on `https` or `localhost`
  - Unsafe sources, such as: http, 192.168.x.x, 127.0.0.1, or directly use the server IP, etc. These places cannot be used

<br/>

## **Max devices**

Global limit for active device sessions.

- `0` means unlimited
- It is enforced when users log in with device sessions

<br/>

## **Device evict policy**

What to do when a new login would exceed `Max devices`.

- `deny`: reject the new login
- `evict_oldest`: invalidate the oldest active device session first

<br/>

## **Device session ttl**

How long to keep stale device-session records, in seconds.

- It is used for automatic cleanup of inactive / expired device-session records
