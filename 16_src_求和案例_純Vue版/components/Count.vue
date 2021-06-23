<template>
  <div>
      <h2>當前求和為: {{sum}}</h2>
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
            sum:0,
            n:1//n是用戶選擇的數字
        }
    },
    methods:{
        increment(){
            this.sum += this.n
        },
        decrement(){
            this.sum -= this.n
        },
        incrementOdd(){
            if(this.sum % 2)this.sum += this.n            
        },
        incrementAsync(){
            setTimeout(()=>{
                //函數體
                this.sum += this.n
            },500)
        },
    }
}
</script>

