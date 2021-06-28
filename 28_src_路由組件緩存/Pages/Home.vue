<template>
    <div>
      <h2>我是Home的內容</h2>
      <div>
          <ul class="nav nav-tabs">
              <li>
                  <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
              </li>
              <li>
                  <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
              </li>
          </ul>
          <!-- keep-alive 可以讓路由組件切換時，不銷毀， include配置的是組件本身的名 -->
          <keep-alive include="News">
              <router-view></router-view>      
          </keep-alive>
      </div>
  </div>
</template>

<script>

export default {
    name:'Home',
}
</script>

<style>

</style>