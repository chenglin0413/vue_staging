<template>
  <div class="app">
    <h2>我是App組件</h2>
    <Count/>
    <br>
    <Person/>
  </div>
</template>

<script>
import Count from './components/Count'
import Person from './components/Person'

export default {
  components: { Count,Person},
    name:'App',

}
</script>

<style>
  .app{
    background-color: skyblue;
    padding: 10px;
  }
</style>