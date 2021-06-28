<template>
  <div>
    <Header/>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始Html中a實現跳轉頁面 -->
          <!-- <a class="list-group-item active" href="./about">About</a>
          <a class="list-group-item " href="./home">Home</a> -->

          <!-- Vue中使用router-link實現路徑改變 -->
           <router-link class="list-group-item " active-class="active" to="/about">About</router-link>
           <router-link class="list-group-item " active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
           <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: "App",
  components:{Header}
};
</script>

<style >
  .active{
    background-color:gray !important;
    color: orange!important;
    font-weight: bold !important;
  }

</style>