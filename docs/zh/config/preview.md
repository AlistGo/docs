---
# This is the icon of the page
icon: iconfont icon-preview
# This control sidebar order
order: 7
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

# 预览设置

## **文本类型**

要作为文本预览的文件扩展名，用 `,` 分隔，例如 `txt,md,go,tsx`。

## **音频类型**

要作为音频预览的文件扩展名，以 `,` 分隔，例如 `mp3,wav,m4a`。

## **视频类型**

要作为视频预览的文件扩展名，以 `,` 分隔，例如 `mp4,webm,ogg`。

## **图片类型**

要作为图像预览的文件扩展名，以 `,` 分隔，例如 `jpg,jpeg,png,gif,webp`。

## **代理类型**

要通过程序代理下载的文件扩展名

## **代理忽略头部**

详情查看： **https://github.com/alist-org/alist/issues/2763**

## **外部预览**

一个包含外部预览设置的 json 对象，定义为

```typescript
interface {
  [extensions: string]: {
    [name: string]: string //(url)
  }
}
```

第一个key `extensions` 是用 `,` 分割的文件扩展名（如果是 startsWith`/` 会被认为是正则表达式），value 也是一个 `key-value` 对象，key 是 预览名称，值为外部网址。

对于外部 url，我们提供了一些变量供您使用：

基础变量：

- `$url`: the file url
- `$durl`: the file of alist URL
- `$name`: the file name

拓展变量：
在基础变量前添加[eb_]，其中e表示`encodeURIComponent`，b表示`base64`， 如
- `$e_url`: encodeURIComponent($url)
- `$b_url`: btoa($url)
- `$eb_url`: encodeURIComponent(btoa($url))

最后，当当前文件与“扩展”匹配时，“外部预览”将显示“打开方式”菜单。

例如，将“外部预览”设置为

```json
{
  "txt": {
    "Notepad": "notepad://$url"
  },
  "/.*/": {
    "VSCode": "vscode://$url"
  }
}
```

当我们输入一个扩展名为 `txt` 的文件时，它会显示：

![Open-with](/img/config/open-with.png)

## **iframe 预览**

类似于 `External previews`，但它会直接在当前页面中嵌入 iframe。
:::tip
如果你想使用自部署的onlyoffice预览office文件，可以在这里添加如下配置：

```json
{
  "doc,docx,xls,xlsx,ppt,pptx": {
    "OnlyOffice": "you_only_office_url"
  }
}
```

:::

## **音频封面**

歌曲无播放封面时显示的默认封面。

## **音频自动播放**

是否自动播放音频文件。

## **视频自动播放**

是否自动播放视频文件。

## **打开压缩包文件时默认预览**

打开此选项后，默认会对压缩包格式文件进行预览(如下图所示)，会消耗一些服务器流量，但不会全部下载，如果要关闭压缩包格式首选预览，此选项关闭，首选项就是下载模式

![](/img/advanced/user_read_archives_light.png#light)

![](/img/advanced/user_read_archives_dark.png#dark)

<br/>



-----

## **强制预览**

可以通过 `type` 请求参数来强制设置预览类型。

可选值:

```
UNKNOWN
FOLDER
VIDEO
AUDIO
TEXT
IMAGE
```

示例: `http://yourdomain/test-file.ahk?type=text`
