---
sidebar_label: TextBox
---

## 參數

```typescript
  visible?: boolean; //判斷是否可視 初始值為true
  disabled?: boolean; //判斷是否可用 初始值為false
  bind?: boolean; //Binding欄位
  query?: boolean; //query欄位
  name?: string;
  maxLength?: number; //欄位最大長度
  defaultValue?: string; //新增時的預設值
  value?: string;//設定元件值
  handleValidation?: (value: any) => Promise<boolean>; //設定欄位的正規表示式
  area?: boolean;
  result?: (value: string) => any;//取得元件值
  style?: React.CSSProperties;
  ref?: React.Ref<any>;
```

- **_bind(和 query 擇一)_**  
  如果設定為 true，則會在`新增/修改/刪除`時將值依照 name 寫入呼叫 api 的參數值

- **_query(和 bind 擇一)_**
  如果設定為 true，則會在`查詢`時將值依照 name 寫入呼叫 api 的參數值

- **_name(若 bind 或 query 為 true 則必填)_**  
  [Program.changeData](ERP-widget#program)的參數名稱，也是 api 使用參數的名稱

- **_handleValidation_**  
  設定正規表達式，例如不可為空  
  ```javascript
    async function NotNull_handleValidation(value) {
        let msg = "";
        if (!value) {
        msg = localization["NotNullMsg"];
        return msg;
        }
    }

    <TextBox
        bind={true}
        name="FACTORY_NAME"
        maxLength={300}
        handleValidation={NotNull_handleValidation}
    />
  ```

- **_area_**  
  設定TextBox可變多行輸入