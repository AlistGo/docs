---
# This is the icon of the page
icon: iconfont icon-file
# This control sidebar order
order: 3
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

# fs

:::tip
支持版本：

- `/api/fs/list` 返回字段 `filtered_total`、`page`、`per_page`、`has_more`、`pages_total`：`>= v3.58.0`
- 密码保护路径的重命名、批量重命名、正则重命名会被后端拦截：`>= v3.58.0`
:::

## POST 新建文件夹

POST /api/fs/mkdir

> Body 请求参数

```json
{
  "path": "/tt"
}
```

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名     | 说明  |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| Authorization | header | string | 是   |            | token |
| Content-Type  | header | string | 否   |            | none  |
| body          | body   | object | 否   |            | none  |
| » path        | body   | string | 是   | 新目录路径 | none  |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code    | integer | true | none | 状态码 | none |
| » message | string  | true | none | 信息   | none |
| » data    | null    | true | none |        | none |

## POST 重命名文件

POST /api/fs/rename

> Body 请求参数

```json
{
  "name": "test3",
  "path": "/阿里云盘/test2"
}
```

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名                | 说明  |
| ------------- | ------ | ------ | ---- | --------------------- | ----- |
| Authorization | header | string | 是   |                       | token |
| Content-Type  | header | string | 否   |                       | none  |
| body          | body   | object | 否   |                       | none  |
| » name        | body   | string | 是   | 目标文件名，不支持'/' | none  |
| » path        | body   | string | 是   | 源文件名              | none  |

> 从 `>= v3.58.0` 开始，如果源路径被某条带密码的元信息覆盖，AList 会直接返回 `403`，即使调用方已经知道该密码也不能重命名。

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code    | integer | true | none | 状态码 | none |
| » message | string  | true | none | 信息   | none |
| » data    | null    | true | none |        | none |

## PUT 表单上传文件

PUT /api/fs/form

> Body 请求参数

```yaml
file: []

```

### 请求参数

| 名称           | 位置   | 类型           | 必选 | 中文名 | 说明                       |
| -------------- | ------ | -------------- | ---- | ------ | -------------------------- |
| Authorization  | header | string         | 是   |        | token                      |
| Content-Type   | header | string         | 是   |        | 需要是multipart/form-data; |
| Content-Length | header | string         | 是   |        | 文件大小                   |
| File-Path      | header | string         | 是   |        | 经过URL编码的完整文件路径  |
| As-Task        | header | string         | 否   |        | 是否添加为任务             |
| body           | body   | object         | 否   |        | none                       |
| » file         | body   | string(binary) | 是   |        | 文件                       |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "task": {
      "id": "sdH2LbjyWRk",
      "name": "upload animated_zoom.gif to [/data](/alist)",
      "state": 0,
      "status": "uploading",
      "progress": 0,
      "error": ""
    }
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称         | 类型    | 必选 | 约束 | 中文名 | 说明 |
| ------------ | ------- | ---- | ---- | ------ | ---- |
| » code       | integer | true | none | 状态码 | none |
| » message    | string  | true | none | 信息   | none |
| » data       | object  | true | none |        | none |
| »» task      | object  | true | none |        | none |
| »»» id       | string  | true | none |        | none |
| »»» name     | string  | true | none |        | none |
| »»» state    | integer | true | none |        | none |
| »»» status   | string  | true | none |        | none |
| »»» progress | integer | true | none |        | none |
| »»» error    | string  | true | none |        | none |

## POST 列出文件目录

POST /api/fs/list

> Body 请求参数

```json
{
  "path": "/t",
  "password": "",
  "page": 1,
  "per_page": 200,
  "refresh": false
}
```

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 中文名       | 说明 |
| ------------- | ------ | ------- | ---- | ------------ | ---- |
| Authorization | header | string  | 是   |              | none |
| body          | body   | object  | 否   |              | none |
| » path        | body   | string  | 否   | 路径         | none |
| » password    | body   | string  | 否   | 密码         | none |
| » page        | body   | integer | 否   | 页数         | none |
| » per_page    | body   | integer | 否   | 每页数目     | none |
| » refresh     | body   | boolean | 否   | 是否强制刷新 | none |

