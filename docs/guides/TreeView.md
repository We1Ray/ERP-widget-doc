---
sidebar_label: TreeView
---

## 參數

```typescript
  height?: number;
  width?: number;
  disabled?: boolean;
  bind?: boolean;
  data: {
    id: string;//節點唯一值
    label: string;
    icon: string;
    data: any;//節點的Data
    children?: any;
    expand?: string;
  }[];
  onClickValue?: (arg: any) => void;
  onDoubleClickValue?: (arg: any) => void;
```

- **_height_**  
  設定元件的高度

- **_width_**  
  設定元件的寬度

- **_disabled_**
  是否停字元件

- **_bind_**  
  若設定 true，選取資料會綁定 [Program.selectedData](ERP-widget#selectedData)

- **_data(必填)_**  
   設定時須先將資料排序整理排序成以下的陣列資料表，expand參數為設定自動展開至此節點，如果是則設定為'Y'

  ```java
  Array(2) [{...},{...}]
  0:
    children: Array(4)
        0: {id: 'OP-896e23f1-82c0-4776-96e8-621b3dbaa9cd', label: '系統資訊', data: {…}, icon: null, children: Array(3)}
        1: {id: 'OP-691b1a64-1646-4034-9c43-559834e078cd', label: '群組管理', data: {…}, icon: null, children: Array(2)}
        2: {id: 'OP-822ef026-d3de-47c5-8d4f-cc0e4523a6ce', label: '帳號管理', data: {…}, icon: null, children: Array(0)}
        3: {id: 'OP-c2524894-e4e7-4e31-8018-144e652ccc22', label: '語系管理', data: {…}, icon: null, children: Array(0)}
    data: {PROGRAM_UID: 'OP-afb4f688-9bf3-4c55-a3f8-88a09f240ad6', SYSTEM_UID: 'SYS_00001', PROGRAM_CODE: 'admin', PROGRAM_NAME: '管理平台', I18N: 'system.MANAGEMENT_PLATFORM', …}
    icon: "icon-grid"
    id: "OP-afb4f688-9bf3-4c55-a3f8-88a09f240ad6"
    label: "管理平台"
  1:
    children: Array(1)
        0: {id: 'OP-f2fbe3bd-bdc4-4c17-9e09-6696044cb16b', label: 'orgadmin', data: {…}, icon: null, children: Array(0)}
    data: {PROGRAM_UID: 'OP-b17f957d-73f6-4fa6-8f99-7ea5f9896a2c', SYSTEM_UID: 'SYS_00001', PROGRAM_CODE: 'org', PROGRAM_NAME: '第二作業', I18N: null, …}
    icon: null
    id: "OP-b17f957d-73f6-4fa6-8f99-7ea5f9896a2c"
    label: "第二作業"
  ```

  ![TreeView](/img/TreeView.png)

- **_onClickValue_**  
  選取節點後事件
  ```javascript
  function onClickValue(arg) {
        // do something
    }
 <TreeView 
    onClickValue={onClickValue} 
 />
  ```

- **_onDoubleClickValue_**  
  雙擊節點事件
  ```javascript
  function onDoubleClickValue(arg) {
        // do something
    }
 <TreeView 
    onDoubleClickValue={onDoubleClickValue} 
 />
  ```