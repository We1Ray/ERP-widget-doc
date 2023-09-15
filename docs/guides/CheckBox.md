---
sidebar_label: CheckBox
---

## 參數

```typescript
  visible?: boolean; //判斷是否可視 初始值為true
  disabled?: boolean; //判斷是否可用 初始值為false
  bind?: boolean; //Binding欄位
  query?: boolean; //query欄位
  name?: string; //bind或query時帶入api的參數名稱
  defaultValue?: string; //新增時的預設值
  value?: string;//設定值
  checkedText: string; //勾選後顯示的文字
  notCheckedText: string; //無勾選時顯示的文字
  checkedValue: string; //勾選後的值
  notCheckedValue: string; //無勾選的值
  result?: (value: string) => any;//取得元件值
  ref?: React.Ref<any>;//取得元件整個reference
```

- **_bind(和 query 擇一)_**  
  如果設定為 true，則會在`新增/修改/刪除`時將值依照 name 寫入呼叫 api 的參數值

- **_query(和 bind 擇一)_**
  如果設定為 true，則會在`查詢`時將值依照 name 寫入呼叫 api 的參數值

- **_name(若bind或query為true則必填)_**  
  [Program.changeData](ERP-widget#program)的參數名稱，也是 api 使用參數的名稱

- **_defaultValue_**  
  在查詢或新增時欄位的預設值

- **_checkedText(必填)_**  
  勾選後的外顯值

- **_notChecedText(必填)_**  
  沒勾選的外顯值

- **_checkedValue(必填)_**  
  勾選後的內存值

- **_notCheckedValue(必填)_**  
  沒有勾選的內存值
