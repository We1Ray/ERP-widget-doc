---
sidebar_label: TextQryBox
---

## 參數

```typescript
  visible?: boolean; //判斷是否可視 初始值為true
  disabled?: boolean; //判斷是否可用 初始值為false
  bind?: boolean; //Binding欄位
  query?: boolean; //query欄位
  name?: string;
  maxLength: number; //欄位最大長度
  defaultValue?: string; //新增時的預設值
  handleValidation?: (value: any) => Promise<boolean>; //設定欄位的正規表示式
  value?: string; //設定欄位值
  delimiter?: string; //多選時的分隔符號
  dialog: {
    window: any | React.FC<{ callback: any }>;//開窗的視窗作業
    parameter: JSON;//傳遞給視窗作業使用的參數值
    style?: React.CSSProperties;
  };
  label: {
    name: string; //label顯示欄位的名稱
    visible?: boolean; //Label是否可視 初始值為true
    api?: string; //label查詢的api
    value?: string; //label的值
    style?: React.CSSProperties;
  };
  text: {
    name: string; //Textbox欄位綁定的名稱
    visible?: boolean; //Textbox是否可視 初始值為true
    disabled?: boolean; //Textbox是否不可用 初始值為false
    style?: React.CSSProperties;
  };
  result?: (value: string) => any;
  ref?: React.Ref<any>;
```

- **_bind(和 query 擇一)_**  
  如果設定為 true，則會在`新增/修改/刪除`時將值依照 name 寫入呼叫 api 的參數值

- **_query(和 bind 擇一)_**
  如果設定為 true，則會在`查詢`時將值依照 name 寫入呼叫 api 的參數值

- **_name(若 bind 或 query 為 true 則必填)_**  
  [Program.changeData](ERP-widget#program)的參數名稱，也是 api 使用參數的名稱

- **_delimiter_**  
   例如 delimiter 為 **;**，多選 Jack 和 Alex 則返回的 value 為 Jack **;** Alex

  ```javascript
  <TextQryBox
    bind={true}
    name="PARENT_UID"
    maxLength={60}
    dialog={{
      window: Qry_system_program,
      parameter: { system_uid: system_uid },
      style: { height: "400px" },
    }}
    text={{
      name: "PROGRAM_UID",
      disabled: true,
      visible: false,
    }}
    label={{
      name: "PROGRAM_NAME",
      api: "/system_program/qry_programadim_program_name",
    }}
  />
  ```

  ```javascript
  //視窗作業
  export default function Qry_system_program({ system_uid, callback }) {
    return (
      <ProgramProvider>
        <Qry_system_program_Content
          system_uid={system_uid}
          callback={callback}
        />
      </ProgramProvider>
    );
  }

  function Qry_system_program_Content({ system_uid, callback }) {
    const { Program } = useContext(ProgramContext);

    function getTreeJsonFromData(treeitem) {
      let result = [];
      let level = { result };
      treeitem.forEach((treeitem) => {
        if (checkValue(treeitem["PROGRAM_CODE"])) {
          treeitem["PROGRAM_CODE"].split(".").reduce((r, name, i, a) => {
            if (!r[name]) {
              r[name] = { result: [] };
              r.result.push({
                id: treeitem["PROGRAM_UID"],
                label: treeitem["PROGRAM_NAME"],
                data: treeitem,
                icon: treeitem["ICON"],
                children: r[name].result,
              });
            }
            return r[name];
          }, level);
        }
      });
      return result;
    }

    useEffect(() => {
      if (callback) {
        callback(Program.selectedData);
      }
    }, [Program.selectedData]);

    return (
      <>
        <Column md={12}>
          <Form
            programID="Qry_system_program"
            dataKey={["PROGRAM_UID", "PROGRAM_CODE"]}
            individual={true}
          >
            <BtnQuery
              queryApi="/system_program/get_system_programs_for_admin"
              defaultQueryParameters={{ programadmin_SYSTEM_UID: system_uid }}
              style={{ display: "none" }}
              disableFilter={async () => false}
            />
            <Column>
              <Tree
                bind={true}
                data={getTreeJsonFromData(Program.data)}
                height="300px"
              />
            </Column>
          </Form>
        </Column>
      </>
    );
  }
  ```
