<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <image-card image-src="cat1.png" heading="Striped Tiger Cat" text="Image by @anonymous"></image-card>
    <image-card image-src="cat2.jpg" heading="Ragdoll Cat" text="Image by @alternative"></image-card>
  </div>
</template>

<script>
import ImageCard from './components/ImageCard.vue'

export default {
  name: 'App',
  components: {
    ImageCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
