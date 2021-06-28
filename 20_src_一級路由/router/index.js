/* 該文件是Vue中，路由器的文件，路由器管理者所有路由*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Pages/Home'
import About from '../Pages/About'
Vue.use(VueRouter)

//創建一個路由器，管理所有的路由
const router = new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/about',
            component:About,
        },
    ]
})

//暴露路由器
export default router