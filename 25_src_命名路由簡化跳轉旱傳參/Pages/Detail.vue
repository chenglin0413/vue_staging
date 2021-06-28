<template>
  <ul>
      <!-- 獲取query參數  -->
      <li>ID:{{id}}</li>
      <li>Title:{{title}}</li>
      <li>CONTENT:{{content}}</li>
  </ul>
</template>

<script>
    export default {
        name:'Detail',
        computed:{
            id(){
                return this.$route.params.id
            },
            title(){
                return this.$route.query.title
            },
            content(){
                return this.$route.query.content
            },

        }
    }
</script>

<style>

</style>