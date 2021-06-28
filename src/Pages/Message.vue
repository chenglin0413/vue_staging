<template>
    <div>
        <ul>
            <li v-for="msg in messageArr" :key="msg.id">
                <!-- 切換路徑時，攜帶params參數 -->
                <router-link :to="`/home/message/detail/${msg.id}/${msg.title}/${msg.content}`">{{msg.title}}</router-link>&nbsp;&nbsp;
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Message',
        data(){
            return{
                messageArr:[
                    {id:'001',title:'消息1',content:'抽菸'},
                    {id:'002',title:'消息2',content:'愛喝酒'},
                    {id:'003',title:'消息3',content:'愛燙頭'},
                ]
            }
        }
    }
</script>

<style>

</style>