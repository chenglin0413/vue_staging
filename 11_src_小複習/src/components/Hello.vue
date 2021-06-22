<template>
  <div class="food">
      <h3>我是Hello</h3>
      <h4>我有一個水果:{{food}}</h4>
      <button @click="sendFood">點我給Demo傳遞食物</button>
  </div>
</template>

<script>
export default {
    name:'Hello',
    data(){
        return{
            food:'蘋果',
        }
    },
    methods:{
        sendFood(){
            this.$bus.$emit('shui-guo',this.food,'老劉',18,'女')
        }
    }
}
</script>

<style>
    .food{
        background-color: skyblue;
        padding:5px;
    }
</style>