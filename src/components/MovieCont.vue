<template>
  <div class="MoviesContainer container">
    <div class="row">
      <Movie
        class="col-lg-3"
        v-for="movie in movies"
        :key="movie.id"
        :status="{ value: false }"
        :data="movie"
        :index="movie"
      />
    </div>
  </div>
</template>

<script>
import Movie from './Movie.vue';
import axios from 'axios';
export default {
  name: 'MovieCont',
  components: {
    Movie,
  },

  data() {
    return {
      movies: [],
    };
  },
  async mounted() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4bcb539f5521b73828aa4c05d8e2a421').then((data) => {
      this.movies = data.data.results;
    });
  },
};
</script>
<style scoped></style>
