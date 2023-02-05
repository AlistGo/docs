---
# This is the icon of the page
icon: search
# This control sidebar order
order: 8
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

# Search

### how to use

Follow the steps below to enable search:

1. Go to the `indexes` page to select a search index and click `Save`.
2. After the index is saved, click `Build indexes` to build the index.
3. Now you can search for files by click the search block on the top right corner of the page or by using the shortcut `Ctrl + K`.

### Difference between different search indexes

- `database`: Search by database, which is using the existing data.db. It will create a new table, record the parent directory, name, and size of every object, but the search does not split words which means that match whether the keywords you enter appear in the name of object. In general, if you don't have a specific search requirement, we recommend you choose it.
- `database (non-full-text search)`: The full-text search mode is used above, but full-text search will have some strange problems when using **MySQL database** as an Alist database, which has not been resolved yet, so if your Alist database Change to **MySQL**, and your Alist version **`≥3.9.1`** It is recommended that you use this to build an index, although it is slower than full-text search and the gap is not very big, but it will not search for strange files , it’s more secure. After the future version is repaired, we will inform you to use the new full-text search to build the index. If you are using **sqlite3**, you can use whichever you like.
- `bleve`: An open source full-text search engine. It will split the words in the name of object and search for the keywords you enter. But its search results may be so strange that you can't get the results you want, and it will take up more resources.

The following table could help you understand the difference between the two search indexes quickly:

|                         | database    | bleve       |
| ----------------------- | ----------- | ----------- |
| Search results          | Exact match | Fuzzy match |
| Search speed            | Fast        | Fast        |
| Specify folder search   | Yes         | No          |
| Disk usage              | Low         | High        |
| Auto incremental update | Yes         | No          |

### Search tips

- If you want to search for a specific folder, you must choose `database` as the search index;
- If you choose `database` as the search index and the type of your database is `sqlite3`, we suggest that you don't make any changes in the admin page while building the index, as sqlite3 does not support concurrent writes and can cause `database-lock` issues;
- If you choose `bleve` as the search index, and if you want to search for new files or if you don't want to search for deleted files, the index needs to be completely rebuilt to take effect because `bleve` does not support incremental updates;
- But for `database`, it supports incremental updates, so you can search for new files or deleted files just by access the modified folder (and click `refresh` icon if cached) without rebuilding the index, which is much more convenient than `bleve`.

### Ignore paths

Paths to be skipped during index building, one path per line, multiple lines can be filled

- example:
   - /aaa network disk
   - /bbb network disk/ccc folder

- ### Update index

  - (formerly: the path to update the index)

  After building all the indexes, or a file has a large number of file updates, but it is inconvenient to rebuild, you can use this to update the index

  - example:

     - /aaa network disk

     - /bbb network disk/ccc folder

  ### Automatically update the index

  :warning: **`The default is off, and the index will not be built automatically`**

  For example, you have already built the index, but added a **network disk mount** or **folder update** later

  But you have already built a lot of indexes. According to the previous words, there are two methods

  1. Go in folder by folder before building
  2. Or it is cumbersome to refactor all

  But this time, just turn on the **`Automatically build index`** button and enter the **Newly mounted network disk** or **Updated folder**, the indexed files in this directory and The folder automatically builds the index without entering a folder by folder to let him build it automatically

  - Advantages: Don't worry, all the indexes in this folder can be automatically built if there is an update into the root directory of the updated folder
  - Cons: always on call ready to build

  ----

  Someone will find out that [**Path to update index**](#Path to update index) can also be updated? Can be updated but the two do not conflict

  - [**Automatically update index**](#automatically-update-the-index): suitable for users who build indexes for all files
  - [**Update Index**](#update-index): Suitable for **not** to build indexes for all files, but there are files that need to be built, manually build indexes to avoid all being indexed

### Maximum index depth

default 20.

The one shown outside is built manually, and the update index option selects the depth in the update index button.

Explanation: The directory can enter up to several layers. For example, if you have a folder with a depth of 30 layers, set it to 20, and only build the first 20 layers, and the remaining 10 layers will not be built.

### :warning: Precautions for use

- Alist **V2** and **v3** types of mounts cannot be built by default
- If you are using **MySQL** as the database, it is recommended that you use **database (non-full-text search)**, [**Click to view details to see the second item**](#difference-between-different-search-indexes)
- In the future version (**≥3.9.0 version**), V3 users can choose whether to allow others to mount your network disk and then index it :no_entry:**`Use with caution`**:no_entry:
   - View details:  https://alist.nn.ci/config/site.html#allow-indexing
   - Don't ask why V2 is not supported, because the V2 version is no longer maintained, so there is no follow-up

- Why not directly open V2 V3 index construction: **https://github.com/alist-org/alist/discussions/2529**

