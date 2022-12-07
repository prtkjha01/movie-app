<template>
  <div class="card movieCard shadow-sm p-3 mb-5 bg-body rounded">
    <img :src="this.imageUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title cardTitle fw-bold">{{ data.original_title }}</h5>
      <p class="card-text">
        {{ data.Plot }}
      </p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item details">Release Date : {{ data.release_date }}</li>
        <li class="list-group-item details">Imdb : {{ data.vote_average }}</li>
        <li class="list-group-item details">
          <div class="not-watched">{{ status.value === false ? 'not watched' : 'watched' }}</div>
        </li>
      </ul>
    </div>

    <div class="card-body">
      <a href="#" class="card-link"><img src="../assets/netflix.png" /></a>
      <a href="#" class="card-link"><img src="../assets/prime.png" height="40px" width="40px" /></a>
    </div>
  </div>
</template>
<script>
const status = 'not watched';
export default {
  name: 'Movie',
  data() {
    return { imageUrl: `https://image.tmdb.org/t/p/w500/${this.data.poster_path}` };
  },
  props: {
    status: Object,
    data: Object,
    title: String,
  },
};
</script>
<style scoped>
.card {
  margin: 1rem 3.43rem;
  background-color: rgb(59, 59, 57) !important;
}
.cardTitle {
  color: aliceblue;
}
.list-group-item {
  background-color: rgb(59, 59, 57);
}
.details {
  color: aliceblue;
}
/* .bg {
  background-color: rgb(59, 59, 57);
} */
.not-watched {
  background-color: red;
  border-radius: 0.5rem;
}
</style>
