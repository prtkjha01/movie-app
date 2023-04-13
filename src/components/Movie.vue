<template>
  <div>
    <div class="card movieCard shadow-sm p-3 mb-5 bg-body rounded">
      <div class="container imageContainer">
        <img :src="this.imageUrl" class="card-img-top image" alt="..." />
      </div>
      <div class="card-body">
        <h5 class="card-title cardTitle fw-bold">{{ data.original_title }}</h5>
        <p class="card-text details">{{ data.overview.slice(0, 50) }}<span style="color: #66ccff">...see more</span></p>
        <div class="card-body container-fluid">
          <!-- <ul class="list-group list-group-flush"> -->
          <div class="text">Release Date : {{ data.release_date }}</div>
          <div class="text">Imdb : {{ data.vote_average }}</div>
          <div class="text">
            <div class="bg-danger rounded">{{ status.value === false ? 'not watched' : 'watch now' }}</div>
          </div>
          <!-- </ul> -->
        </div>
      </div>

      <!-- <div class="card-body ottIcons">
        <a href="#" class="card-link"><img src="../assets/netflix.png" height="36px" width="36px" /></a>
        <a href="#" class="card-link"><img src="../assets/prime.png" height="40px" width="40px" /></a>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Movie',
  data() {
    return { imageUrl: `https://image.tmdb.org/t/p/w500/${this.data.poster_path}` };
  },
  props: {
    status: Object,
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    title: String,
  },
};
</script>
<style scoped>
ul:hover {
  background-color: #808080 !important;
}
.card {
  margin: 1rem 0rem;
  background-color: rgb(59, 59, 57) !important;
}
.imageContainer {
  padding: 0 !important;
}
.image {
  height: 300px;
  width: inherit;
}
.card:hover {
  background-color: #808080 !important;
  scale: 1.1;
  z-index: 1;
}
.card-body:hover {
  background-color: #808080 !important;
}
.list-group-item:hover {
  background-color: #808080 !important;
}
.text {
  color: aliceblue;
  font-size: small;
}
.cardTitle {
  color: aliceblue;
}
.list-group-item {
  background-color: rgb(59, 59, 57);
}
.details {
  font-size: small;
  color: aliceblue;
}
.ottIcons {
  padding: 0;
  display: flex;
  justify-content: space-around;
}
/* .bg {
  background-color: rgb(59, 59, 57);
} */
.netflix {
  padding: 8px;
}
.not-watched {
  background-color: red;
  border-radius: 0.5rem;
  /* position: absolute; */
}
</style>
