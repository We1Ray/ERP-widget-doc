---
sidebar_label: 查詢按鈕
---
![system-button](/img/BtnQuery.png)

## 參數
```typescript
    disableFilter?: () => Promise<boolean>
    doQuery?: () => Promise<object>
    defaultQueryParameters?: JSON
    queryApi: string
    style?: JSON
    childObject?: HTMLElement
```
### disableFilter
  設定查詢按鈕是否可用的boolean
  ```javascript
  async function queryDisable() {
        return true
  }
 <BtnQuery 
    disableFilter={queryDisable} 
 />
  ```
### doQuery
覆寫原本的查詢功能(原本會執行queryApi的request回傳資料)，回傳覆寫查詢的JSON資料
  ```javascript
  async function query() {
        return [{
          uid:'123',
          factory:'ERP'
        }]
  }
 <BtnQuery 
    doQuery={query} 
 />
  ```
### defaultQueryParameters
查詢時預設的參數
  ```javascript
 <BtnQuery
    defaultQueryParameters={{
      GROUP_UID: '123',
    }}
  />
  ```
### queryApi(必填)
資料查詢的API路徑
  ```javascript
 <BtnQuery
    queryApi='/languagelocalisation/get_languagelocalisation'
  />
  ```
### style
設定按鈕的樣式
  ```javascript
  <BtnQuery
    style={{ display: 'none' }}
  />
  ```
### childObject
覆寫按鈕的UI
  ```javascript
  <BtnQuery
    childObject={<em className="fa-2x fas fa-plus" />}
  />
  ```