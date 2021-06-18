<template>
    <div>
        <h2 class="name">學校名字:{{name}}</h2>
        <h2 class="address">學校地址:{{address}}</h2>
        <h4>我收到的名字是{{userName}}</h4>
    </div>
</template>

<script>
export default {
    //配置數據
    data(){
        console.log('School',this)
        return{
            name:'上矽谷',
            address:'台北市基隆路',
        }
    },
    //聲明接收props --- 最完整寫法, 限制了類型，控制了必要性，指定了預設值
    /*props:{
        userName:{
            type:String,//類型
            required:true,//必要性
            default:'隔壁老王',//預設值
        }
    }*/
    //聲明接收props --- 次完整寫法, 限制了類型
    /*props:{
        userName:String
    }*/

    //聲明接收props --- 精簡的寫法, 限制了類型
    props:['userName']
}
</script>

<style>
    .name{
        background-color: gray;
    }
    .address{
        background-color:orange;
    }
</style>