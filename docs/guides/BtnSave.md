---
sidebar_label: 儲存按鈕
---
![system-button](/img/BtnSave.png)

## 參數
```typescript
    disableFilter?: () => Promise<boolean>
    style?: JSON
    childObject?: HTMLElement
```
### disableFilter
  設定儲存按鈕是否可使用的boolean
  ```javascript
  async function createDisable() {
        return true
  }
 <BtnSave 
    disableFilter={createDisable} 
 />
  ```
### style
*查看 [BtnQuery](BtnQuery).[style](BtnQuery#style)*
### childObject
*查看 [BtnQuery](BtnQuery).[childObject](BtnQuery#childObject)*