<template>
  <ul>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
    name:'News',
    mounted(){
      console.log('News組件掛載了')
    },
    beforeDestroy(){
      console.log('News組件銷毀了')
    }
};
</script>


