<template>
  <div class="todo-container">
      <div class="todo-wrap">
          <!-- 頭部 -->
          <Header :addTodo="addTodo"/>
          <!-- 列表 -->
          <List 
          :todos="todos" 
          :updateTodo="updateTodo"
          :deleteTodo="deleteTodo"
          />
          <!-- 底部-->
          <Footer 
          :todos="todos"
          :updateAll="updateAll"
          :clearAll="clearAll"/>
      </div>
  </div>
</template>

<script>
    //引入組件
    import Header from './components/Header'
    import List from './components/List'
    import Footer from './components/Footer'
    export default {
        name:'App',
        components:{Header,List,Footer},//註冊組件
        data(){//數據
            const localData = localStorage.getItem('todos')
            let todos //變數
            try {
                //嘗試解析localStorage中的數據，如有數據，直接使用；無數據，使用空陣列。
                todos = JSON.parse(localData) || []
            } catch (error) {
               alert('localStorage異常，數據以重置')
               localStorage.removeItem('todos')
               todos = []
            }
            return{
                todos,
            }
        },
        methods:{
            //添加一個todo
            addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            //更新一個todo, 用id去更新
            // updateTodo(id,done){
            //     this.todos = this.todos.map((todo)=>{
            //         if(id===todo.id) return {...todo,done}
            //         else return todo
            //     })
            // }
            //更新一個todo, 用index去更新
            updateTodo(index,done){
                this.todos[index].done = done
            },
            //刪除一個todo, 用index去刪除
            deleteTodo(index){
                this.todos.splice(index,1)
            },
            //全選 or 全不選
            updateAll(done){
                this.todos = this.todos.map((todo)=>{
                    return {...todo,done}
                })
            },
            //清除所有已完成
            clearAll(){
                this.todos = this.todos.filter((todoObj)=>{
                    return !todoObj.done 
                })
            }

        },
        watch:{
            todos(value){
                localStorage.setItem('todos',JSON.stringify(value))
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