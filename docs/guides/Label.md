---
sidebar_label: Label
---

## 參數

```typescript
  text?: string;
  visible?: boolean;
  query?: boolean;
  bind?: boolean;
  name?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<any>;
```

- **_bind(和 query 擇一)_**  
  如果設定為 true，則會在對應的bind元件的輸入值違反設定的正規表達式(handleValidation)則會顯示錯誤訊息

- **_query(和 bind 擇一)_**
  如果設定為 true，則會被queryCondition的值影響決定是否顯示UI

- **_name(若 bind 或 query 為 true 則必填)_**  
  對應元件參數的名稱
