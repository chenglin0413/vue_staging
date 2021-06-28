import Vue from 'vue'//引入Vue
import Vuex from 'vuex'//引入Vuex

Vue.use(Vuex)//應用插件
// ----> must call Vue.use(Vuex) before creating a store

//初始化狀態,要寫成一個對象，包含n組key-value,因為該state要管理n多個組件的狀態
const state = {
    sum:0,
    name:'老劉'
}

//創建一個actions,值為一個對象，包含 n個響應組件"動作"的函數
const actions = {

    //context是一個mini版的$store, 我要用context.commit()去通知Mutations加工狀態
    // jia(context,value){
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     context.commit('JIAN',value)
    // },
    jiaOdd(context,value){
      if(context.state.sum%2)context.commit('JIA',value)
    },
    jiaAsync(context,value){
        setTimeout(()=>{
            context.commit('JIA',value)
        },500)
    },
    
}
//創建一個mutaions,值為一個對象，包含 n個真正用於加工狀態的函數
const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
}
//getters中配置的是state中的數據，經過加工後的值; 類似於vue中的computed
const getters = {
    bigSum(state){
        return state.sum*100
    }
}
//創建store, 用於管理: state對象，actions對象，mutations對象
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
})

//暴露store
export default store