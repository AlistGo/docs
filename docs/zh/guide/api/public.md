---
# This is the icon of the page
icon: iconfont icon-token
# This control sidebar order
order: 4
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - API
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# public

:::tip
支持版本：

- `default_page_size` 默认值改为 `50`，以及公开设置 `thumbnail_size`：`>= v3.58.0`
:::

## GET ping检测

GET /ping

连通性ping检测

### 返回示例

> 成功

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## GET 获取站点设置

GET /api/public/settings

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "allow_indexed": "false",
    "allow_mounted": "false",
    "announcement": "",
    "audio_autoplay": "true",
    "audio_cover": "https://jsd.nn.ci/gh/alist-org/logo@main/logo.svg",
    "auto_update_index": "false",
    "default_page_size": "50",
    "external_previews": "{}",
    "favicon": "https://cdn.jsdelivr.net/gh/alist-org/logo@main/logo.svg",
    "filename_char_mapping": "{\"/\": \"|\"}",
    "forward_direct_link_params": "false",
    "hide_files": "/\\/README.md/i",
    "home_container": "hope_container",
    "home_icon": "🏠",
    "iframe_previews": "{\n\t\"doc,docx,xls,xlsx,ppt,pptx\": {\n\t\t\"Microsoft\":\"https://view.officeapps.live.com/op/view.aspx?src=$e_url\",\n\t\t\"Google\":\"https://docs.google.com/gview?url=$e_url&embedded=true\"\n\t},\n\t\"pdf\": {\n\t\t\"PDF.js\":\"https://alist-org.github.io/pdf.js/web/viewer.html?file=$e_url\"\n\t},\n\t\"epub\": {\n\t\t\"EPUB.js\":\"https://alist-org.github.io/static/epub.js/viewer.html?url=$e_url\"\n\t}\n}",
    "logo": "https://cdn.jsdelivr.net/gh/alist-org/logo@main/logo.svg",
    "main_color": "#1890ff",
    "ocr_api": "https://api.alistgo.com/ocr/file/json",
    "package_download": "true",
    "pagination_type": "all",
    "robots_txt": "User-agent: *\nAllow: /",
    "search_index": "none",
    "settings_layout": "responsive",
    "site_title": "AList",
    "sso_login_enabled": "false",
    "sso_login_platform": "",
    "version": "v3.25.1",
    "thumbnail_size": "144",
    "video_autoplay": "true"
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称                          | 类型    | 必选 | 约束 | 中文名         | 说明 |
| ----------------------------- | ------- | ---- | ---- | -------------- | ---- |
| » code                        | integer | true | none | 状态码         | none |
| » message                     | string  | true | none | 信息           | none |
| » data                        | object  | true | none | 数据           | none |
| »» allow_indexed              | string  | true | none | 允许索引       | none |
| »» allow_mounted              | string  | true | none | 允许挂载       | none |
| »» announcement               | string  | true | none | 公告           | none |
| »» audio_autoplay             | string  | true | none | 自动播放音频   | none |
| »» audio_cover                | string  | true | none | 音频封面       | none |
| »» auto_update_index          | string  | true | none | 自动更新索引   | none |
| »» default_page_size          | string  | true | none | 默认分页数     | 当前默认值为 `50` |
| »» external_previews          | string  | true | none | 外部预览       | none |
| »» favicon                    | string  | true | none | 网站图标       | none |
| »» filename_char_mapping      | string  | true | none |                | none |
| »» forward_direct_link_params | string  | true | none |                | none |
| »» hide_files                 | string  | true | none | 隐藏文件       | none |
| »» home_container             | string  | true | none | 主页容器       | none |
| »» home_icon                  | string  | true | none | 主页图标       | none |
| »» iframe_previews            | string  | true | none | iframe预览设置 | none |
| »» logo                       | string  | true | none | logo           | none |
| »» main_color                 | string  | true | none | 主题颜色       | none |
| »» ocr_api                    | string  | true | none | pcr接口        | none |
| »» package_download           | string  | true | none | 打包下载       | none |
| »» pagination_type            | string  | true | none |                | none |
| »» robots_txt                 | string  | true | none | robots文件     | none |
| »» search_index               | string  | true | none |                | none |
| »» settings_layout            | string  | true | none |                | none |
| »» site_title                 | string  | true | none | 站点标题       | none |
| »» sso_login_enabled          | string  | true | none | 启用sso登录    | none |
| »» sso_login_platform         | string  | true | none | sso登录平台    | none |
| »» thumbnail_size            | string  | true | none | 缩略图尺寸     | 缩略图宽度，单位像素 |
| »» version                    | string  | true | none | 版本           | none |
| »» video_autoplay             | string  | true | none | 视频自动播放   | none |
