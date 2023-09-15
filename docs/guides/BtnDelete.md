---
sidebar_label: 刪除按鈕
---
![system-button](/img/BtnDelete.png)

## 參數
```typescript
    disableFilter?: () => Promise<boolean>
    beforeDoDelete?: () => Promise<boolean>
    doDelete?: () => Promise<boolean>
    afterDoDelete?: () => Promise<boolean>
    multiple?: boolean
    deleteApi: string
    defaultParameters?: JSON
    style?: JSON
    childObject?: HTMLElement
```
### disableFilter
  設定刪除按鈕是否可使用的boolean
  ```javascript
  async function deleteDisable() {
        return true
  }
 <BtnDelete 
    disableFilter={deleteDisable} 
 />
  ```
### beforeDoDelete
  刪除前進行的動作 true則會繼續動作 false 則結束
  ```javascript
      async function beforeDoDelete() {
        try {
            let doDelete = false
            await Swal.fire({
                title: localization['Warning'],
                text: localization['ConfirmDeleteInformation'] + '?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: localization['Yes'],
                cancelButtonText: localization['No']
            }).then(alert => {
                doDelete = !!(alert.value && alert.value === true)
            })
            return doDelete
        } catch (e) {
            console.log('error:', e);
            return false;
        }
    }
 <BtnDelete 
    beforeDoDelete={beforeDoDelete} 
 />
  ```
### doDelete
覆寫刪除功能(原本會執行deleteApi的request刪除資料)，回傳刪除是否成功
  ```javascript
  async function doDelete() {
        return true
  }
 <BtnDelete 
    doDelete={doDelete} 
 />
  ```
### afterDoDelete
新增後進行的動作 true則為新增成功 false 則失敗
  ```javascript
  async function afterDoDelete() {
        return true
  }
 <BtnDelete 
    afterDoDelete={afterDoDelete} 
 />
  ```
### multiple
預設刪除單筆(最後)指定的資料，設定true則刪除指定多筆的資料
  ```javascript
 <BtnDelete
    multiple={true}
  />
  ```
### deleteApi(必填)
新增資料的API路徑
  ```javascript
 <BtnDelete
    deleteApi='/languagelocalisation/delete_languagelocalisation'
  />
  ```
### defaultParameters
刪除時預設的參數
  ```javascript
 <BtnDelete
    defaultParameters={{
        GROUP_UID: group_uid,
        ACCESS_TOKEN: System.token
    }}
  />
  ```
### style
*查看 [BtnQuery](BtnQuery).[style](BtnQuery#style)*
### childObject
*查看 [BtnQuery](BtnQuery).[childObject](BtnQuery#childObject)*
