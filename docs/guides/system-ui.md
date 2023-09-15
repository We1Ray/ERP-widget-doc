---
title: UI元件
sidebar_label: UI元件
---
通用於畫面切(排)版或特殊的UI元件功能

# Block
切分畫面區塊使用
```javascript
  <Block>
    ...
  </Block>
```
# RoW
排版使用，特殊參數: `name` 當有使用查詢條件選單時，會依照name的值比對Program.queryConditions若不存在則隱藏此RoW
```javascript
  <RoW>
    ...
  </RoW>
```
# Column
排版使用，特殊參數: `name` 當有使用查詢條件選單時，會依照name的值比對Program.queryConditions若不存在則隱藏此Column
```javascript
  <Column>
    ...
  </Column>
```
# None
若在畫面進行判斷式時不顯示怎使用此元件
```javascript
  <None />
```
# DraggableWrapper
拉拖式窗，參數 `open`決定視窗開關
```javascript
  <DraggableDialog open={true} >
    ...
  </DraggableDialog>
```