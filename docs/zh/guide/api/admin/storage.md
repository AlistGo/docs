---
# This is the icon of the page
icon: iconfont icon-folder
# This control sidebar order
order: 4
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

# storage

:::tip
支持版本：

- 存储字段 `down_proxy_sign`：`>= v3.56.0`
- 删除仍被角色 / 用户基本路径引用的存储时会被后端拦截：`>= v3.52.0`
:::

## GET 列出存储列表

GET /api/admin/storage/list

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明     |
| ------------- | ------ | ------ | ---- | -------- |
| page          | query  | string | 否   | 页数     |
| per_page      | query  | string | 否   | 每页数目 |
| Authorization | header | string | 是   | token    |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "content": [
      {
        "id": 1,
        "mount_path": "/lll",
        "order": 0,
        "driver": "Local",
        "cache_expiration": 0,
        "status": "work",
        "addition": "{\"root_folder_path\":\"/root/www\",\"thumbnail\":false,\"thumb_cache_folder\":\"\",\"show_hidden\":true,\"mkdir_perm\":\"777\"}",
        "remark": "",
        "modified": "2023-07-19T09:46:38.868739912+08:00",
        "disabled": false,
        "enable_sign": false,
        "order_by": "name",
        "order_direction": "asc",
        "extract_folder": "front",
        "web_proxy": false,
        "webdav_policy": "native_proxy",
        "down_proxy_url": "",
        "down_proxy_sign": true
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

| 名称                 | 类型     | 必选  | 约束 | 中文名       | 说明         |
| -------------------- | -------- | ----- | ---- | ------------ | ------------ |
| » code               | integer  | true  | none | 状态码       | 状态码       |
| » message            | string   | true  | none | 信息         | 信息         |
| » data               | object   | true  | none |              | none         |
| »» content           | [object] | true  | none |              | none         |
| »»» id               | integer  | false | none | id           | id           |
| »»» mount_path       | string   | false | none | 挂载路径     | 挂载路径     |
| »»» order            | integer  | false | none | 排序         | 顺序         |
| »»» driver           | string   | false | none | 驱动         | 驱动类型     |
| »»» cache_expiration | integer  | false | none | 缓存过期时间 | 缓存时间     |
| »»» status           | string   | false | none | 状态         | 状态         |
| »»» addition         | string   | false | none | 额外信息     | 额外信息     |
| »»» remark           | string   | false | none | 备注         | 备注名       |
| »»» modified         | string   | false | none | 修改时间     | 修改时间     |
| »»» disabled         | boolean  | false | none | 禁用         | 是否被禁用   |
| »»» enable_sign      | boolean  | false | none | 启用签名     | none         |
| »»» order_by         | string   | false | none | 排序         | 排序方式     |
| »»» order_direction  | string   | false | none | 排序方向     | 排序方向     |
| »»» extract_folder   | string   | false | none | 提取文件夹   | 提取目录顺序 |
| »»» web_proxy        | boolean  | false | none | web代理      | http代理     |
| »»» webdav_policy    | string   | false | none | webdav代理   | webdav策略   |
| »»» down_proxy_url   | string   | false | none | 下载代理url  | 下载代理url  |
| »»» down_proxy_sign  | boolean  | false | none | 代理签名开关 | 是否给下载代理 URL 附加 `sign` |
| »» total             | integer  | true  | none | 总数         | none         |

## POST 启用存储

POST /api/admin/storage/enable

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 说明   |
| ------------- | ------ | ------- | ---- | ------ |
| id            | query  | integer | 是   | 存储id |
| Authorization | header | string  | 是   | token  |

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
| » data    | null    | true | none | data   | data   |

## POST 禁用存储

POST /api/admin/storage/disable

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明   |
| ------------- | ------ | ------ | ---- | ------ |
| id            | query  | string | 是   | 存储id |
| Authorization | header | string | 是   | token  |

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
| » data    | null    | true | none | data   | data   |

## POST 创建存储

POST /api/admin/storage/create

> Body 请求参数

```json
{
  "mount_path": "/lll",
  "order": 0,
  "remark": "",
  "cache_expiration": 30,
  "web_proxy": false,
  "webdav_policy": "native_proxy",
  "down_proxy_url": "",
  "down_proxy_sign": true,
  "extract_folder": "front",
  "enable_sign": false,
  "driver": "Local",
  "order_by": "name",
  "order_direction": "asc",
  "addition": "{\"root_folder_path\":\"/\",\"thumbnail\":false,\"thumb_cache_folder\":\"\",\"show_hidden\":true,\"mkdir_perm\":\"777\"}"
}
```

### 请求参数

| 名称               | 位置   | 类型    | 必选 | 中文名       | 说明  |
| ------------------ | ------ | ------- | ---- | ------------ | ----- |
| Authorization      | header | string  | 是   |              | token |
| body               | body   | object  | 否   |              | none  |
| » id               | body   | string  | 否   | ID           | none  |
| » mount_path       | body   | string  | 是   | 挂载路径     | none  |
| » order            | body   | integer | 否   | 排序         | none  |
| » driver           | body   | string  | 是   | 驱动         | none  |
| » remark           | body   | string  | 否   | 备注名       | none  |
| » cache_expiration | body   | integer | 否   | 缓存过期时间 | none  |
| » status           | body   | string  | 是   |              | none  |
| » web_proxy        | body   | boolean | 是   | web代理      | none  |
| » webdav_policy    | body   | string  | 否   | webdav策略   | none  |
| » down_proxy_url   | body   | string  | 否   | 下载代理     | none  |
| » down_proxy_sign  | body   | boolean | 否   | 代理签名开关 | 是否附加 `sign` 参数 |
| » order_by         | body   | string  | 是   | 排序方式     | none  |
| » extract_folder   | body   | string  | 是   | 提取目录     | none  |
| » order_direction  | body   | string  | 是   | 排序方向     | none  |
| » addition         | body   | string  | 是   | 额外信息     | none  |
| » enable_sign      | body   | string  | 是   | 启用签名     | none  |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 7
  }
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
| » data    | object  | true | none | data   | data   |
| »» id     | integer | true | none |        | none   |

## POST 更新存储

POST /api/admin/storage/update

> Body 请求参数

```json
{
  "mount_path": "/lll",
  "order": 0,
  "remark": "",
  "cache_expiration": 30,
  "web_proxy": false,
  "webdav_policy": "native_proxy",
  "down_proxy_url": "",
  "down_proxy_sign": true,
  "extract_folder": "front",
  "enable_sign": false,
  "driver": "Local",
  "order_by": "name",
  "order_direction": "asc",
  "addition": "{\"root_folder_path\":\"/\",\"thumbnail\":false,\"thumb_cache_folder\":\"\",\"show_hidden\":true,\"mkdir_perm\":\"777\"}"
}
```

### 请求参数

| 名称               | 位置   | 类型    | 必选 | 中文名       | 说明  |
| ------------------ | ------ | ------- | ---- | ------------ | ----- |
| Authorization      | header | string  | 是   |              | token |
| body               | body   | object  | 否   |              | none  |
| » id               | body   | string  | 否   | ID           | none  |
| » mount_path       | body   | string  | 是   | 挂载路径     | none  |
| » order            | body   | integer | 否   | 排序         | none  |
| » driver           | body   | string  | 是   | 驱动         | none  |
| » remark           | body   | string  | 否   | 备注名       | none  |
| » cache_expiration | body   | integer | 否   | 缓存过期时间 | none  |
| » status           | body   | string  | 是   |              | none  |
| » web_proxy        | body   | boolean | 是   | web代理      | none  |
| » webdav_policy    | body   | string  | 否   | webdav策略   | none  |
| » down_proxy_url   | body   | string  | 否   | 下载代理     | none  |
| » down_proxy_sign  | body   | boolean | 否   | 代理签名开关 | 是否附加 `sign` 参数 |
| » order_by         | body   | string  | 是   | 排序方式     | none  |
| » extract_folder   | body   | string  | 是   | 提取目录     | none  |
| » order_direction  | body   | string  | 是   | 排序方向     | none  |
| » addition         | body   | string  | 是   | 额外信息     | none  |
| » enable_sign      | body   | string  | 是   | 启用签名     | none  |

> 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 7
  }
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
| » data    | object  | true | none | data   | data   |
| »» id     | integer | true | none |        | none   |

