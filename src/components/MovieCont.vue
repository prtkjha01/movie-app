<template>
  <div class="filterButton container">
    <form class="d-flex mx-2 searchBar rounded" role="search">
      <input
        class="form-control me-2"
        :value="searchQuery"
        @keyup="(e) => getSearchQuery(e, e.target.value)"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn" type="button" @click="searchMovie(movieData, searchQuery)">
        <img src="../assets/search.png" class="searchButton" />
      </button>
    </form>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Filter By
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" @click="filterByImdb(movieData, 7.5)" href="#">Imdb</a></li>
        <li><a class="dropdown-item" @click="filterByGenre(movieData, 80)" href="#">genre</a></li>
      </ul>
    </div>
  </div>

  <div class="MoviesContainer container">
    <div class="row">
      <Movie
        class="col-lg-3 col-md-4 col-sm-6"
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
      movieData: [],
      num: 10,
      searchQuery: '',
    };
  },
  async mounted() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4bcb539f5521b73828aa4c05d8e2a421').then((data) => {
      this.movieData = data.data.results;
      this.movies = this.movieData;
    });
  },
  computed: {
    filterByImdb() {
      return (value, filterParam) => {
        let filteredMovies = [];
        for (var i = 0; i < value.length; i++) {
          if (value[i].vote_average > filterParam) filteredMovies.push(value[i]);
        }
        console.log(this.movies);

        this.movies = filteredMovies;
        this.tempMovies = this.movies;
      };
    },
    filterByGenre() {
      return (value, filterParam) => {
        let filteredMovies = [];
        for (var i = 0; i < value.length; i++) {
          if (value[i].genre_ids[0] === filterParam) filteredMovies.push(value[i]);
        }

        this.movies = filteredMovies;
      };
    },
    getSearchQuery() {
      return (key, query) => {
        console.log(query);
        this.searchQuery = query;

        this.searchMovie(key, this.movieData, query);
      };
    },
    searchMovie() {
      return (key, data, query) => {
        console.log(key);
        console.log('searchQuery() triggered with ', data, query);
        let searchedMovie = [];
        query = query.toLowerCase();
        if (key.keyCode === 8) {
          for (var i = 0; i < data.length; i++) {
            if (data[i].original_title.toLowerCase().includes(query)) {
              console.log('backSpace Pressed');
              searchedMovie.push(data[i]);
              this.movies = searchedMovie;
            }
          }
        } else {
          for (var i = 0; i < data.length; i++) {
            if (data[i].original_title.toLowerCase().includes(query)) {
              console.log('matched');
              searchedMovie.push(data[i]);
              this.movies = searchedMovie;
            }
          }
        }

        console.log(searchedMovie);
      };
    },
  },
};
</script>
<style scoped>
.filterButton {
  display: flex;
  justify-content: end;
}
.searchBar {
  background-color: #fff;
}
.searchButton {
  height: 16px;
  width: 16px;
}
</style>
