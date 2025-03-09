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

# Preview settings

### **Text types**

The extensions of the files you want to preview as text, split by `,`, such as `txt,md,go,tsx`.

### **Audio types**

The extensions of the files you want to preview as audio, split by `,`, such as `mp3,wav,m4a`.

### **Video types**

The extensions of the files you want to preview as video, split by `,`, such as `mp4,webm,ogg`.

### **Image types**

The extensions of the files you want to preview as image, split by `,`, such as `jpg,jpeg,png,gif,webp`.

### **Proxy types**

The extensions of the files you want to separately set to download through proxy

### **Proxy ignore headers**

For details, please check:  **https://github.com/alist-org/alist/issues/2763**

### **External previews**

A json object that contains the external preview settings, It is defined as

```typescript
interface {
  [extensions: string]: {
    [name: string]: string //(url)
  }
}
```

the first key `extensions` is the file extensions that split by `,`(if it's startsWith `/`, it will be considered a regular expression), and the value is also a `key-value` object, the key is the preview name, and the value is the external url.

For the external url, we provide some variables for you to use:

Basic variable:

- `$url`: the file url
- `$durl`: the file of alist URL
- `$name`: the file name

Extended variables:
Add [eb_] before the basic variable, where e means `encodeURIComponent`, b means `base64`, such as
- `$e_url`: encodeURIComponent($url)
- `$b_url`: btoa($url)
- `$eb_url`: encodeURIComponent(btoa($url))

Finally, the `External previews` will displayed a `Open with` menu while current file matched the `extensions`.

For example, set `External previews` to

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

when we enter a file with the extension `txt`, it will show:

![Open-with](/img/config/open-with.png)

### **Iframe previews**

Similar to `External previews`, but it will embed an iframe in current page directly.
:::tip
If you want to use self-deployed onlyoffice to preview office files, you can add the configuration like this here:

```json
{
  "doc,docx,xls,xlsx,ppt,pptx": {
    "OnlyOffice": "you_only_office_url"
  }
}
```
:::

### **Audio cover**

The default audio cover.

### **Audio autoplay**

Whether to automatically play audio files.

### **Video autoplay**

Whether to automatically play video files.

### **Preview by default when opening archives**

After turning on this option, compressed package format files will be previewed by default (as shown in the figure below), which will consume some server traffic, but will not download them all, If you want to turn off the preferred preview of the compressed format, this option is turned off, and the preference is the download mode

![](/img/advanced/user_read_archives_light.png#light)

![](/img/advanced/user_read_archives_dark.png#dark)

<br/>



-----

### **Force preview**

We can force the preview type through the `type` query parameter.

Available values:

```
UNKNOWN
FOLDER
VIDEO
AUDIO
TEXT
IMAGE
```

Example: `http://yourdomain/test-file.ahk?type=text`
