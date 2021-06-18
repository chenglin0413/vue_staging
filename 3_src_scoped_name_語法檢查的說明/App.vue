<template>
  <div>
      <!-- 
          ref的使用方式:
            1. 標籤中直接編寫ref="XXXX"
            2. 通過this.$refs.XXXX獲取
            3. 備註 : 
                1. 若給html內置標籤打ref, 則獲取到的是真實DOM節點
                2. 若給組件標籤打ref, 則獲取到的是組件實例對象。


       -->
      <button ref="btn" @click="showData">點我獲取焦點</button>
      <!-- 給input標籤打了一個ref , input標籤是html內置的標籤，所以通過this.$refs.keyWord獲取到的是真實DOM節點 -->
      <input type="text" ref="keyWord">
      <!-- 給School標籤打了一個ref , School標籤是組件標籤，所以通過this.$refs.xuexiao獲取到的是組件實例 -->
      <School ref="xuexiao" :userName="userName" />

  </div>
</template>

<script>
    
    //引入School組件
    import School from './components/School'
    // import Welcome from './components/Welcome'
    
    
    export default {
        //配置數據
        data(){
            // console.log('School',this)
            return{
                userName:'老劉',
            }
        },
        //註冊組件 -- 局部註冊
        components:{School},
        //配置方法
        methods:{
            showData(){
                // console.log(this.$refs.keyWord.value)
                // console.log(this.$refs.btn.innerText)
                // this.$refs.keyWord.focus()
                console.log(this.$refs.xuexiao)
            }
        }  
    }
</script>

