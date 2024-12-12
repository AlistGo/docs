---
# This is the icon of the page
icon: iconfont icon-file
# This control sidebar order
order: 5
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

# task

alist中的任务管理可以分为：

| 接口名                     | 说明             |
| -------------------------- | ---------------- |
| /upload                    | 上传任务         |
| /copy                      | 复制任务         |
| /offline_download          | 离线下载任务     |
| /offline_download_transfer | 离线下载转存任务 |

每种任务都有以下接口：

- info
- done
- undone
- delete
- cancel
- clear_done
- clear_succeeded
- retry
- retry_failed
- delete_some
- cancel_some
- retry_some

下面将以upload任务为例，说明每个接口的作用。

## POST 获取任务信息

POST /api/task/upload/info

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明   |
| ------------- | ------ | ------ | ---- | ------ |
| tid           | query  | string | no   | 任务id |
| Authorization | header | string | yes  | none   |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": "1",
      "name": "upload 1.png to [/s](/test)",
      "creator": "admin",
      "creator_role": 2,
      "state": "succeeded",
      "status": "",
      "progress": 100,
      "error": ""
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

| 名称            | 类型     | 必选  | 约束 | 中文名           | 说明                            |
| --------------- | -------- | ----- | ---- | ---------------- | ------------------------------- |
| » code          | integer  | true  | none | 状态码           | none                            |
| » message       | string   | true  | none | 信息             | none                            |
| » data          | [object] | true  | none |                  | none                            |
| »» id           | string   | false | none | id               | none                            |
| »» name         | string   | false | none | 任务名           | none                            |
| »» creator      | string   | false | none | 任务创建者用户名 | none                            |
| »» creator_role | integer  | false | none | 任务创建者角色   | 0: 普通用户，1: 访客，2: 管理员 |
| »» state        | string   | false | none | 任务完成状态     | none                            |
| »» status       | string   | false | none |                  | none                            |
| »» progress     | float    | false | none | 进度             | none                            |
| »» error        | string   | false | none | 错误信息         | none                            |

## GET 获取已完成任务

GET /api/task/upload/done

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是   | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": "1",
      "name": "upload 1.png to [/s](/test)",
      "creator": "example_user",
      "creator_role": 0,
      "state": "succeeded",
      "status": "",
      "progress": 100,
      "error": ""
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

| 名称            | 类型     | 必选  | 约束 | 中文名           | 说明                            |
| --------------- | -------- | ----- | ---- | ---------------- | ------------------------------- |
| » code          | integer  | true  | none | 状态码           | none                            |
| » message       | string   | true  | none | 信息             | none                            |
| » data          | [object] | true  | none |                  | none                            |
| »» id           | string   | false | none | id               | none                            |
| »» name         | string   | false | none | 任务名           | none                            |
| »» creator      | string   | false | none | 任务创建者用户名 | none                            |
| »» creator_role | integer  | false | none | 任务创建者角色   | 0: 普通用户，1: 访客，2: 管理员 |
| »» state        | string   | false | none | 任务完成状态     | none                            |
| »» status       | string   | false | none |                  | none                            |
| »» progress     | float    | false | none | 进度             | none                            |
| »» error        | string   | false | none | 错误信息         | none                            |

## GET 获取未完成任务

GET /api/task/upload/undone

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是   | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": "1",
      "name": "upload 1.png to [/s](/test)",
      "creator": "guest",
      "creator_role": 1,
      "state": "succeeded",
      "status": "",
      "progress": 100,
      "error": ""
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

| 名称            | 类型     | 必选  | 约束 | 中文名           | 说明                            |
| --------------- | -------- | ----- | ---- | ---------------- | ------------------------------- |
| » code          | integer  | true  | none | 状态码           | none                            |
| » message       | string   | true  | none | 信息             | none                            |
| » data          | [object] | true  | none |                  | none                            |
| »» id           | string   | false | none | id               | none                            |
| »» name         | string   | false | none | 任务名           | none                            |
| »» creator      | string   | false | none | 任务创建者用户名 | none                            |
| »» creator_role | integer  | false | none | 任务创建者角色   | 0: 普通用户，1: 访客，2: 管理员 |
| »» state        | string   | false | none | 任务完成状态     | none                            |
| »» status       | string   | false | none |                  | none                            |
| »» progress     | float    | false | none | 进度             | none                            |
| »» error        | string   | false | none | 错误信息         | none                            |

