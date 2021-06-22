<template>
  <div class="app">
      <h2>我是App組件</h2>
      <Demo1/>
      <Demo2/>
  </div>
</template>

<script>
import Demo1 from './components/Demo1'
import Demo2 from './components/Demo2'
export default {
  components: { Demo1,Demo2 },
    name:'App',

}
</script>

<style>
    .app{
        background-color:rgb(241, 193, 104);
        padding: 10px;
    }
</style>