> 后端归一化规则：
>
> - `page <= 0` 会被归一化为 `1`
> - `per_page <= 0` 会使用后端默认值 `200`
> - `per_page > 500` 会被截断为 `500`

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "content": [
      {
        "name": "Alist V3.md",
        "size": 1592,
        "is_dir": false,
        "modified": "2024-05-17T13:47:55.4174917+08:00",
        "created": "2024-05-17T13:47:47.5725906+08:00",
        "sign": "",
        "thumb": "",
        "type": 4,
        "hashinfo": "null",
        "hash_info": null
      }
    ],
    "total": 1,
    "filtered_total": 1,
    "page": 1,
    "per_page": 200,
    "has_more": false,
    "pages_total": 1,
    "readme": "",
    "header": "",
    "write": true,
    "provider": "Local"
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称          | 类型     | 必选  | 约束 | 中文名       | 说明 |
| ------------- | -------- | ----- | ---- | ------------ | ---- |
| » code        | integer  | true  | none | 状态码       | none |
| » message     | string   | true  | none | 信息         | none |
| » data        | object   | true  | none |              | none |
| »» content    | [object] | true  | none | 内容         | none |
| »»» name      | string   | true  | none | 文件名       | none |
| »»» size      | integer  | true  | none | 大小         | none |
| »»» is_dir    | boolean  | true  | none | 是否是文件夹 | none |
| »»» modified  | string   | true  | none | 修改时间     | none |
| »»» sign      | string   | true  | none | 签名         | none |
| »»» thumb     | string   | true  | none | 缩略图       | none |
| »»» type      | integer  | true  | none | 类型         | none |
| »»» created   | string   | false | none | 创建时间     | none |
| »»» hashinfo  | string   | false | none |              | none |
| »»» hash_info | null     | false | none |              | none |
| »» total      | integer  | true  | none | 总数         | none |
| »» filtered_total | integer | true | none | 过滤后的总数 | 当前用户实际可见对象总数 |
| »» page       | integer  | true  | none | 当前页       | 归一化后的页码 |
| »» per_page   | integer  | true  | none | 每页数量     | 实际生效的每页大小 |
| »» has_more   | boolean  | true  | none | 是否还有更多 | 是否还有下一页 |
| »» pages_total | integer | true  | none | 总页数       | 基于 `filtered_total` 和 `per_page` 计算 |
| »» readme     | string   | true  | none | 说明         | none |
| »» write      | boolean  | true  | none | 是否可写入   | none |
| »» provider   | string   | true  | none |              | none |
| »» header     | string   | true  | none |              | none |

## POST 获取某个文件/目录信息

POST /api/fs/get

> Body 请求参数

```json
{
  "path": "/t",
  "password": "",
  "page": 1,
  "per_page": 0,
  "refresh": false
}
```

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 中文名    | 说明 |
| ------------- | ------ | ------- | ---- | --------- | ---- |
| Authorization | header | string  | 是   |           | none |
| body          | body   | object  | 否   |           | none |
| » path        | body   | string  | 是   | 路径      | none |
| » password    | body   | string  | 是   | 密码      | none |
| » page        | body   | integer | 否   |           | none |
| » per_page    | body   | integer | 否   |           | none |
| » refresh     | body   | boolean | 否   | 强制 刷新 | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "name": "Alist V3.md",
    "size": 2618,
    "is_dir": false,
    "modified": "2024-05-17T16:05:36.4651534+08:00",
    "created": "2024-05-17T16:05:29.2001008+08:00",
    "sign": "",
    "thumb": "",
    "type": 4,
    "hashinfo": "null",
    "hash_info": null,
    "raw_url": "http://127.0.0.1:5244/p/local/Alist%20V3.md",
    "readme": "",
    "header": "",
    "provider": "Local",
    "related": null
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称         | 类型    | 必选 | 约束 | 中文名       | 说明 |
| ------------ | ------- | ---- | ---- | ------------ | ---- |
| » code       | integer | true | none | 状态码       | none |
| » message    | string  | true | none | 信息         | none |
| » data       | object  | true | none |              | none |
| »» name      | string  | true | none | 文件名       | none |
| »» size      | integer | true | none | 大小         | none |
| »» is_dir    | boolean | true | none | 是否是文件夹 | none |
| »» modified  | string  | true | none | 修改时间     | none |
| »» sign      | string  | true | none | 签名         | none |
| »» thumb     | string  | true | none | 缩略图       | none |
| »» type      | integer | true | none | 类型         | none |
| »» raw_url   | string  | true | none | 原始url      | none |
| »» readme    | string  | true | none | 说明         | none |
| »» provider  | string  | true | none |              | none |
| »» related   | null    | true | none |              | none |
| »» created   | string  | true | none | 创建时间     | none |
| »» hashinfo  | string  | true | none |              | none |
| »» hash_info | null    | true | none |              | none |
| »» header    | string  | true | none |              | none |

