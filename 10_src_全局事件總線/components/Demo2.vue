<template>
  <div class="demo2">
      <h2>我是Demo2組件</h2>
      <button @click="sendData">給Demo1傳遞數據</button>
  </div>
</template>

<script>
export default {
    name:'Demo2',
    mounted(){
        console.log(this.$bus)
        // this.$bus.$on('haha',this.test2)
    },
    methods:{
        sendData(){
            //觸發全局的nice事件
            this.$bus.$emit('nice','老劉')
        },
        // test2(x){
        //      console.log('Demo2收到了數據:',x)
        // }
    },
    
}
</script>

<style>
    .demo2{
        background-color: skyblue;
        padding: 10px;
    }
</style>
