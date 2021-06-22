/*
    1. A組件想讓B組件給自己船東西，那麼就要給B組件綁定自定義事件
    2. 自定義鍵的回調在哪，哪才能接受到數據(參考第一點)
    3. 適用於子 ===>父傳遞數據
*/
<template>
    <div class="app">
        <h2 >我是App組件</h2>
        <h4 >我兒子給我的電腦是 : {{diannao}}</h4>
        <Demo @ha-ha="test" />
        <br>
        <Hello @xi-xi="test2"/>
    </div>
</template>

<script>
import Demo from './components/Demo'
import Hello from './components/Hello'

export default {
    name:'App',
    components:{Demo,Hello},
    data(){
        return{
             diannao:'',
        }
    },
    methods:{
        test(x){
            this.diannao = x
        },
        test2(y){
           console.log(y)
        }
    }
    
}
</script>

<style>
    .app{
        background-color: gray;
        padding:10px;
    }
</style>