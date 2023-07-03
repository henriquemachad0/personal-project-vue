<template>
  <div id="nav">
    <span>Catálogo</span>
  </div>
  <router-view />
</template>

<script>

import { mapState } from 'vuex'

export default {
  created() {
    this.$store.dispatch('loadProducts')
  },
  computed:
    mapState([
      // 'products'
    ])
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 80px auto;
}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(23, 45, 105);
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
}
</style>
