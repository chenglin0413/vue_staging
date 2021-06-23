<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          v-model="keyWord"
          type="text"
          placeholder="enter the name your search"
        />&nbsp;
        <button @click="search">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Search",
        data() {
            return {
            keyWord: "",
            };
        },
        methods: {
            async search(){
                //請求之前通知List更新他的data
                this.$bus.$emit('get-list-users',{isFirst:false,isLoading:true})
                try {
                    //發送請求
                    const response = await axios.get('https://api.github.com/search/users',{params:{q:this.keyWord}})
                    const {items} = response.data
                    //請求成功後，通知List組件更新他的data
                    this.$bus.$emit('get-list-users',{isLoading:false,users:items,errMsg:''})
                } catch (error) {
                    //請求失敗後，通知List組件更新他的data
                    this.$bus.$emit('get-list-users',{isLoading:false,users:[],errMsg:error.message})

                }
                
            },
        },
    };
</script>

<style></style>
