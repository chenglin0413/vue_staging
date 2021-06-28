/* 該文件是Vue中，路由器的文件，路由器管理者所有路由*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Message from '../Pages/Message'
import News from '../Pages/News'
import Detail from '../Pages/Detail'
Vue.use(VueRouter)

//創建一個路由器，管理所有的路由
const router = new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            path:'detail',
                            component:Detail,
                        },
                    ]
                },
                {
                    path:'news',
                    component:News,
                },
            ]
        },
        {
            path:'/about',
            component:About,
        },
    ]
})

//暴露路由器
export default router