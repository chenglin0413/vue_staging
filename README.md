## 1. Vue 腳手架說明
### 1.1 文件結構分析
    | -- node_module
    | -- public
        | -- index.html : 主頁面文件
    | -- src
        | -- main.js :應用入口js
    | -- babel.config.js : babel的配置文件
    | -- vue.config.js : vue的配置文件，需要手動添加
    | -- .gitignore : git 版本管制忽略的配置
    | -- package.json :應用包配置文件
    | -- README.md : 應用描述說明的readme文件
### 1.2 關於h函數說明
    vue.runtime.common.js和vue.js有何區別?
    vue.runtime.common.js  (項目中用的多) :
      1. 不包含模板解析器，打包後體積小
      2. 配置項中的不能寫template,要用render :h => h(App)代替
    vue.js :
      1. 包含模板解析器，打包後體積很大
      2. 配置可以寫template  

## 2.ref與props
### 2.1.ref的用法:
     1. 給組件標籤指定ref :<Demo ref="xxxx"/> , 獲取到的是組件實例對象vc 
     2. 給html標籤指定ref :<input ref="xxxx/> , 獲取到的是真實DOM節點
     3. 通過this.$refs獲取
### 2.2.props的用法:
    1. 傳遞props : <Demo :a="xxxx" />
    2. Demo組件中，聲明接受:
        第一種方式(只聲明) : 
        props:['userName']

        第二種方式(限制類型):
        props:{
            userName:Number
        }
        
        第三種方式(限制類型、屬性、指定預設值)
        props:{
            userName:{
                type:String,
                required:true,
                default:'老王',
            }
        }

## 3.todoList 案例
    (1).組件data中的數據、接到props、methods中的方法、computed中的屬性，都在vc對象上。
    (2).<input v-model="X" @click="demo"/> 會先執行demo函數，再維護x的值
    (3).使用計算屬性時，只是讀取用get, 修改記得要用set
    (4).methods、computed、watch並沒有嚴格義義上的界定，視具體功能而定，有時用甚麼都可以實現。

## 4. SessionStorage 與 localStorage
    (1).cookie, SessionStorage, LocalStorage , 這三者都可以被用來再瀏覽器端存儲數據，而且都是字符串類型的鍵值對!
    (2).注意 : session和SessionStorage不是同一個概念。
        在服務端有一種存儲方式叫做: session會話存儲，常常被簡稱session
        SessionStorage,LocalStorage都是瀏覽器本地存儲，統稱為Web Storage
    (3).存儲內容大小一般支持5-10MB
    (4).瀏覽器端通過 Windows.sessionStorage 和Windows.localStorage 屬性來實現本地存儲機制。
    (5). 相關API:   
        1. localStorage.setItem('key','value');
            該方法接受一個鍵名和值作為參數，將會把鍵值組添加到存儲中，如果鍵名存在，則更新其對應的值。

        2. var data = xxxxStroage.getItem('person');
            該方法接受一個鍵名作為參數，並把該鍵名從存儲中刪除。
        
        3.xxxxStorage.removeItem('key');
            該方法接受一個鍵名作為參數，並把該鍵名從存儲中刪除。

        4. xxxxStorage.clear()
            調用該方法會清空儲存中的所有鍵名。
    備註 : SessionStorage存儲的內容會隨著瀏覽器窗口關閉而消失。
           LocalStorage存儲的內容，需要手動進行清除才會消失。
           xxxxStroage.getItem(xxx)如果xxx對應的value獲取不到，那麼getItem的返回值是null
           JSON.parse(null)的結果依然是null
      