## POST 删除任务

POST /api/task/upload/delete

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明   |
| ------------- | ------ | ------ | ---- | ------ |
| tid           | query  | string | 是   | 任务id |
| Authorization | header | string | 是   | none   |

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

## POST 取消任务

POST /api/task/upload/cancel

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明   |
| ------------- | ------ | ------ | ---- | ------ |
| tid           | query  | string | 是   | 任务id |
| Authorization | header | string | 是   | none   |

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

## POST 清除已完成任务

POST /api/task/upload/clear_done

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是   | none |

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

## POST 清除已成功任务

POST /api/task/upload/clear_succeeded

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是   | none |

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

## POST 重试任务

POST /api/task/upload/retry

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明   |
| ------------- | ------ | ------ | ---- | ------ |
| tid           | query  | string | 是   | 任务id |
| Authorization | header | string | 是   | none   |

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

## POST 重试已失败任务

POST /api/task/upload/retry_failed

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明   |
| ------------- | ------ | ------ | ---- | ------ |
| Authorization | header | string | 是   | none   |

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

## POST 删除多个任务

POST /api/task/upload/delete_some

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明   |
| ------------- | ------ | ------ | ---- | ------ |
| Authorization | header | string | 是   | none   |
|               | body   | array  | 是   | none   |
| »             | body   | string | 是   | 任务id |

### 请求体示例

```json
[ "WC7gsoTr5CHkExN9dmyxs", "bcv4U-79gv1c6hB_DPOk_" ]
```

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "bcv4U-79gv1c6hB_DPOk_": "task not found"
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型     | 必选  | 约束 | 中文名   | 说明                                       |
| --------- | -------- | ----- | ---- | -------- | ------------------------------------------ |
| » code    | integer  | true  | none | 状态码   | none                                       |
| » message | string   | true  | none | 信息     | none                                       |
| » data    | [object] | true  | none |          | 不在此对象中的任务表示删除成功且无错误信息 |
| »» 任务id | string   | false | none | 错误信息 | none                                       |

## POST 取消多个任务

POST /api/task/upload/cancel_some

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明   |
| ------------- | ------ | ------ | ---- | ------ |
| Authorization | header | string | 是   | none   |
|               | body   | array  | 是   | none   |
| »             | body   | string | 是   | 任务id |

### 请求体示例

```json
[ "WC7gsoTr5CHkExN9dmyxs", "bcv4U-79gv1c6hB_DPOk_" ]
```

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "bcv4U-79gv1c6hB_DPOk_": "task not found"
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型     | 必选  | 约束 | 中文名   | 说明                                       |
| --------- | -------- | ----- | ---- | -------- | ------------------------------------------ |
| » code    | integer  | true  | none | 状态码   | none                                       |
| » message | string   | true  | none | 信息     | none                                       |
| » data    | [object] | true  | none |          | 不在此对象中的任务表示取消成功且无错误信息 |
| »» 任务id | string   | false | none | 错误信息 | none                                       |

## POST 重试多个任务

POST /api/task/upload/retry_some

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明   |
| ------------- | ------ | ------ | ---- | ------ |
| Authorization | header | string | 是   | none   |
|               | body   | array  | 是   | none   |
| »             | body   | string | 是   | 任务id |

### 请求体示例

```json
[ "WC7gsoTr5CHkExN9dmyxs", "bcv4U-79gv1c6hB_DPOk_" ]
```

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "bcv4U-79gv1c6hB_DPOk_": "task not found"
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型     | 必选  | 约束 | 中文名   | 说明                                       |
| --------- | -------- | ----- | ---- | -------- | ------------------------------------------ |
| » code    | integer  | true  | none | 状态码   | none                                       |
| » message | string   | true  | none | 信息     | none                                       |
| » data    | [object] | true  | none |          | 不在此对象中的任务表示重试成功且无错误信息 |
| »» 任务id | string   | false | none | 错误信息 | none                                       |
