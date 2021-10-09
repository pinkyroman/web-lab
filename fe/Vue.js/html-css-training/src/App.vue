<template>
    <div id="app">
        <div>
            <img alt="Vue logo" src="./assets/logo.png" />
            <h1>HTML/CSS/Vue.js Training</h1>
        </div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    mounted() {
        // console.log(this.$router.options.routes);
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
}
</style>

<style scoped>
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
