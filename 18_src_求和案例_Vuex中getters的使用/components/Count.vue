<template>
  <div>
      <h2>當前求和為: {{$store.state.sum}}</h2>
      <h2>當前求和經過處理之後為: {{$store.getters.bigSum}}</h2>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>&nbsp;
      <button @click="increment">+</button>&nbsp;
      <button @click="decrement">-</button>&nbsp;
      <button @click="incrementOdd">奇數再加</button>&nbsp;
      <button @click="incrementAsync">異步加</button>
  </div>
</template>

<script>
export default {
    name:'Count',
    data(){
        return{
            n:1//n是用戶選擇的數字
        }
    },
    // mounted(){
    //     console.log(this.$store)
    // },
    methods:{
        increment(){
            this.$store.dispatch('jia',this.n)
        },
        decrement(){
            this.$store.dispatch('jian',this.n)
        },
        incrementOdd(){
            this.$store.dispatch('jiaOdd',this.n)
        },
        incrementAsync(){
            this.$store.dispatch('jiaAsync',this.n)
        },
     
    }
}
</script>

