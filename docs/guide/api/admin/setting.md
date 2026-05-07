---
# This is the icon of the page
icon: iconfont icon-setting
# This control sidebar order
order: 5
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - ADMIN
  - API
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---
# setting

:::tip
Supported version:

- `POST /api/admin/setting/set_token`: `>= v3.56.0`
- `default_page_size` default `50` and preview setting `thumbnail_size`: `>= v3.58.0`
:::

## GET 列出设置

GET /api/admin/setting/list

包括永久令牌

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明                                       |
| ------------- | ------ | ------ | ---- | ------------------------------------------ |
| groups        | query  | string | 否   | 5,0-其它设置，包括aria2和令牌等            |
| group         | query  | string | 否   | 1-站点；2-样式；3-预览；4-全局；7-单点登录 |
| Authorization | header | string | 否   | none                                       |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "key": "aria2_uri",
      "value": "http://localhost:6800/jsonrpc",
      "help": "",
      "type": "string",
      "options": "",
      "group": 5,
      "flag": 1
    },
    {
      "key": "aria2_secret",
      "value": "",
      "help": "",
      "type": "string",
      "options": "",
      "group": 5,
      "flag": 1
    },
    {
      "key": "token",
      "value": "alist-2a",
      "help": "",
      "type": "string",
      "options": "",
      "group": 0,
      "flag": 1
    },
    {
      "key": "index_progress",
      "value": "{\"obj_count\":0,\"is_done\":true,\"last_done_time\":null,\"error\":\"\"}",
      "help": "",
      "type": "text",
      "options": "",
      "group": 0,
      "flag": 1
    },
    {
      "key": "qbittorrent_url",
      "value": "http://a:an@localhost:8080/",
      "help": "",
      "type": "string",
      "options": "",
      "group": 0,
      "flag": 1
    },
    {
      "key": "qbittorrent_seedtime",
      "value": "0",
      "help": "",
      "type": "number",
      "options": "",
      "group": 0,
      "flag": 1
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

| 名称       | 类型     | 必选 | 约束 | 中文名   | 说明                                                  |
| ---------- | -------- | ---- | ---- | -------- | ----------------------------------------------------- |
| » code     | integer  | true | none | 状态码   | none                                                  |
| » message  | string   | true | none | 信息     | none                                                  |
| » data     | [object] | true | none |          | none                                                  |
| »» key     | string   | true | none | 键       | none                                                  |
| »» value   | string   | true | none | 值       | none                                                  |
| »» help    | string   | true | none | 帮助信息 | none                                                  |
| »» type    | string   | true | none | 类型     | string, number, bool, select                          |
| »» options | string   | true | none | 选项     | none                                                  |
| »» group   | integer  | true | none | 分组     | 用于前端分组                                          |
| »» flag    | integer  | true | none | 标志     | 0 = public, 1 = private, 2 = readonly, 3 = deprecated |

## GET 获取某项设置

GET /api/admin/setting/get

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| keys          | query  | string | 否   | none |
| key           | query  | string | 否   | none |
| Authorization | header | string | 否   | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "key": "hide_files",
    "value": "/\\/README.md/i",
    "help": "",
    "type": "text",
    "options": "",
    "group": 4,
    "flag": 0
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称       | 类型    | 必选 | 约束 | 中文名   | 说明                                                  |
| ---------- | ------- | ---- | ---- | -------- | ----------------------------------------------------- |
| » code     | integer | true | none | 状态码   | none                                                  |
| » message  | string  | true | none | 信息     | none                                                  |
| » data     | object  | true | none |          | none                                                  |
| »» key     | string  | true | none | 键       | none                                                  |
| »» value   | string  | true | none | 值       | none                                                  |
| »» help    | string  | true | none | 帮助信息 | none                                                  |
| »» type    | string  | true | none | 类型     | string, number, bool, select                          |
| »» options | string  | true | none | 选项     | none                                                  |
| »» group   | integer | true | none | 分组     | none                                                  |
| »» flag    | integer | true | none | 标志     | 0 = public, 1 = private, 2 = readonly, 3 = deprecated |

## POST 保存设置

POST /api/admin/setting/save

> Body 请求参数

```json
[
  {
    "key": "version",
    "value": "v3.25.1",
    "help": "",
    "type": "string",
    "options": "",
    "group": 1,
    "flag": 2
  },
  {
    "key": "site_title",
    "value": "AList",
    "help": "",
    "type": "string",
    "options": "",
    "group": 1,
    "flag": 0
  },
  {
    "key": "announcement",
    "value": "",
    "help": "",
    "type": "text",
    "options": "",
    "group": 1,
    "flag": 0
  },
  {
    "key": "pagination_type",
    "value": "all",
    "help": "",
    "type": "select",
    "options": "all,pagination,load_more,auto_load_more",
    "group": 1,
    "flag": 0
  },
  {
    "key": "default_page_size",
    "value": "50",
    "help": "",
    "type": "number",
    "options": "",
    "group": 1,
    "flag": 0
  },
  {
    "key": "allow_indexed",
    "value": "false",
    "help": "",
    "type": "bool",
    "options": "",
    "group": 1,
    "flag": 0
  },
  {
    "key": "allow_mounted",
    "value": "false",
    "help": "",
    "type": "bool",
    "options": "",
    "group": 1,
    "flag": 0
  },
  {
    "key": "robots_txt",
    "value": "User-agent: *\nAllow: /",
    "help": "",
    "type": "text",
    "options": "",
    "group": 1,
    "flag": 0
  }
]
```

### 请求参数

| 名称          | 位置   | 类型          | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------------- | ---- | ------ | ---- |
| Authorization | header | string        | 是   |        | none |
| body          | body   | array[object] | 否   | 数组   | none |

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

## POST 删除设置

POST /api/admin/setting/delete

仅用于弃用的设置

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| key           | query  | string | 是   |        | none |
| Authorization | header | string | 是   |        | none |

### 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 重置令牌

POST /api/admin/setting/reset_token

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| Authorization | header | string | 否   |        | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": "alist-9d"
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
| » data    | string  | true | none | 新令牌 | none |

## POST 设置令牌

POST /api/admin/setting/set_token

> Body 请求参数

```json
{
  "token": "alist-fixed-token"
}
```

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| Authorization | header | string | 是   |        | none |
| body          | body   | object | 否   |        | none |
| » token       | body   | string | 是   | 新令牌 | 立即替换当前永久令牌 |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": "alist-fixed-token"
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
| » data    | string  | true | none | 当前令牌 | 保存后的令牌值 |

## POST 设置aria2

POST /api/admin/setting/set_aria2

> Body 请求参数

```json
{
  "uri": "string",
  "secret": "string"
}
```

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名    | 说明 |
| ------------- | ------ | ------ | ---- | --------- | ---- |
| Authorization | header | string | 是   |           | none |
| body          | body   | object | 否   |           | none |
| » uri         | body   | string | 是   | aria2地址 | none |
| » secret      | body   | string | 是   | aria2密钥 | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": "1.36.0"
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名    | 说明 |
| --------- | ------- | ---- | ---- | --------- | ---- |
| » code    | integer | true | none | 状态码    | none |
| » message | string  | true | none | 信息      | none |
| » data    | string  | true | none | aria2版本 | none |

## POST 设置qBittorrent

POST /api/admin/setting/set_qbit

> Body 请求参数

```json
{
  "url": "string",
  "seedtime": "string"
}
```

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名          | 说明 |
| ------------- | ------ | ------ | ---- | --------------- | ---- |
| Authorization | header | string | 是   |                 | none |
| body          | body   | object | 否   |                 | none |
| » url         | body   | string | 是   | qBittorrent链接 | none |
| » seedtime    | body   | string | 是   | 做种时间        | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": "1.36.0"
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
| » data    | string  | true | none |        | none |
