<template>
  <div> 
    <h1 class="welcome">歡迎學習前端最火的框架Vue</h1>
    <HelloWorld/>
  </div>
</template>

<script>
  //引入App外殼組件
  import HelloWorld from './components/HelloWorld.vue'
  export default {
    components:{HelloWorld}
  }
</script>

<style>
  .welcome{
    background-color: gray;
  }
</style>