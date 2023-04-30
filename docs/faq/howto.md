---
# This is the title of the article
title: How to
# This is the icon of the page
icon: study
# This control sidebar order
order: 1
# A page can have multiple categories
category:
  - FAQ
# A page can have multiple tags
tag:
  - FAQ
  - Question
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

### How to add password for a file/folder?

Add a [meta](../guide/advanced/meta.md) record.

### How to reverse proxy with sub directory?

An example of using nginx to reverse proxy to https://nn.ci/alist:
- Normal installation
- Set [site_url](../config/configuration.md#site_url) to `https://nn.ci/alist` or just `/alist` then restart alist
- Add a reverse proxy record in nginx

```nginx
location /alist/ {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Range $http_range;
	  proxy_set_header If-Range $http_if_range;
    proxy_redirect off;
    proxy_pass http://127.0.0.1:5244/alist/;
    # the max size of file to upload
    client_max_body_size 20000m;
}
```

### How to get password if i forget it?

If you are the owner of the site, you can get the admin's info by run `./alist admin` in the terminal.
Otherwise you can ask the owner to reset the password.

:::tip
You need to stop alist server first if the version of your alist is v3.9.0 or later as this pr: https://github.com/alist-org/alist/pull/3074
:::

### How to modify the listening port​

Refer to [config](../config/configuration.md#port)

### How to upgrade

Except for the incompatible version marked in the changelog, you can directly replace the binary file to upgrade.

For docker user, just remove the old container and pull the new image then run it.

### How to allow guest to upload files

Add a [meta](../guide/advanced/meta.md) record, and open `write` field.

### How to remove `powered_by Alist` at the bottom?​

According to our open source license:
Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. **Copyright and license notices must be preserved.** Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.


### When adding a 189Cloud storage: the device ID does not exist, and a secondary device verification is required​

It may be that the risk detection system has been triggered. Please changing the password, then, add it again.

### When adding Tianyi cloud disk client storage: prompt need img validate code: verification code

- Click Edit, write the verification code you just saw into the configuration and click Save
- Click Edit and turn on the Do not use OCR button
- Or build it yourself [**Ocr interface**](../config/global.md#ocr-api)

### TLS handshake timeout? / read: connection reset by peer? / dns lookup failed? / connect: connection refused / Client.Timeout exceeded while awaiting headers?

For network problems such as these, please troubleshoot and solve them yourself.Don't create any issues for this.

### How to add epub reading

Background --> Settings --> Preview --> Iframe preview, written behind the PDF

```html
 /*The comma below is also oh, don’t copy this comment, start copying from the second line*/
,
  "epub": {
    "EPUB.js":"/static/epub.js/viewer.html?url=$e_url"
  }
```

Version 3.7.x and above already support ".epub" reading,
But you need to add it manually (because the database has already been created, it is not good to overwrite it for you, and you will make mistakes)
If it is the first installation and startup (version 3.7.x and higher), no need to add it manually

### How to quickly locate bugs

If you find a bug, but the `log.log` log is not detailed, you can try to add the `--debug` parameter to start

- **Windows**：`alist.exe server --debug`
- **Linux**：`./alist server --debug`
- **Mac**: Temporarily unknown, maybe it is started with the `--debug` parameter

How to stop the relevant logs after startup? `Ctrl+c` can stop the program (or simply close the program directly)

It is recommended to clear the log file `/log/log.log` in the **AList directory before starting with the `--debug` parameter**, so that developers can quickly locate problems later
