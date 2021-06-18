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