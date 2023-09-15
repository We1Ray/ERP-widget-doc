---
sidebar_label: DatetimeBox
---

## 參數

```typescript
  visible?: boolean; //判斷是否可視 初始值為true
  disabled?: boolean; //判斷是否可用 初始值為false
  bind?: boolean; //Binding欄位
  query?: boolean; //query欄位
  name?: string;
  defaultValue?: Date; //新增時的預設值
  value?: Date;//設定值
  handleValidation?: (value: any) => Promise<boolean>; //設定欄位的正規表示式
  format: string; //設定日期格式 可參考:https://reactdatepicker.com/#example-default
  mask: string; //設定輸入格式
  result?: (value: Date) => any;//回傳值
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

- **_format(必填)_**  
  設定資料在轉換 JSON 字串的格式

- **_mask(必填)_**  
  設定時間填寫顯示的格式

  ```java
  <DatetimeBox format="yyyy/MM/dd" mask="1111/11/11" />
  ```
