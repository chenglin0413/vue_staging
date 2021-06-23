<template>
  <div class="row">
    <h2 v-show="listInfo.isFirst">歡迎使用!</h2>
    <h2 v-show="listInfo.isLoading">Loading...</h2>
    <h2 v-show="listInfo.errMsg">{{listInfo.errMsg}}</h2>

    <div v-show="listInfo.users.length" class="card" v-for="userObj in listInfo.users" :key="userObj.id">
      <a :href="userObj.html_url" target="_blank">
        <img :src="userObj.avatar_url" style="width:100px" />
      </a>
      <p class="card-text">{{ userObj.login }}</p>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  name: "List",
  data() {
    return {
        listInfo:{
            users: [],
            isFirst:true,
            isLoading:false,
            errMsg:'',
            token:'',
        }
    };
  },
  methods: {
    saveData(msg,dataObj) {
      console.log('dataObj',dataObj)
      this.listInfo = {...this.listInfo,...dataObj}
    },
  },
  mounted() {
    //組件一掛載，就綁定事件
    // this.$bus.$on("get-list-data", this.saveData);
    
    //組件一掛載，就訂閱消息
    this.token = PubSub.subscribe('get-list-data', this.saveData);
  },
  beforeDestroy(){

    //組件銷毀前，取消綁定事件
    //this.$bus.$off("get-list-data");

    //組件銷毀前，取消訂閱事件
    PubSub.unsubscribe(this.token)
  }
};
</script>

<style>
.album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}
.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}
.cart-text {
  font-size: 85%;
}
</style>
