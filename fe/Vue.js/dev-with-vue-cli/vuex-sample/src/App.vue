<template>
  <div id="app">
    <img src="./assets/logo.png" alt="Vue.js">
    <p>{{ message }}</p>
    <EditForm />
  </div>
</template>

<script>
import EditForm from "./components/EditForm.vue"

export default {
  name: 'app',
  components: { 
    EditForm 
  },
  data () {
    return {
      msg: '!! Welcome to Your Vue.js App !!'
    }
  },
  computed: {
    message() {
      return this.$store.getters.message;
    }
  },
  created() {
    console.log(`state = ${this.$store.getters.count}`);
    this.$store.dispatch('incrementCount').then(value => {
      console.log(`then: ${value}`);
    }).catch(value => {
      console.log(`catch: ${value}`);
    }).finally(() => {
      console.log(`state = ${this.$store.getters.count}`);
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