## POST 搜索文件或文件夹

POST /api/fs/search

> Body 请求参数

```json
{
  "parent": "string",
  "keywords": "string",
  "scope": 0,
  "page": 0,
  "per_page": 0,
  "password": "string"
}
```

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 中文名   | 说明                   |
| ------------- | ------ | ------- | ---- | -------- | ---------------------- |
| Authorization | header | string  | 是   |          | none                   |
| body          | body   | object  | 否   |          | none                   |
| » parent      | body   | string  | 是   | 搜索目录 | none                   |
| » keywords    | body   | string  | 是   | 关键词   | none                   |
| » scope       | body   | integer | 是   | 搜索类型 | 0-全部 1-文件夹 2-文件 |
| » page        | body   | integer | 是   | 页数     | none                   |
| » per_page    | body   | integer | 是   | 每页数目 | none                   |
| » password    | body   | string  | 是   | 密码     | none                   |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "content": [
      {
        "parent": "/m",
        "name": "4305da1e",
        "is_dir": false,
        "size": 393090,
        "type": 0
      }
    ],
    "total": 1
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称       | 类型     | 必选 | 约束 | 中文名       | 说明 |
| ---------- | -------- | ---- | ---- | ------------ | ---- |
| » code     | integer  | true | none | 状态码       | none |
| » message  | string   | true | none | 信息         | none |
| » data     | object   | true | none |              | none |
| »» content | [object] | true | none |              | none |
| »»» parent | string   | true | none | 路径         | none |
| »»» name   | string   | true | none | 文件名       | none |
| »»» is_dir | boolean  | true | none | 是否是文件夹 | none |
| »»» size   | integer  | true | none | 大小         | none |
| »»» type   | integer  | true | none | 类型         | none |
| »» total   | integer  | true | none | 总数         | none |

## POST 获取目录

POST /api/fs/dirs

> Body 请求参数

```json
{
  "path": "/t",
  "password": "",
  "force_root": false
}
```

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------- | ---- | ------ | ---- |
| Authorization | header | string  | 是   |        | none |
| body          | body   | object  | 否   |        | none |
| » path        | body   | string  | 否   | 路径   | none |
| » password    | body   | string  | 否   | 密码   | none |
| » force_root  | body   | boolean | 否   |        | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "name": "a",
      "modified": "2023-07-19T09:48:13.695585868+08:00"
    }
  ]
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称        | 类型     | 必选 | 约束 | 中文名   | 说明 |
| ----------- | -------- | ---- | ---- | -------- | ---- |
| » code      | integer  | true | none | 状态码   | none |
| » message   | string   | true | none | 信息     | none |
| » data      | [object] | true | none |          | none |
| »» name     | string   | true | none | 文件夹名 | none |
| »» modified | string   | true | none | 修改时间 | none |

## POST 批量重命名

POST /api/fs/batch_rename

> Body 请求参数

```json
{
  "src_dir": "/m2",
  "rename_objects": [
    {
      "src_name": "test.txt",
      "new_name": "aaas2.txt"
    }
  ]
}
```

### 请求参数

| 名称             | 位置   | 类型     | 必选 | 中文名   | 说明  |
| ---------------- | ------ | -------- | ---- | -------- | ----- |
| Authorization    | header | string   | 是   |          | token |
| Content-Type     | header | string   | 否   |          | none  |
| body             | body   | object   | 否   |          | none  |
| » src_dir        | body   | string   | 是   | 源目录   | none  |
| » rename_objects | body   | [object] | 是   |          | none  |
| »» src_name      | body   | string   | 否   | 原文件名 | none  |
| »» new_name      | body   | string   | 否   | 新文件名 | none  |

