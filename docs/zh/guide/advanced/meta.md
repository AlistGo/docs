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

# 元信息

:::tip
支持版本：

- 被元信息密码覆盖的路径禁止重命名：`>= v3.58.0`
:::

元信息内的配置对`所有角色`生效，如果想让用户有相应的权限请前往 `用户`-->`用户账号` 进行修改相应的权限

## **路径**

此元信息生效的路径

<br/>



## **密码**

访问此路径需要密码

- 元信息密码在使用`WebDav`访问时不会生效
- 从 `>= v3.58.0` 开始，只要某个路径被这条密码规则覆盖，就不能在 UI 中或通过 `/api/fs/rename`、`/api/fs/batch_rename`、`/api/fs/regex_rename` 重命名

::: danger 注意事项

填写密码如果想在子文件夹也生效，请勾选密码后面的 `应用到子文件夹`，请勿勾选 `写入`再勾选`应用到子文件夹`

正确勾选示例图如下所示，正确配置选项，如果勾选错误为 `写入`再勾选`应用到子文件夹` 会造成任何人都拥有权限写入危险操作

![](/img/advanced/meta/password_b.png#light)
![](/img/advanced/meta/password_h.png#dark)

:::

<br/>



## **写入**

允许用户新建目录、新文件和上传文件。

<br/>



## **隐藏**

此路径要隐藏的对象，每行一个正则表达式（在 `Golang` 中）

- 元信息隐藏在使用`WebDav`访问时可以生效

<br/>



## **说明**

进入该路径时渲染的自述文件，支持 Markdown 内容或 Markdown 链接。

- 在列表底部显示

- 自动渲染的文件名为：**`readme.md`**

<br/>



## **顶部说明**

（v3.29.0 新增）进入该路径时渲染的自述文件，支持 Markdown 内容或 Markdown 链接。

- 在列表顶部显示
- 自动渲染的文件名为：**`top.md`**
  - 可以在列表中不显示文件，例如`readme.md`不在列表显示
  - 后台 --> 设置 --> 全局 --> 隐藏文件 --> 换行添加 `/\/top.md/i`

<br/>



## **应用到子文件夹**

将此元信息应用于特定路径的子文件夹

<br/>





## :warning: Tips

> 关于隐藏，没有权限的用户可以搜索到隐藏的文件夹/文件，解决方案

:white_check_mark:如果你要隐藏某个文件夹內的文件夹，要单独新建一条元信息，路径选择我们要隐藏的文件夹，隐藏如果你要隐藏所有直接写 `.*`即可

:x: 不可以直接在选择根目录`/`的元信息內填写，然后隐藏位置填写我们要隐藏的文件夹，错误案例[查看详情](https://github.com/alist-org/alist/issues/4494)

![](/img/advanced/hide-tips.png)
