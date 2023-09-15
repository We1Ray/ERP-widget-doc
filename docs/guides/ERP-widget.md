---
sidebar_label: 組成架構
title: 組成架構
---

[ERP-Widget](/docs/guides/1-main-concept) 系統元件工具，提供畫面基礎元件協助綁定和元件間的溝通方式  

這裡我們使用一個簡單的圖，來解釋ERP-Widget 如何在專案中應用
<!-- @import "../../static/img/widget_structure.png" -->
![widget_structure](/img/widget_structure.png)
## System
用於設定專案編號(system_uid)和紀錄廠別、語言、登入者信息等資訊需在最外層包覆整個專案讓所有元件都能讀取到這些訊息

- **token** : EIP登入後產生的Token，身分認證用
- **system_uid** : 系統編號
- **factory**
  - ***uid*** : 廠別編號
  - ***name*** : 廠別名稱
  - ***ip*** : 後端ip位址
- **userstate** : 使用者狀態
- **mustlogin** : 是否需登入
- **lang** : 語言

## Component
可容納多個Program，放Program的狀態、資料等的Container，讓各個Program的狀態、資料共享，減少流水線式的傳遞參數

- **status** : Component內的Program的狀態
- **selectedData** : Component內的Program 當前的選擇的資料
- **selectedMultiData** : Component內的Program 當前的多選的資料

## Program
- **programID** : program代號
- **data** : 目前查詢的所有資料
- **dataKey** : 資料的key值
- **selectedData** : 作業選的單筆資料
- **selectedMultiData** : 作業選的多筆資料
- **queryParameters** : 查詢的參數
- **updateParameters** : 修改的參數
- **insertParameters** : 新增的參數
- **changeData** : 目前元件的值
- **validation** : 
    - ***query*** : 查詢欄位的正規表示式
    - ***bind*** : 綁定欄位的正規表示式
    - ***common*** : 一般欄位的正規表示式
- **loading** : 狀態轉換間使用一般值為READ
- **queryConditions** :查詢使用的條件
- **individual** : 是否為獨立程式，不受Component內其他Program的影響

## status
當Program產生時自動帶有status，會由系統按鈕觸發，狀態有下:
- **READ** 
- **QUERY** 
- **CREATE** 
- **UPDATE** 
- **CANCEL** 
- **DELETE** 
- **SAVE** 
- 
[使用狀態邏輯順序](https://xstate.js.org/viz/?gist=d69e3ac0fbe926670b033cfd37334b44)