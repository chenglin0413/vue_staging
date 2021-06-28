<template>
  <div class="c">
      <h2>當前求和為: {{sum}}</h2>
      <h4>vuex中的人名是:{{name}}</h4>
      <h2>當前求和經過處理之後為: {{bigSum}}</h2>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>&nbsp;
      <button @click="increment(n)">+</button>&nbsp;
      <button @click="decrement(n)">-</button>&nbsp;
      <button  @click="jiaOdd(n)">奇數再加</button>&nbsp;
      <button  @click="jiaAsync(n)">異步加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'

export default {
    name:'Count',
    data(){
        return{
            n:1,//n是用戶選擇的數字
        }
    },
    mounted(){
        const x = mapState({sum:'sum'})
        console.log(x)
    },
    computed:{
        
        //自己寫計算屬性
        //定義sum,值來自於state中的sum
        // sum(){
        //    return this.$store.state.sum
        // },

        //靠mapState生成計算屬性
        // ...mapState({
        //     sum :'sum',
        //     ming :'name',
        // })
        
        /* ***************************** */
        //自己寫計算屬性
        // sum(){
        //     return this.$store.state.sum            
        // },
        // name(){
        //     return this.$store.state.name            
        // }

        //靠mapState生成計算屬性(精簡寫法)
        ...mapState(['sum','name']),

        /* ***************************** */
        //自己寫計算屬性
        //定義bigSum, 值來自於getters中的bigSum
        // bigSum(){
        //     return this.$store.getters.bigSum
        // }
        //靠mapGetters生成計算屬性--- 和mapState同理
        ...mapGetters(['bigSum'])

    },
    methods:{
        //靠自己寫increment方法，和mutations中的JIA對話，完成加法
        //靠自己寫decrement方法，和mutations中的JIAN對話，完成減法

        // increment(value){
        //     this.$store.commit('JIA',value)
        // },
        // decrement(value){
        //     this.$store.commit('JIAN',value)
        // },

        //靠mapMutations生成increment函數，和mutations中的JIA對話，完成加
        //靠mapMutations生成decrement函數，和mutations中的JIAN對話，完成減
        ...mapMutations({
            increment:'JIA',
            decrement:'JIAN',
        }),
        //mapMutations 也可以簡寫成一個數組，但必須保證mutations的函數名(大寫)，和組件中，事件的回調同名
        //...mapMutations(['JIA','JIAN'])

        /* *********************************************************************** */
        
        //靠自己寫incrementOdd方法，和actions中的jiaOdd對話，完成奇數加法
        //靠自己寫incrementAsync方法，和actions中的jiaAsync對話，完成異步加法
        // incrementOdd(value){
        //     this.$store.dispatch('jiaOdd',value)
        // },
        // incrementAsync(value){
        //     this.$store.dispatch('jiaAsync',value)
        // },
        

        //靠mapActions生成incrementOdd方法，和actions中的jiaOdd對話，完成奇數加法
        //靠靠mapActions生成incrementAsync方法，和actions中的jiaOdd對話，完成奇數加法
        // ...mapActions({
        //     incrementOdd:'jiaOdd',
        //     incrementAsync:'jiaAsync',
        // })

        //若回調名和actions中的動作名是一致的，則可以簡寫成一個數組
        ...mapActions(['jiaOdd','jiaAsync'])
    }
}
</script>

<style>
    .c{
        background-color: orange;
        padding: 10px;
    }
</style>

