<template>
  <Header />
  <MovieCont />
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import MovieCont from './components/MovieCont.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    MovieCont,
    Footer,
  },
};
</script>

<style>
body {
  background-color: #1f1f1f;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
