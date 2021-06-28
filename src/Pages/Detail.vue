<template>
  <ul>
      <!-- 獲取params參數 -->
      <li>ID:{{$route.params.id}}</li>
      <li>Title:{{$route.params.title}}</li>
      <li>CONTENT:{{$route.params.content}}</li>
  </ul>
</template>

<script>
    export default {
        name:'Detail',
        mounted(){
            console.log(this)
        }
    }
</script>

<style>

</style>