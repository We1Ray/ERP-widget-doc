---
sidebar_label: QueryPattern
---

## 參數

```typescript
  defaultValue?: {
    value: string;
    label: string;
    isFixed?: boolean;//設定固定選項(不能異動)
  }[]; //預設值
  options: {
    value: string;
    label: string;
    isFixed?: boolean;
  }[]; //設定選項
  ref?: React.Ref<any>;
```

- **_options_**  
   設定查詢條件的選項若有選擇會在查詢判斷條件增加，無則會隱藏UI並不使用此查詢條件，
   label顯示外值，value則對應query元件和Column和Row的name，選定的值會寫入[Program.queryConditions](ERP-widget#queryConditions)

  ![QueryPattern_Option](/img/QueryPattern_Option.png)

  ```java
    <QueryPattern
        options={[
            {
                value: "languagelocalisation_KEY",
                label: localization["SEARCH_VALUE"],
                isFixed: true,
            },
            {
                value: "languagelocalisation_LANGUAGE",
                label: localization["LANGUAGE"],
            },
            {
                value: "languagelocalisation_SOURCE",
                label: localization["SOURCE"],
            }]
        }
        defaultValue={[
            {
                value: "languagelocalisation_KEY",
                label: localization["SEARCH_VALUE"],
                isFixed: true,
            },
        ]}
    />
  ```
