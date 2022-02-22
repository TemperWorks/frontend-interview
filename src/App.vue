<template>
  <PostsDashboard />
</template>

<script>
import PostsDashboard from "./modules/PostsDashboard.vue";

export default {
  name: "App",
  components: {
    PostsDashboard
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(245, 245, 245);
  height: 100vh;
}
</style>
