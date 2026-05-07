---
# This is the icon of the page
icon: iconfont icon-set
# This control sidebar order
order: 7
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

# Meta

:::tip
Supported version:

- Renaming paths covered by a meta password is blocked: `>= v3.58.0`
:::

The configuration in the meta information is valid for `All Roles`, if you want to have the corresponding permissions for users, please go to `User`-->`User Account` to modify the relative permissions

### **Path**

The path for this meta to take effect

<br/>



### **Password**
Password required to access this path

- Meta information password will not take effect when accessed using `WebDav`
- Since `>= v3.58.0`, any path covered by this password cannot be renamed from the UI or via `/api/fs/rename`, `/api/fs/batch_rename`, or `/api/fs/regex_rename`

::: danger Notes

If you want the password to be effective in subfolders, please check `Apply to sub folder` after the password. Do not check `Write` and then check `Apply to sub folder`

The correct check example is shown below. If you configure the options correctly, if you check the wrong option `Write` and then check `Apply to sub folder`, it will cause anyone to have permission to write dangerous operations

![](/img/advanced/meta/password_b.png#light)
![](/img/advanced/meta/password_h.png#dark)

:::

<br/>



### **Write**
Allow user to make directory, new file and upload files.

<br/>



### **Hide**
The objects to hide of this path, One regular expression (in `Golang`) per line

- Meta information hiding can take effect when accessed using `WebDav`

<br/>



### **Readme**
The Readme to render while enter this path, support markdown content or markdown link.

- Show at bottom of list

- The automatically rendered file name is: **`readme.md`**

<br/>



## **Header**

(new in v3.29.0) The Readme to render while enter this path, support markdown content or markdown link.

- Show at top of list
- The automatically rendered file name is: **`top.md`**
  - Files can not be displayed in the list, for example `readme.md` is not displayed in the list
  - Backstage --> Settings --> Global --> Hidden files --> Add newline `/\/top.md/i`

<br/>



### **Apply to sub folder**
Apply this meta to sub folder of specific path

<br/>





## :warning: Tips

> Regarding hidden, users without permissions can search for hidden folders/files, solutions

:white_check_mark: If you want to hide the folder in a folder, create a new Yuan information alone, and select the folder we want to hide,，Hidden if you want to hide everything, write directly`.*`

:x: You cannot directly fill in the meta information of the root directory `/`, and then fill in the folder we want to hide, the error case [View details](https://github.com/alist-org/alist/issues/4494)

![](/img/advanced/hide-tips.png)
