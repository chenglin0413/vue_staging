import Vue from 'vue';
import App from './App.vue';
import store from './Vuex/store'

Vue.config.productionTip = false//關閉生產提示

new Vue({
    el:'#app',
    store,
    render:h => h(App),
})

// console.log('vm',vm)
