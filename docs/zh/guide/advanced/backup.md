---
# This is the icon of the page
icon: iconfont icon-view
# This control sidebar order
order: 13
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Advanced
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 备份&恢复

## **方法1-内置**

使用`AList`后台的内置 `备份/恢复`选项

>1. 备份：进行AList数据进行备份（==**不包含索引**==）
>
>2. 恢复：恢复之前备份文件
>
>3. 覆盖：恢复时选择覆盖会将用户信息进行覆盖
>
>4. 加密：填写`加密密码`导出时会将信息进行加密，导入时也需要先输入`加密密码`再点击恢复^3.40.0_新增^

![](/img/advanced/backup.png)



## **方法2-sqlite3**

直接将`AList`目录下的 data/`data.db`数据库进行备份，等到了新环境直接进行替换即可(==**包含索引数据**==)

- 现在高版本如果有`data.db-shm`和`data.db-wal`这两个文件也要一起进行备份，恢复时也是一起替换
- 建议停止运行AList再进行备份，这样`data.db-shm`和`data.db-wal`这两个文件会和`data.db`合并在一起

![](/img/advanced/sqlite3.png)



## **方法3-其他数据库**

其他，如果你使用了 `MySQL，Postgres` 等非`sqlite数据库`，请自行解决(==**包含索引数据**==)

