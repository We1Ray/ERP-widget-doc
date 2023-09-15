module.exports = {
  docs: {
    "ERP-Widget": [
      "guides/ERP-widget",
      {
        type: "category",
        label: "元件列表",
        items: [
          {
            type: "category",
            label: "系統按鈕",
            items: [
              "guides/BtnQuery",
              "guides/BtnCreate",
              "guides/BtnUpdate",
              "guides/BtnDelete",
              "guides/BtnSave",
              "guides/BtnCancel",
              {
                type: "category",
                label: "功能按鈕",
                items: ["guides/BtnExcelImport"],
              },
            ],
          },
          {
            type: "category",
            label: "系統元件",
            items: [
              "guides/DataTable",
              "guides/TreeView",
              "guides/QueryPattern",
              "guides/Label",
              "guides/CheckBox",
              "guides/DatetimeBox",
              "guides/RadioButton",
              "guides/SelectionBox",
              "guides/TextBox",
              "guides/TextQryBox",
            ],
          },
          "guides/system-ui",
        ],
      },
    ],
  },
  Tutorial: {
    前端: [
      "tutorial/environment-setup",
      "tutorial/role",
      "tutorial/program",
      "tutorial/first-program",
    ],
    後端: [
      "tutorial/environment-setup_backEnd",
      "tutorial/api",
      "tutorial/library",
    ],
  },
};
