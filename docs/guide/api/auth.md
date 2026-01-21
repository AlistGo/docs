---
# This is the icon of the page
icon: iconfont icon-token
# This control sidebar order
order: 2
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

# auth

## POST token获取

POST /api/auth/login

获取某个用户的临时JWt token, 有效期默认48小时

> Body 请求参数

```json
{
  "Username": "{{alist_username}}",
  "Password": "{{alist_password}}"
}
```

### 请求参数

| 名称       | 位置 | 类型   | 必选 | 中文名     | 说明       |
| ---------- | ---- | ------ | ---- | ---------- | ---------- |
| body       | body | object | 否   |            | none       |
| » Username | body | string | 是   | 用户名     | 用户名     |
| » Password | body | string | 是   | 密码       | 密码       |
| » otp_code | body | string | 否   | 二步验证码 | 二步验证码 |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "token": "abcd"
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
| » code    | integer | true | none |        | 状态码 |
| » message | string  | true | none |        | 信息   |
| » data    | object  | true | none |        | data   |
| »» token  | string  | true | none |        | token  |

## POST token获取hash

POST /api/auth/login/hash

获取某个用户的临时JWt token，传入的密码需要在添加`-https://github.com/alist-org/alist`后缀后再进行sha256

> Body 请求参数

```json
{
  "username": "{{alist_username}}",
  "password": "{{alist_password}}"
}
```

### 请求参数

| 名称       | 位置 | 类型   | 必选 | 中文名     | 说明                                                                    |
| ---------- | ---- | ------ | ---- | ---------- | ----------------------------------------------------------------------- |
| body       | body | object | 否   |            | none                                                                    |
| » username | body | string | 是   | 用户名     | 用户名                                                                  |
| » password | body | string | 是   | 密码       | hash后密码，获取方式为`sha256(密码-https://github.com/alist-org/alist)` |
| » otp_code | body | string | 否   | 二步验证码 | 二步验证码                                                              |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "token": "abcd"
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
| » code    | integer | true | none |        | 状态码 |
| » message | string  | true | none |        | 信息   |
| » data    | object  | true | none |        | data   |
| »» token  | string  | true | none |        | token  |

## POST 生成2FA密钥

POST /api/auth/2fa/generate

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
  "data": {
    "qr": "data:image/png;base64,iVBORw0KGgoAAAANSUhE",
    "secret": "RPQZG4MDS3"
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明                 |
| --------- | ------- | ---- | ---- | ------ | -------------------- |
| » code    | integer | true | none | 状态码 | none                 |
| » message | string  | true | none | 信息   | none                 |
| » data    | object  | true | none | 数据   | none                 |
| »» qr     | string  | true | none | 二维码 | 二维码图片的data url |
| »» secret | string  | true | none | 密钥   | none                 |

## POST 验证2FA code

POST /api/auth/2fa/verify

> Body 请求参数

```json
{
  "code": "string",
  "secret": "string"
}
```

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名    | 说明 |
| ------------- | ------ | ------ | ---- | --------- | ---- |
| Authorization | header | string | 是   |           | none |
| body          | body   | object | 否   |           | none |
| » code        | body   | string | 是   | 2FA验证码 | none |
| » secret      | body   | string | 是   | 2FA密钥   | none |

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

## GET 获取当前用户信息

GET /api/me

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
  "data": {
    "id": 1,
    "username": "admin",
    "password": "",
    "base_path": "/",
    "role": 2,
    "disabled": false,
    "permission": 0,
    "sso_id": "",
    "otp": true
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称          | 类型    | 必选 | 约束 | 中文名           | 说明 |
| ------------- | ------- | ---- | ---- | ---------------- | ---- |
| » code        | integer | true | none | 状态码           | none |
| » message     | string  | true | none | 信息             | none |
| » data        | object  | true | none | 数据             | none |
| »» id         | integer | true | none | id               | none |
| »» username   | string  | true | none | 用户名           | none |
| »» password   | string  | true | none | 密码             | none |
| »» base_path  | string  | true | none | 根目录           | none |
| »» role       | integer | true | none | 角色             | none |
| »» disabled   | boolean | true | none | 是否禁用         | none |
| »» permission | integer | true | none | 权限             | none |
| »» sso_id     | string  | true | none | sso id           | none |
| »» otp        | boolean | true | none | 是否开启二步验证 | none |

## GET 列出当前用户 SFTP 公钥

GET /api/me/sshkey/list

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
  "data": {
    "content": [
      {
        "id": 1,
        "title": "Test-SSH-Key",
        "fingerprint": "SHA256:aAFI5C******************************KD6hYhs",
        "added_time": "2024-12-15T20:09:28.1777368+08:00",
        "last_used_time": "2024-12-15T20:10:07.7846528+08:00"
      },
      {
        "id": 2,
        "title": "Test-SSH-Key-2",
        "fingerprint": "SHA256:P2zrSs******************************h0Q5BOQ",
        "added_time": "2024-12-20T20:09:28.1777368+08:00",
        "last_used_time": "2024-12-25T20:10:07.7846528+08:00"
      },
    ],
    "total": 2
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称          | 类型    | 必选 | 约束 | 中文名           | 说明 |
| ------------- | ------- | ---- | ---- | ---------------- | ---- |
| » code        | integer | true | none | 状态码           | none |
| » message     | string  | true | none | 信息             | none |
| » data        | object  | true | none | 数据             | none |
| »» content    | [object] | true | none |                | none |
| »»» id        | integer | true | none | 公钥主键          | none |
| »»» title     | string | true | none | 公钥名称        | none |
| »»» fingerprint | string | true | none | 公钥指纹        | none |
| »»» added_time | string | true | none | 添加时间        | none |
| »»» last_used_time | string | true | none | 上次认证时间  | none |
| »» total      | integer | true | none | 总数             | none |

## POST 给当前用户添加 SFTP 公钥

POST /api/me/sshkey/add

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| Authorization | header | string | 是   |        | none |
| body          | body   | object | 否   |        | none |
| » title       | body   | string | 是   | 公钥名  | none |
| » key         | body   | string | 是   | 公钥内容 | none |

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

| 名称          | 类型    | 必选 | 约束 | 中文名           | 说明 |
| ------------- | ------- | ---- | ---- | ---------------- | ---- |
| » code        | integer | true | none | 状态码           | none |
| » message     | string  | true | none | 信息             | none |
| » data        | null    | true | none |                 | none |

## POST 删除当前用户的 SFTP 公钥

POST /api/me/sshkey/delete

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| Authorization | header | string | 是   |        | none |
| id            | query  | integer | 是   | 公钥主键 | none |

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

| 名称          | 类型    | 必选 | 约束 | 中文名           | 说明 |
| ------------- | ------- | ---- | ---- | ---------------- | ---- |
| » code        | integer | true | none | 状态码           | none |
| » message     | string  | true | none | 信息             | none |
| » data        | null    | true | none |                 | none |
