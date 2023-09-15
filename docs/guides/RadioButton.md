---
sidebar_label: RadioButton
---

## 參數

```typescript
  visible?: boolean; //判斷是否可視 初始值為true
  disabled?: boolean; //判斷是否可用 初始值為false
  bind?: boolean; //Binding欄位
  query?: boolean; //query欄位
  name?: string;
  defaultValue?: string; //欄位預設值
  handleValidation?: (value: any) => Promise<boolean>; //設定欄位的正規表示式
  options: {
    value: string;
    text: string;
    disabled?: boolean;
    style?: React.CSSProperties;
  }[]; //選項
  value?: string; //給予欄位值
  optionColumnProportion: number; //選項在畫面中的比例同Col的使用方式
  result?: (value: string) => any;//取得欄位值
  ref?: React.Ref<any>;
```

- **_bind(和 query 擇一)_**  
  如果設定為 true，則會在`新增/修改/刪除`時將值依照 name 寫入呼叫 api 的參數值

- **_query(和 bind 擇一)_**
  如果設定為 true，則會在`查詢`時將值依照 name 寫入呼叫 api 的參數值

- **_name(若 bind 或 query 為 true 則必填)_**  
  [Program.changeData](ERP-widget#program)的參數名稱，也是 api 使用參數的名稱

- **_options(必填)_**  
  設定RadioButton選項

- **_optionColumnProportion(必填)_**  
  設定選項之間的間距
