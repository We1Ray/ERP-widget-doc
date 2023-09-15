---
title: 新增
sidebar_label: 新增
---

## 編寫 SQL

在`sql`資料夾下新增所使用的 sql  
![api_sql](/img/api_sql.png)

## 設定 Database 資訊

在 DataBaseInfo.json 中設定所需 DB 的資訊

```JSON
{
    "TEST": {
        "user": "",
        "password": "",
        "connectString": "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=)(Port=1521))(CONNECT_DATA=(SID=)))"
    }
}
```

## 新增 Router

### 在 routes 資料夾下新增 js

- 1.設定路徑
- 2.處理 request 時所帶的參數
- 3.讀取寫好的 SQL
- 4.使用公用程式 library.js 的功能(或自行編寫)來對 db 做存取

```js
const DataBaseInfo = require("../DataBaseInfo.json");
const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const lib = require("../library");
const oracledb = require("oracledb");

router.route("/ui_caption_properties").post(async (req, res) => {
  let DBConfig = req.headers.factory ? DataBaseInfo[req.headers.factory] : {};
  let parameter = {
    LANGUAGE: req.body.LANGUAGE ? req.body.LANGUAGE : null,
    SOURCE: req.body.SOURCE ? req.body.SOURCE : null,
    WORD: req.body.WORD ? req.body.WORD : null,
  };
  let sql = fs
    .readFileSync(
      path.resolve(__dirname, "../sql/public/ui_caption_properties.sql")
    )
    .toString();
  await lib.requestAPI("/ui_caption_properties", DBConfig, sql, parameter, res);
});
```

### 在 server.js 裡新增 Router 路徑

```js
const publicRouter = require("./routes/public");
app.use("/public", publicRouter);
```
