<template>
  <div id="app">
    <div style="text-align:center">
      <img src="./assets/logo.png">
      <nav>
        <router-link to="/product">Product</router-link>
      </nav>
      <transition name="view">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.view-enter-active, .view-leave-active {
  transform: opacity 0.5s;
}

.view-leave-active {
  position: absolute;
}

.view-enter, .view-leave-to {
  opacity: 0;
}
</style>
