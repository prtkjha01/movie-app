<template>
  <div>
    <h1>{{ msg }}</h1>
    <Header />
    <MovieCont />
  </div>
</template>

<script>
//import Header from './Header.vue';
import MovieCont from './MovieCont.vue';
import Movie from './Movie.vue';
export default {
  name: 'HelloWorld',
  components: {
    Header,
    MovieCont,
    Movie,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
