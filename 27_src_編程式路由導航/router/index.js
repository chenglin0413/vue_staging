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
                            // path:'detail/:id/:title/:content',//聲明接收params參數
                            // path:'detail',//query參數無須聲明即可接收
                            path:'detail/:id',//同時接收params和query，要先聲明params
                            component:Detail,
                            name:'xiangqing',

                            // props :{carName :'馬自達。阿特茲'} //通過props映射自定義的靜態數據 
                            // props:true,//映射params參數為props傳給路由組件
                            props(route){//此處接收到的route是vc或vm身上的$route
                                    // console.log(route)
                                    const{ id } = route.params
                                    const{ title,content } = route.query
                                    return{id,title,content}
                                }
                                                 
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