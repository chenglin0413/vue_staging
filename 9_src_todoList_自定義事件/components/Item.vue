<template>
    <li 
        @mouseenter="isEnter = true"
        @mouseleave="isEnter = false"
        :class="{'high-light':isEnter}"
        
    >
        <label >
            <input type="checkbox" :checked="todo.done" @click="update(index,$event)"/>
            <span>{{todo.name}}</span>
        </label>
        <button 
            class="btn btn-danger" 
            :style="{display:isEnter ? 'block':'none' }"
            @click="deleteT(index)"
        >刪除</button>
    </li>
</template>

<script>
export default {
    name:'Item',
    props:['todo','updateTodo','deleteTodo','index'],
    data(){
        return{
            isEnter:false //標示鼠標是否移入
        }
    },
    methods:{
        //用id去更新
        // update(id,event){
        //     console.log(id,event.target.checked)
        //     //通知App去更新這個todo
        //     const{checked} = event.target
        //     this.upadateTodo(id,checked)
        // }
        //用index去更新
        update(index,event){
            console.log(index,event.target.checked)
            //通知App去更新這個todo
            const{checked} = event.target
            this.updateTodo(index,checked)
        },
        deleteT(index){ 
            if(confirm('確定刪除嗎?'))
            this.deleteTodo(index)
        }
    }
}
</script>

<style scoped>
    li{
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label{
        float: left;
        cursor: pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
    li button{
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before{
        content: initial;
    }
    li:last-child{
        border-bottom: none;
    }
    .high-light{
        background-color: #ddd;
    }
</style>