> 从 `>= v3.58.0` 开始，如果批量重命名里命中的任一源路径被带密码的元信息覆盖，接口会返回 `403`。

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明   |
| --------- | ------- | ---- | ---- | ------ | ------ |
| » code    | integer | true | none | 状态码 | 状态码 |
| » message | string  | true | none | 信息   | 信息   |
| » data    | null    | true | none |        | none   |

## POST 正则重命名

POST /api/fs/regex_rename

> Body 请求参数

```json
{
  "src_dir": "/m2",
  "rename_objects": [
    {
      "src_name": "test.txt",
      "new_name": "aaas2.txt"
    }
  ]
}
```

### 请求参数

| 名称             | 位置   | 类型   | 必选 | 中文名         | 说明  |
| ---------------- | ------ | ------ | ---- | -------------- | ----- |
| Authorization    | header | string | 是   |                | token |
| Content-Type     | header | string | 否   |                | none  |
| body             | body   | object | 否   |                | none  |
| » src_dir        | body   | string | 是   | 源目录         | none  |
| » src_name_regex | body   | string | 是   | 源文件匹配正则 | none  |
| » new_name_regex | body   | string | 是   | 新文件名正则   | none  |

> 从 `>= v3.58.0` 开始，正则重命名命中的源路径如果被带密码的元信息覆盖，也会返回 `403`。

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明   |
| --------- | ------- | ---- | ---- | ------ | ------ |
| » code    | integer | true | none | 状态码 | 状态码 |
| » message | string  | true | none | 信息   | 信息   |
| » data    | null    | true | none |        | none   |

## POST 移动文件

POST /api/fs/move

> Body 请求参数

```json
{
  "src_dir": "string",
  "dst_dir": "string",
  "names": [
    "string"
  ]
}
```

### 请求参数

| 名称          | 位置   | 类型     | 必选 | 中文名     | 说明 |
| ------------- | ------ | -------- | ---- | ---------- | ---- |
| Authorization | header | string   | 是   |            | none |
| body          | body   | object   | 否   |            | none |
| » src_dir     | body   | string   | 是   | 源文件夹   | none |
| » dst_dir     | body   | string   | 是   | 目标文件夹 | none |
| » names       | body   | [string] | 是   | 文件名     | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code    | integer | true | none | 状态码 | none |
| » message | string  | true | none | 信息   | none |
| » data    | null    | true | none |        | none |

## POST 聚合移动

POST /api/fs/recursive_move

> Body 请求参数

```json
{
  "src_dir": "string",
  "dst_dir": "string"
}
```

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名     | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ---- |
| Authorization | header | string | 是   |            | none |
| body          | body   | object | 否   |            | none |
| » src_dir     | body   | string | 是   | 源文件夹   | none |
| » dst_dir     | body   | string | 是   | 目标文件夹 | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code    | integer | true | none | 状态码 | none |
| » message | string  | true | none | 信息   | none |
| » data    | null    | true | none |        | none |

## POST 复制文件

POST /api/fs/copy

> Body 请求参数

```json
{
  "src_dir": "string",
  "dst_dir": "string",
  "names": [
    "string"
  ]
}
```

### 请求参数

| 名称          | 位置   | 类型     | 必选 | 中文名     | 说明 |
| ------------- | ------ | -------- | ---- | ---------- | ---- |
| Authorization | header | string   | 是   |            | none |
| body          | body   | object   | 否   |            | none |
| » src_dir     | body   | string   | 是   | 源文件夹   | none |
| » dst_dir     | body   | string   | 是   | 目标文件夹 | none |
| » names       | body   | [string] | 是   | 文件名     | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code    | integer | true | none | 状态码 | none |
| » message | string  | true | none | 信息   | none |
| » data    | null    | true | none |        | none |

## POST 删除文件或文件夹

POST /api/fs/remove

> Body 请求参数

```json
{
  "names": [
    "string"
  ],
  "dir": "string"
}
```

### 请求参数

