---
sidebar_label: 修改按鈕
---
![system-button](/img/BtnUpdate.png)

## 參數
```typescript
    disableFilter?: () => Promise<boolean>
    defaultParameters?: JSON
    beforeDoUpdate?: () => Promise<boolean> 
    doUpdate?: () => Promise<boolean>
    afterDoUpdate?: () => Promise<boolean>
    updateApi: string
    style?: JSON
    childObject?: HTMLElement
```
### disableFilter
  設定更新按鈕是否可使用的boolean
  ```javascript
  async function updateDisable() {
        return true
  }
 <BtnUpdate 
    disableFilter={updateDisable} 
 />
  ```
### defaultParameters
更新時預設的參數
  ```javascript
 <BtnQuery
    defaultParameters={{
      GROUP_UID: '123',
    }}
  />
  ```  
### beforeDoUpdate
  修改前進行的動作 true則會繼續動作 false 則結束
  ```javascript
  async function beforeDoUpdate() {
        try {
            let code = ''
            const updateParameters = Program.updateParameters
            updateParameters['uid'] = '123'

            ProgramDispatch({ type: "updateParameters", value: updateParameters })
            return true
        } catch (e) {
            console.log('error:', e)
            return false
        }
    }
 <BtnUpdate 
    beforeDoUpdate={beforeDoUpdate} 
 />
  ```
### doUpdate
覆寫修改功能(原本會執行updateApi的request更新資料到資料庫)，回傳更新是否成功
  ```javascript
  async function update() {
        return true
  }
 <BtnUpdate 
    doUpdate={update} 
 />
  ```
### afterDoUpdate
更新後進行的動作 true則為新增成功 false 則失敗
  ```javascript
  async function afterDoUpdate() {
        return true
  }
 <BtnUpdate 
    afterDoUpdate={afterDoUpdate} 
 />
  ```
### updateApi(必填)
更新資料的API路徑
  ```javascript
 <BtnUpdate
    updateApi='/languagelocalisation/update_languagelocalisation'
  />
  ```
### style
*查看 [BtnQuery](BtnQuery).[style](BtnQuery#style)*
### childObject
*查看 [BtnQuery](BtnQuery).[childObject](BtnQuery#childObject)*
