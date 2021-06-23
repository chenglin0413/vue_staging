import Vue from 'vue';
import VueResource from 'vue-resource'
import App from './App.vue';

Vue.config.productionTip = false//關閉生產提示
Vue.use(VueResource)

const vm = new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this // 安裝全局事件總線
    },
    el:'#app',
    render:h => h(App),
})

console.log('vm',vm)
