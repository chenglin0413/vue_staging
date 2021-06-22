import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false//關閉生產提示

new Vue({
    beforeCreate(){
      Vue.prototype.$bus=this  
    },
    el:'#app',
    render:h => h(App),
})

// console.log(vm)
