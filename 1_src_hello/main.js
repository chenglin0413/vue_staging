import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false//關閉生產提示

/*
 vue.runtime.common.js和vue.js有何區別?
    vue.runtime.common.js  (項目中用的多) :
      1. 不包含模板解析器，打包後體積小
      2. 配置項中的不能寫template,要用render :h => h(App)代替
    vue.js :
      1. 包含模板解析器，打包後體積很大
      2. 配置可以寫template  
*/

new Vue({
  el:'#app',
  render: h => h(App),

  // components:{App},
  // template:`<App/>`
})
