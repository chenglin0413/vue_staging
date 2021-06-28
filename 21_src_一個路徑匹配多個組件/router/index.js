/* 該文件是Vue中，路由器的文件，路由器管理者所有路由*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Pages/Home'
// import Home2 from '../Pages/Home2'
import About from '../Pages/About'
Vue.use(VueRouter)

//創建一個路由器，管理所有的路由
const router = new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home

            //如果home路徑需要匹配多個組件，要配置components, 且要寫成對象
            // components:{
            //     h1:Home,
            //     h2:Home2,
            // }
        },
        {
            path:'/about',
            component:About,
        },
    ]
})

//暴露路由器
export default router