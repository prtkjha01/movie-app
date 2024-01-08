<template>
  <div>
    <div class="card movieCard shadow-sm p-3 mb-5 bg-body rounded">
      <div class="container imageContainer">
        <img :src="this.imageUrl" class="card-img-top image" alt="..." />
      </div>
      <div class="card-body">
        <h5 class="card-title cardTitle fw-bold">
          {{ data.original_title.slice(0, 19) }}
          <span v-if="data.original_title.length > 19">....</span>
        </h5>
        <p class="card-text details">
          {{ showMore ? data.overview : data.overview.slice(0, 50) }}
          <span
            style="color: #66ccff; cursor: pointer"
            @click="showMore = !showMore"
            >...see {{ showMore ? "less" : "more" }}</span
          >
        </p>
        <div class="card-body container-fluid">
          <div class="text">Release Date : {{ data.release_date }}</div>
          <div class="text">Imdb : {{ data.vote_average }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Movie",
  data() {
    return {
      imageUrl: `https://image.tmdb.org/t/p/w500/${this.data.poster_path}`,
      showMore: false,
    };
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
.movieCard {
  /* max-height: 500px; */
}
.card {
  margin: 1rem 0rem;
  background-color: rgb(59, 59, 57) !important;
  transition: scale 0.2s;
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
