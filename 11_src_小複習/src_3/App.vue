<template>
  <div class="todo-container">
      <div class="todo-wrap">
          <Header @add-todo="addT"/>
          <List :todos="todos" :updateT="updateT"/>
      </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'

export default {
    name:'App',
   components:{Header,List},
   data(){
       return{
           todos:[
               {id:'001',name:'抽菸',done:true},
               {id:'002',name:'喝酒',done:false},
               {id:'003',name:'燙頭',done:true},
           ]
       }
   },
   methods:{
       updateT(index,done){
           this.todos[index].done = done
       },
       addT(todoObj){
           this.todos.unshift(todoObj)
       }
   },
   watch:{
       todos:{
           deep:true,
           handler(value){
               console.log(value)
           }
       }
   }
}
</script>

<style>
     /* base */
    body{
        background-color: #fff;
    }

    .btn{
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px rgba(255, 255, 255,0.2), 0 1px 2px rgba(0, 0, 0,0.5);
        border-radius: 4px;
    }
    .btn-danger{
        color: #fff;
        background-color: #da4f49;
    }
    .btn-danger:hover{
        color: #fff;
        background-color: #bd362f;
    }
    .btn:focus{
        outline: none;
    }

    .todo-container{
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap{
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }  
</style>