---
sidebar_label: 新增按鈕
---
![system-button](/img/BtnCreate.png)

## 參數
```typescript
    disableFilter?: () => Promise<boolean>
    defaultParameters?: JSON
    beforeDoCreate?: () => Promise<boolean>
    doCreate?: () => Promise<boolean>
    afterDoCreate?: () => Promise<boolean>
    insertApi: string //資料新增API的名稱
    style?: JSON
    childObject?: HTMLElement
```
### disableFilter
  設定新增按鈕是否可使用的boolean
  ```javascript
  async function createDisable() {
        return true
  }
 <BtnCreate 
    disableFilter={createDisable} 
 />
  ```
### defaultParameters
新增時預設的參數
  ```javascript
 <BtnQuery
    defaultQueryParameters={{
      GROUP_UID: '123',
    }}
  />
  ```
### beforeDoCreate
  新增前進行的動作 true則會繼續動作 false 則結束
  ```javascript
  async function beforeDoCreate() {
        try {
            let code = ''
            const insertParameters = Program.insertParameters
            const changeData = Program.changeData
            if (checkValue(changeData['PARENT_CODE'])) {
                code = changeData['PARENT_CODE'] + '.' + insertParameters['SELF_CODE']
            } else {
                code = changeData['PROGRAM_CODE']
            }
            insertParameters['PROGRAM_CODE'] = code

            let nodelevel = code.split('.').length
            insertParameters['NODE_LEVEL'] = nodelevel

            ProgramDispatch({ type: "insertParameters", value: insertParameters })
            return true
        } catch (e) {
            console.log('error:', e)
            return false
        }
    }
 <BtnCreate 
    beforeDoCreate={beforeDoCreate} 
 />
  ```
### doCreate
覆寫新增功能(原本會執行insertApi的request寫入資料到資料庫)，回傳新增是否成功
  ```javascript
  async function create() {
        return true
  }
 <BtnCreate 
    doCreate={create} 
 />
  ```
### afterDoCreate
新增後進行的動作 true則為新增成功 false 則失敗
  ```javascript
  async function afterDoCreate() {
        return true
  }
 <BtnCreate 
    afterDoCreate={afterDoCreate} 
 />
  ```
### insertApi(必填)
新增資料的API路徑
  ```javascript
 <BtnCreate
    insertApi='/languagelocalisation/create_languagelocalisation'
  />
  ```
### style
*查看 [BtnQuery](BtnQuery).[style](BtnQuery#style)*
### childObject
*查看 [BtnQuery](BtnQuery).[childObject](BtnQuery#childObject)*