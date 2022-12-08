<template>
  <div class="end">
    <footer>
      <p class="footer-text">© Prateek Jha 2022</p>
      <a class="footer-text" href="https://github.com/prtkjha01">Github</a>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  methods: {
    getYear: function () {
      const date = new Date();
      return date.getFullYear.toString;
    },
  },
};
</script>
<style scoped>
.footer-text {
  color: aliceblue;
  text-decoration: none;
}
.end {
  padding-top: 30px;
  height: 100px;
}
</style>
