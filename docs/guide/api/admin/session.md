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
Supported version:

- Admin session list and evict APIs: `>= v3.52.0`
:::

> Stale device-session records are cleaned automatically by the global `device_session_ttl` setting. The current backend does not expose a separate public `clean` API.

> This is the backend API used by `Manage => Session => Management`.

## GET list all device sessions

GET /api/admin/session/list

### Request parameters

| Name          | In     | Type   | Required | Description |
| ------------- | ------ | ------ | -------- | ----------- |
| Authorization | header | string | yes      | admin token |

### Response example

> Success

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

### Response data structure

Status code **200**

| Name           | Type     | Required | Description |
| -------------- | -------- | -------- | ----------- |
| » code         | integer  | true     | status code |
| » message      | string   | true     | message |
| » data         | [object] | true     | session list |
| »» session_id  | string   | true     | device session id |
| »» user_id     | integer  | true     | user id |
| »» last_active | integer  | true     | Unix timestamp |
| »» status      | integer  | true     | `0` active, `1` inactive |
| »» ua          | string   | true     | user agent |
| »» ip          | string   | true     | masked IP |

## POST evict a device session

POST /api/admin/session/evict

> Body request parameters

```json
{
  "session_id": "a1b2c3d4e5f6"
}
```

### Request parameters

| Name          | In     | Type   | Required | Description |
| ------------- | ------ | ------ | -------- | ----------- |
| Authorization | header | string | yes      | admin token |
| body          | body   | object | no       | none |
| » session_id  | body   | string | yes      | target device session id |

### Response example

> Success

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### Response data structure

Status code **200**

| Name      | Type    | Required | Description |
| --------- | ------- | -------- | ----------- |
| » code    | integer | true     | status code |
| » message | string  | true     | message |
| » data    | null    | true     | none |
