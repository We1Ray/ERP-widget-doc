---
sidebar_label: SelectionBox
---

## 參數

```typescript
  multiple: boolean; //設定是否多選
  options: {
    value: string;
    label: string;
    isFixed?: boolean;//設定是否選定後不可異動
  }[]; //下拉選項
  visible?: boolean; //判斷是否可視 初始值為true
  disabled?: boolean; //判斷是否可用 初始值為false
  bind?: boolean; //Binding欄位
  query?: boolean; //query欄位
  name?: string;
  maxSelections: number; //多選的個數上限
  defaultValue?: {
    value: string;
    label: string;
    isFixed?: boolean;
  }[]; //新增時的預設值
  value?: {
    value: string;
    label: string;
    isFixed?: boolean;
  }[];//給值
  handleValidation?: (value: any) => Promise<boolean>; //設定欄位的正規表示式
  placeholder?: string;//沒有選項時顯示的文字
  result?: (
    value: {
      value: string;
      label: string;
      isFixed?: boolean;
    }[]//回傳值
  ) => any;
  ref?: React.Ref<any>;
```

- **_bind(和 query 擇一)_**  
  如果設定為 true，則會在`新增/修改/刪除`時將值依照 name 寫入呼叫 api 的參數值

- **_query(和 bind 擇一)_**
  如果設定為 true，則會在`查詢`時將值依照 name 寫入呼叫 api 的參數值

- **_name(若 bind 或 query 為 true 則必填)_**  
  [Program.changeData](ERP-widget#program)的參數名稱，也是 api 使用參數的名稱

- **_defaultValue_**  
  在查詢或新增時欄位的預設值