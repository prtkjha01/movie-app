<template>
  <div class="container">
    <div class="row">
      <div class="my-1 col-lg-10 col-md-9 col-sm-8 col-7">
        <form class="d-flex searchBar rounded" role="search">
          <input
            class="form-control me-2"
            :value="searchQuery"
            @keyup="(e) => getSearchQuery(e, e.target.value)"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn"
            type="button"
            @click="searchMovie(getMovies, searchQuery)"
          >
            <img src="../assets/search.png" class="searchButton" />
          </button>
        </form>
      </div>

      <div class="filterButton my-1 col-lg-2 col-md-3 col-sm-4 col-5">
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-danger filter-button dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter By Imdb
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" @click="filterByImdb(6)" href="#">6</a>
              <a class="dropdown-item" @click="filterByImdb(7)" href="#">7</a>
              <a class="dropdown-item" @click="filterByImdb(8)" href="#">8</a>
              <a class="dropdown-item" @click="filterByImdb(9)" href="#">9</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="MoviesContainer container">
    <div class="row" v-if="!loading">
      <Movie
        class="col-lg-3 col-md-4 col-sm-6"
        v-for="movie in watch"
        :key="movie.id"
        :status="{ value: true }"
        :data="movie"
        :index="movie"
      />
    </div>
    <div v-else style="color: #fff; height: 100px; margin-top: 100px">
      Loading...
    </div>
  </div>
  <button
    class="btn btn-outline-danger mx-2 my-1"
    @click="handlePageUpdate(-1)"
  >
    Prev
  </button>
  <button class="btn btn-outline-danger mx-2 my-1" @click="handlePageUpdate(1)">
    Next
  </button>
</template>

<script>
import Movie from "./Movie.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MovieCont",
  components: {
    Movie,
  },

  data() {
    return {
      movies: [],
      movieData: [],
      searchQuery: "",
      loading: false,
    };
  },
  mounted() {
    if (this.getMovies.length === 0) {
      this.getAllData();
    }
  },

  methods: {
    ...mapActions({
      getApiData: "getApiData",
    }),
    getAllData() {
      this.loading = true;
      this.getApiData()
        .then((res) => {
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
        });
    },
  },
  computed: {
    ...mapGetters({
      getMovies: "getMovies",
    }),
    watch() {
      if (this.movies.length > 0) {
        return this.movies;
      } else {
        return this.getMovies;
      }
    },
    handlePageUpdate() {
      return (param) => {
        //console.log(this.$store.state.page, param);
        if (this.$store.state.page <= 0) this.$store.state.page = 1;
        else {
          this.$store.state.page += param;
          this.getAllData();
        }
      };
    },
    filterByImdb() {
      return (filterParam) => {
        let filteredMovies = [];
        for (var i = 0; i < this.getMovies.length; i++) {
          if (this.getMovies[i].vote_average > filterParam)
            filteredMovies.push(this.getMovies[i]);
        }
        //console.log(this.movies);

        this.movies = filteredMovies;
        // this.tempMovies = this.movies;
      };
    },
    filterByGenre() {
      return (filterParam) => {
        let filteredMovies = [];
        for (var i = 0; i < this.getMovies.length; i++) {
          if (this.getMovies[i].genre_ids[0] === filterParam)
            filteredMovies.push(this.getMovies[i]);
        }

        this.movies = filteredMovies;
      };
    },
    getSearchQuery() {
      return (key, query) => {
        this.searchQuery = query;

        this.searchMovie(key, this.getMovies, query);
      };
    },
    searchMovie() {
      return (key, data, query) => {
        //console.log('searchQuery() triggered with ', data, query);
        let searchedMovie = [];
        query = query.toLowerCase();
        if (key.keyCode === 8) {
          for (var i = 0; i < data.length; i++) {
            if (data[i].original_title.toLowerCase().includes(query)) {
              //console.log('backSpace Pressed');
              searchedMovie.push(data[i]);
              this.movies = searchedMovie;
            }
          }
        } else {
          for (var i = 0; i < data.length; i++) {
            if (data[i].original_title.toLowerCase().includes(query)) {
              //console.log('matched');
              searchedMovie.push(data[i]);
              this.movies = searchedMovie;
            }
          }
        }
      };
    },
  },
};
</script>
<style scoped>
.searchBar {
  background-color: #fff;
}
.searchButton {
  height: 16px;
  width: 16px;
}
.filterButton {
  display: flex;
  justify-content: end;
}
</style>
