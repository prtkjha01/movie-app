<template>
  <div>
    <div class="card movieCard shadow-sm p-3 mb-5 bg-body rounded">
      <img :src="this.imageUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title cardTitle fw-bold">{{ data.original_title }}</h5>
        <p class="card-text details">{{ data.overview.slice(0, 50) }}<span style="color: #66ccff">...see more</span></p>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item details">Release Date : {{ data.release_date }}</li>
            <li class="list-group-item details">Imdb : {{ data.vote_average }}</li>
            <li class="list-group-item details">
              <div class="bg-danger rounded">{{ status.value === false ? 'not watched' : 'watched' }}</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="card-body ottIcons">
        <a href="#" class="card-link"><img src="../assets/netflix.png" /></a>
        <a href="#" class="card-link"><img src="../assets/prime.png" height="40px" width="40px" /></a>
      </div>
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
    data: Object,
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
.card:hover {
  background-color: #808080 !important;
}
.card-body:hover {
  background-color: #808080 !important;
}
.list-group-item:hover {
  background-color: #808080 !important;
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
.ottIcons {
  display: flex;
  justify-content: space-around;
}
/* .bg {
  background-color: rgb(59, 59, 57);
} */
.not-watched {
  background-color: red;
  border-radius: 0.5rem;
  /* position: absolute; */
}
</style>
