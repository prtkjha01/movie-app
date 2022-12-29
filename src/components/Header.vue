<template>
  <div>
    <a href="/"><img class="titleBanner" src="../assets/banner.png" /></a>
  </div>
  <!-- <div class="counter">
    <h3>Page {{ this.$store.state.counter }}</h3>
    <button @click="this.$store.commit('dec')" class="btn btn-outline-light mx-2">-</button>
    <button @click="this.$store.commit('inc')" class="btn btn-outline-light mx-2">+</button>
  </div> -->
</template>

<script>
export default {
  name: 'Header',
};
</script>
<style scoped>
a {
  color: antiquewhite;
  text-decoration: none;
  font-size: xx-large;
}
.titleBanner {
  height: 150px;
}
.counter {
  color: aliceblue;
}
</style>