## GET 查询指定存储信息

GET /api/admin/storage/get

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明   |
| ------------- | ------ | ------ | ---- | ------ | ------ |
| id            | query  | string | 是   |        | 存储id |
| Authorization | header | string | 是   |        | token  |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 2,
    "mount_path": "/aa",
    "order": 1,
    "driver": "Aliyundrive",
    "cache_expiration": 30,
    "status": "work",
    "addition": "{\"root_folder_id\":\"\",\"refresh_token\":\"\",\"order_by\":\"size\",\"order_direction\":\"ASC\",\"rapid_upload\":false}",
    "remark": "",
    "modified": "2022-11-26T21:50:44.142348853+08:00",
    "disabled": false,
    "order_by": "",
    "order_direction": "",
    "extract_folder": "front",
    "web_proxy": false,
    "webdav_policy": "302_redirect",
    "down_proxy_url": "",
    "down_proxy_sign": true
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称                | 类型    | 必选 | 约束 | 中文名       | 说明 |
| ------------------- | ------- | ---- | ---- | ------------ | ---- |
| » code              | integer | true | none | 状态码       | none |
| » message           | string  | true | none | 信息         | none |
| » data              | object  | true | none |              | none |
| »» id               | integer | true | none | id           | none |
| »» mount_path       | string  | true | none | 挂载路径     | none |
| »» order            | integer | true | none | 排序         | none |
| »» driver           | string  | true | none | 驱动         | none |
| »» cache_expiration | integer | true | none | 缓存过期时间 | none |
| »» status           | string  | true | none | 状态         | none |
| »» addition         | string  | true | none | 额外信息     | none |
| »» remark           | string  | true | none | 备注         | none |
| »» modified         | string  | true | none | 修改时间     | none |
| »» disabled         | boolean | true | none | 是否被禁用   | none |
| »» order_by         | string  | true | none | 排序方式     | none |
| »» order_direction  | string  | true | none | 排序方向     | none |
| »» extract_folder   | string  | true | none | 提取目录     | none |
| »» web_proxy        | boolean | true | none | web代理      | none |
| »» webdav_policy    | string  | true | none | webdav策略   | none |
| »» down_proxy_url   | string  | true | none | 下载代理     | none |
| »» down_proxy_sign  | boolean | true | none | 代理签名开关 | 是否给下载代理 URL 附加 `sign` |

## POST 删除指定存储

POST /api/admin/storage/delete

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明   |
| ------------- | ------ | ------ | ---- | ------ | ------ |
| id            | query  | string | 否   |        | 存储id |
| Authorization | header | string | 是   |        | token  |

> 从 `>= v3.52.0` 开始，如果某个存储的首段挂载路径仍被角色权限作用域或用户 `base_path` 引用，删除会被后端拦截，并返回类似 `storage is used by role:xxx, user:yyy, please cancel usage first` 的错误。

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
| » data    | null    | true | none | data   | data   |

## POST 重新加载所有存储

POST /api/admin/storage/load_all

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| Authorization | header | string | 是   |        | none |

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
