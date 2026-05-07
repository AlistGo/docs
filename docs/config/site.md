---
# This is the icon of the page
icon: iconfont icon-tab
# This control sidebar order
order: 3
# A page can have multiple categories
category:
  - Config
# A page can have multiple tags
tag:
  - Config
  - Settings
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Site settings

:::tip
Supported version:

- Current paginated list settings and default page size `50`: `>= v3.58.0`
:::

### **Version**

The version of the `alist`, readonly.



### **Api url**

> Deprecated in v3.0.2 and later, moved to [site_url](./configuration.md#site-url)

The address of your `alist`, such as `https://pan.nn.ci`.This address will be used in some places in the program, If you do not set this field, Some features may not work properly, such as:

Do not carry `/` at the end of the URL link, correct example:heavy_check_mark: :`https://pan.nn.ci`, wrong example: `https://pan.nn.ci/` :x:,Otherwise the following functions will not be available

- thumbnail of `LocalStorage`
- Preview after opening web proxy
- The download address after opening the web proxy
- Reverse proxy to sub directory
- ...



### **Base path**

> Deprecated in v3.0.2 and later, moved to [site_url](./configuration.md#site-url)

Default `/`, if you want reverse proxy with sub directory(see [reverse proxy with sub directory](../faq/howto.md#how-to-reverse-proxy-with-sub-directory) for details), such as `https://pan.nn.ci/alist`, you should set this field to `alist`, at the same time you need to set `Api url` to `https://pan.nn.ci/alist`.



### **Site title**

The title of the `alist`, such as `Alist`.



### **Announcement**

The announcement of the `alist`, such as `### Hello\nWelcome to use Alist`. We suggest you add a title in front of the content, such as `### Hello`, so that the content will not be covered by `Close Button`.

- If you don't want to display it, you can clear the contents of the announcement to not display it.

If you think the `x` button in the upper right corner is in the way, you can use the following CSS to remove it

```css
<style>
.notify-render .hope-close-button {
    display: none;
}
</style>
```

### **Pagination type**

- All: Legacy raw setting value. Use it carefully for very large directories.
- Pagination: Show a `Paginator` at the bottom of the page.
- Load more: Show a `Load more` button at the bottom of the page.
- Auto load more: Automatically load more files when scrolling to the bottom of the page.



### **Default page size**

The default page size of the `alist` for paginated directory listing.

- Current site default: `50`
- `/api/fs/list` still has its own backend default `200` when `per_page <= 0`
- Backend maximum `per_page`: `500`



### **allow indexing**

Whether to allow others to mount your AList to build the index, check it and enable it.

The default is off, use with caution.  (New features in version 3.8.0)



## **allow mounted**

Do you allow others to mount your AList and then access it

**It is enabled by default, it is recommended to turn it off if you don’t want others to mount it** (v3.16.3 new feature)



## **Robots.txt**

Crawler configuration/rules

The default is to allow crawlers to access all pages

- `Allow: /` Indicates that the crawlers of search engines are allowed to visit all pages

```txt{2}
User-agent: *
Allow: /
```

If you want to prevent crawlers from accessing all pages, you can change it to this

```txt{2}
User-agent: *
Disallow: /
```
