---
title: 前置設定
sidebar_label: 前置設定
---

## 下載初始專案

```shell
git clone https://github.com/We1Ray/ERP_Widget_Project.git
```

## 在 Base.js 設定 system_uid

```javascript
export default function Base({ ...props }) {
  return <System system_uid="SYS_00001">{...props.children}</System>;
}
```
