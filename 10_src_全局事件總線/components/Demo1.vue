<template>
  <div class="demo1">
      <h2>我是Demo1組件</h2>
      <!-- <button @click="faSong">點我給Demo2傳遞數據</button> -->
      <h3>收到的name是 :{{name}}</h3>
  </div>
</template>

<script>
export default {
    name:'Demo1',
    data(){
        return{
            name:'',
        }
    },
    methods:{
        test1(x){
            console.log('Demo1收到了數據:',x)
            this.name = x
        },
        // faSong(){
        //     this.$bus.$emit('haha','老張')
        // }   
    },
    mounted(){
        this.$bus.$on('nice',this.test1)
    },
    beforeDestroy(){
        this.$bus.$off('nice')
    }
}
</script>

<style>
    .demo1{
        background-color: gray;
        padding: 5px;
    }
</style>
