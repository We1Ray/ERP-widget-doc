---
sidebar_label: Excel匯入
---
![system-button](/img/BtnExcelImport.png)

## 參數
```typescript
    disableFilter?: () => Promise<boolean>  //給查詢按鈕是否可使用的布林值
    importData: (data, wb) => void | Promise<(data, wb) => void>
    style?: JSON
    childObject?: HTMLElement
```
### disableFilter
  設定刪除按鈕是否可使用的boolean
  ```javascript
  async function deleteDisable() {
        return true
  }
 <BtnExcelImport 
    disableFilter={deleteDisable} 
 />
  ```
### importData(必填)
  設定刪除按鈕是否可使用的boolean
  ```javascript
  async function excel(excelData, sheets) {
        try {
            await Swal.fire({
                title: localization['Warning'],
                text: localization['ConfirmImortData'] + '?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: localization['Yes'],
                cancelButtonText: localization['No']
            }).then(alert => {
                if (alert.isConfirmed) {
                    let insertData = []
                    for (let i = 0; i < excelData.length; i++) {
                        for (let j = 0; j < excelData[i].length; j++) {
                            insertData.push(
                                {
                                    ACCESS_TOKEN: System.token,
                                    LANGUAGE: String(getValue(excelData[i][j][0])),
                                    SOURCE: String(getValue(excelData[i][j][1])),
                                    WORD: String(getValue(excelData[i][j][2])),
                                    DISPLAY: String(getValue(excelData[i][j][3]))
                                }
                            )
                        }
                    }
                    CallApi.ExecuteApi(System.factory.name, System.factory.ip + '/languagelocalisation/create_languagelocalisation', insertData)
                        .then((res) => {
                            if (res.status === 200) {
                                Swal.fire({
                                    title: localization['Success'],
                                    text: localization['CreateSuccess'],
                                    icon: 'success',
                                    confirmButtonText: localization['Yes'],
                                }).then(alert => {
                                    send(STATUS.QUERY)
                                })
                            } else {
                                swal(localization['Fail'], localization['CreateFail'], "error")
                            }
                        }).catch((error) => {
                            console.log(error)
                            swal(localization['Fail'], localization['CreateFail'], "error")
                        })
                } else {
                    swal(localization['Cancel'], localization['CancelImport'], "warning")
                }
            })
        } catch (e) {
            console.log('error:', e)
            swal(localization['Fail'], localization['CreateFail'], "error")
        }
    }
 <BtnExcelImport 
   importData={(data, sheets) => excel(data, sheets)}
 />
  ```
### style
*查看 [BtnQuery](BtnQuery).[style](BtnQuery#style)*
### childObject
*查看 [BtnQuery](BtnQuery).[childObject](BtnQuery#childObject)*