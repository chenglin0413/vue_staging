<template>
  <div class="todo-header">
      <input 
      v-model="name" 
      @keyup.enter="add"
      type="text" 
      placeholder="請輸入你的任務名稱，按enter鍵確認">
  </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            name:'',
        }
    },
    methods:{
        add(){
            //校驗數據
            if(!this.name.trim()) return alert('輸入不能為空')
            //根據用戶的輸入生成一個todo對象
            const todoObj = {id:Date.now(),name:this.name,done:false}
            //使用自定義事件去通知App在data中去添加一個todo
            this.$emit('add-todo',todoObj)
            //清空輸入
            this.name = ''
        }
    }
}
</script>

<style scoped>
    /* header */
    .todo-header input{
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }
    .todo-header input:focus{
        outline: none;
        border-color: rgba(82, 168, 236,0.8);
        box-shadow: insert 0 1px 1px rgba(0, 0, 0,0.075), 0 0 8px rgba(82, 169, 236,0.8)
        
    }
</style>