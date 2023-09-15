---
sidebar_label: DataTable
---

## 參數

```typescript
  bind?: boolean;
  data: object[];
  keyField?: string;
  columns: {
    dataField: string;
    text: string;
    sort?: boolean;
    formatter?: (
      cell: any,
      row: any,
      rowIndex: any,
      formatExtraData: any
    ) => JSX.Element;
    hidden?: boolean;
    align?: string;
  ...}[];
  Expand?: React.FC<{ row: JSON }>;
  dialog?: {
    content: JSX.Element;
    style?: React.CSSProperties;
  };
  multipleSelection?: boolean;
  sizePerPageList?: object;
  ref?: React.Ref<any>;
```

- **_bind_**  
  設定為 true 了話則 DataTable 選取資料會綁定 [Program.selectedData](ERP-widget#selectedData)

- **_data(必填)_**  
  設定資料的陣列

- **_keyField_**  
  若 bind 為 false(或無設定)則需給予資料表中的 keyField，若 bind 為 true 的 keyField 為 **ROW_NUM_ID** 所以在 select 資料時請多 ROWNUM)
  如下:

  ```sql
  SELECT ROWNUM ROW_NUM_ID , A.* FROM accounts A
  ```

- **_columns(必填)_**  
  設定 DataTable 欄位(dataField)對應資料的參數名稱，text 則是顯示欄位名稱，可用 formatter 可客製欄位，
  其他設定可參考 https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/table-props.html#columns-required-object

  ```js
  columns={[
    {
        dataField: "LANGUAGE",
        text: localization["LANGUAGE"],
        sort: true,
    },
    {
        dataField: "UP_USER",
        text: localization["UP_USER"],
        sort: true,
    },
    {
        dataField: "UP_DATE",
        text: localization["UP_DATE"],
        formatter: (cellContent, row) => (
            <Label
                text={
                    row.UP_DATE
                         ? moment(row.UP_DATE)
                            .format("YYYY/MM/DD")
                            .toString()
                         : ""
                }
            />
        ),
        sort: true,
    }
  ]}
  ```

- **_Expand_**
  (bind 為 true 使用) 設定資料展開畫面

  ![DataTable_Expand](/img/DataTable_Expand.png)

  ```java
    Expand={
        ({ row }) => {
            <Column md={6}>
                <Label
                    text={localization["LANGUAGE"]}
                    name="LANGUAGE"
                />
                <TextBox
                    disabled={true}
                    value={row["LANGUAGE"]}
                    maxLength={20}
                />
            </Column>;
        }
    }
  ```

- **_dialog_**
  (bind 為 true 使用) 設定資料彈跳畫面，若有設定則新增時或 DoubleClick 可檢視(若無設定 Expand)則會彈跳畫面顯示
  ![DataTable_Dialog](/img/DataTable_Dialog.png)

  ```java
    dialog={{
      content: (
        <Block>
          <Column md={6}>
              <Label
                text={localization["LANGUAGE"]}
                bind={true}
                name="LANGUAGE"
              />
              <TextBox
                bind={true}
                name="LANGUAGE"
                 maxLength={20}
              />
          </Column>
        </Block>
      ),
    }}
  ```

- **_multipleSelection_**  
  (bind 為 true 使用) 設定選擇資料多選，選取資料會綁定 [Program.selectedMultiData](ERP-widget#selectedMultiData)

- **_sizePerPageList_**  
  (bind 為 true 使用) 設定頁簽筆數選項
