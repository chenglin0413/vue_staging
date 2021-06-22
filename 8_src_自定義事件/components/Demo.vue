<template>
  <div class="demo">
    <h2 >我是Demo組件</h2>
    <button @click="sendData">點我給app傳遞數據</button>
  </div>
</template>

<script>
export default {
    name:'Demo',
    data(){
        return{
            name:'老劉',
        }
    },
    methods:{
        sendData(){
          this.$emit('haha',this.name)
        }
    }
}
</script>

<style>
    .demo{
        background-color: skyblue;
        padding: 5px;
    }
</style>