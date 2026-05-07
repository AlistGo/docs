---
# This is the icon of the page
icon: iconfont icon-people
# This control sidebar order
order: 7
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
star: false
---

# session

:::tip
支持版本：

- 管理员会话列表与踢出 API：`>= v3.52.0`
:::

> 过期的设备会话记录会由全局设置 `device_session_ttl` 自动清理。当前后端没有单独公开一个 `clean` API。

> 这组接口对应后台 `会话 => 管理` 页面。

## GET 列出全部设备会话

GET /api/admin/session/list

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是   | 管理员 token |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "session_id": "a1b2c3d4e5f6",
      "user_id": 1,
      "last_active": 1756451234,
      "status": 0,
      "ua": "Mozilla/5.0 ...",
      "ip": "192.*.*.10"
    }
  ]
}
```

### 返回数据结构

状态码 **200**

| 名称           | 类型     | 必选 | 说明 |
| -------------- | -------- | ---- | ---- |
| » code         | integer  | true | 状态码 |
| » message      | string   | true | 信息 |
| » data         | [object] | true | 会话列表 |
| »» session_id  | string   | true | 设备会话ID |
| »» user_id     | integer  | true | 用户ID |
| »» last_active | integer  | true | Unix 时间戳 |
| »» status      | integer  | true | `0`=active，`1`=inactive |
| »» ua          | string   | true | user agent |
| »» ip          | string   | true | 脱敏后的 IP |

## POST 踢出某个设备会话

POST /api/admin/session/evict

> Body 请求参数

```json
{
  "session_id": "a1b2c3d4e5f6"
}
```

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是   | 管理员 token |
| body          | body   | object | 否   | none |
| » session_id  | body   | string | 是   | 目标设备会话ID |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 说明 |
| --------- | ------- | ---- | ---- |
| » code    | integer | true | 状态码 |
| » message | string  | true | 信息 |
| » data    | null    | true | none |
