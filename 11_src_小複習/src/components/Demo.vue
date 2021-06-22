<template>
  <div class="demo">
    <h2 >我是Demo組件</h2>
    <h4>我有一台電腦是，{{computer}}</h4>
    <button @click="sendComp">把電腦傳給父親</button>
  </div>
</template>

<script>
export default {
    name:'Demo',
    data(){
      return{
        computer:'聯想拯救者',
      }
    } ,
    methods:{
      sendComp(){
        this.$emit('ha-ha',this.computer)
      }
    },
    mounted(){
      this.$bus.$on('shui-guo',function(f,a,b,c){
        console.log('Demo收到了',f,a,b,c)
      })
    }
   
}
</script>

<style>
    .demo{
        background-color: orange;
        padding: 5px;
    }
</style>