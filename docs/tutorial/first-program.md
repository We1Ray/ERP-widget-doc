---
title: First Program
sidebar_label: First Program
---

開始建立第一支作業，需先 import ERP-widget 和 widget 的 css

```javascript
import {...} from "ERP-widget";
import "ERP-widget/dist/index.css";
```

基本結構需先將程式包覆在 `ComponentProvider` 和`ProgramProvider`裡面，便於之後程式間資料的溝通使用

```javascript
export default function LanguageLocalisation() {
  return (
    <ComponentProvider>
      <ProgramProvider>
        <LanguageLocalisation_Content />
      </ProgramProvider>
    </ComponentProvider>
  );
}
```

## 設定

先宣告`System`，`Component`，`Program`，`status`等系統、元件、作業、作業狀態的設定後**設定語系**，必且設定目前作業**是否需要登入**

```javascript
function LanguageLocalisation_Content() {
  const { System, SystemDispatch } = useContext(SystemContext);
  const { Component, ComponentDispatch } = useContext(ComponentContext);
  const { Program, ProgramDispatch } = useContext(ProgramContext);
  const { status, send } = useContext(statusContext);
  const [localization, setLocalization] = useState({});

  useEffect(() => {
    initLocalization();
  }, [System.lang]);

  useEffect(() => {
    SystemDispatch({ type: "mustlogin", value: true });
  }, [JSON.stringify(System.factory)]);

  async function initLocalization() {
    setLocalization(
      await getLocalization([
        {
          NAME: "LANGUAGE",
          LANGUAGE: System.lang,
          SOURCE: "languagelocalisation",
          WORD: "LANGUAGE",
        },
        {
          NAME: "SOURCE",
          LANGUAGE: System.lang,
          SOURCE: "languagelocalisation",
          WORD: "SOURCE",
        },
        {
          NAME: "WORD",
          LANGUAGE: System.lang,
          SOURCE: "languagelocalisation",
          WORD: "WORD",
        },
      ])
    );
  }

  return <div>...</div>;
}
```
