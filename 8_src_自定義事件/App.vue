<template>
    <div class="app">
        <h2 >我是app組件</h2>
        <!-- 
            如下代碼是給Demo的組件實例對象，定義了一個haha事件。
            只要Demo組件實例對象觸發了haha事件，那麼就會調用test函數。 
        -->
        <!-- 自訂義事件的第一種方式 : 給Demo組件實例綁定自訂義事件 : haha -->
        <!-- <Demo @haha="test"/> -->
        <!-- 自訂義事件的第二種方式 : 給Demo組件實例綁定自訂義事件:  haha  -->
        <Demo ref="demo" />
    </div>
</template>

<script>
import Demo from './components/Demo'

export default {
    name:'App',
    components:{Demo,},
    methods:{
        test(x){
            console.log('收到了數據:',x)
        }
    },
    mounted(){
        this.$refs.demo.$on('haha',this.test)
    }
}
</script>

<style>
    .app{
        background-color: gray;
        padding:10px;
    }
</style>