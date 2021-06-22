import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false//關閉生產提示

// Vue.prototype.p = vm

 new Vue({
     beforeCreate(){
        Vue.prototype.$bus = this //安裝事件總線
     },
    el:'#app',
    render:h => h(App),
})


