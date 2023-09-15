---
title: 作業設定
sidebar_label: 作業設定
---

## 新增作業

**在專案/pages 路徑底下** 新增作業的路徑會對應 **控制平台** 設置的路徑

![page_route](/img/page_route.png)
![page_fileRoute](/img/page_fileRoute.png)

作業碼(programID)也會對應

```javascript
<Form programID="admin.system">{...props.children}</Form>
```

![page_programcode](/img/page_programcode.png)

## 作業權限

新增作業後即會有五個權限 `read`，`query`，`create`，`update`，`delete`，如有需求，可再新增權限
![program_auth](/img/program_auth.png)
