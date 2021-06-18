<template>
  <ul class="todo-main">
     <Item v-for="t in todos" :key="t.id" :todo="t"/>
     
  </ul>
</template>

<script>
    import Item from '../components/Item'
    export default {
        name:'List',
        components:{Item},
        props:['todos']//聲明接收props,聲明後，可以在vc上找得到
    }
</script>

<style scoped>
        /* main */
    .todo-main{
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }
    .todo-empty{
        height: 40px;
        line-height:40px ;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>