| 名称          | 位置   | 类型     | 必选 | 中文名 | 说明 |
| ------------- | ------ | -------- | ---- | ------ | ---- |
| Authorization | header | string   | 是   |        | none |
| body          | body   | object   | 否   |        | none |
| » names       | body   | [string] | 是   | 文件名 | none |
| » dir         | body   | string   | 是   | 目录   | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code    | integer | true | none | 状态码 | none |
| » message | string  | true | none | 信息   | none |
| » data    | null    | true | none |        | none |

## POST 删除空文件夹

POST /api/fs/remove_empty_directory

> Body 请求参数

```json
{
  "src_dir": "string"
}
```

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| Authorization | header | string | 是   |        | none |
| body          | body   | object | 否   |        | none |
| » src_dir     | body   | string | 是   | 目录   | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code    | integer | true | none | 状态码 | none |
| » message | string  | true | none | 信息   | none |
| » data    | null    | true | none |        | none |

## PUT 流式上传文件

PUT /api/fs/put

> Body 请求参数

```yaml
string

```

### 请求参数

| 名称           | 位置   | 类型           | 必选 | 中文名 | 说明                          |
| -------------- | ------ | -------------- | ---- | ------ | ----------------------------- |
| Authorization  | header | string         | 是   |        | none                          |
| File-Path      | header | string         | 是   |        | 经过URL编码的完整目标文件路径 |
| As-Task        | header | string         | 否   |        | 是否添加为任务                |
| Content-Type   | header | string         | 是   |        | none                          |
| Content-Length | header | string         | 是   |        | none                          |
| body           | body   | string(binary) | 否   |        | none                          |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "task": {
      "id": "sdH2LbjyWRk",
      "name": "upload animated_zoom.gif to [/data](/alist)",
      "state": 0,
      "status": "uploading",
      "progress": 0,
      "error": ""
    }
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称         | 类型    | 必选 | 约束 | 中文名 | 说明 |
| ------------ | ------- | ---- | ---- | ------ | ---- |
| » code       | integer | true | none | 状态码 | none |
| » message    | string  | true | none | 信息   | none |
| » data       | object  | true | none |        | none |
| »» task      | object  | true | none |        | none |
| »»» id       | string  | true | none |        | none |
| »»» name     | string  | true | none |        | none |
| »»» state    | integer | true | none |        | none |
| »»» status   | string  | true | none |        | none |
| »»» progress | integer | true | none |        | none |
| »»» error    | string  | true | none |        | none |

## POST 添加离线下载

POST /api/fs/add_offline_download

> Body 请求参数

```json
{
  "path": "/local",
  "urls": [
    "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
  ],
  "tool": "SimpleHttp",
  "delete_policy": "delete_on_upload_succeed"
}
```

### 请求参数

| 名称            | 位置   | 类型     | 必选 | 中文名   | 说明                                                                                    |
| --------------- | ------ | -------- | ---- | -------- | --------------------------------------------------------------------------------------- |
| Authorization   | header | string   | 是   |          | none                                                                                    |
| body            | body   | object   | 否   |          | none                                                                                    |
| » urls          | body   | [string] | 是   | url      | none                                                                                    |
| » path          | body   | string   | 是   | 目标路径 | none                                                                                    |
| » tool          | body   | string   | 是   | 工具     | 可选`aria2`,`SimpleHttp`和`qBittorrent`                                                 |
| » delete_policy | body   | string   | 是   | 删除策略 | 可选`delete_on_upload_succeed`,`delete_on_upload_failed`,`delete_never`,`delete_always` |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "tasks": [
      {
        "id": "jwy7BrfZRzbI2xWg7-y",
        "name": "download https://www.baidu.com/img/20d6cf.png to (/local)",
        "state": 0,
        "status": "",
        "progress": 0,
        "error": ""
      }
    ]
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称         | 类型     | 必选  | 约束 | 中文名 | 说明 |
| ------------ | -------- | ----- | ---- | ------ | ---- |
| » code       | integer  | true  | none | 状态码 | none |
| » message    | string   | true  | none | 信息   | none |
| » data       | object   | true  | none |        | none |
| »» tasks     | [object] | true  | none |        | none |
| »»» id       | string   | false | none |        | none |
| »»» name     | string   | false | none |        | none |
| »»» state    | integer  | false | none |        | none |
| »»» status   | string   | false | none |        | none |
| »»» progress | integer  | false | none |        | none |
| »»» error    | string   | false | none |        | none |
