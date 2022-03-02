<template>
    <div id="app">
        <default-layout></default-layout>
    </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
    components: {
        DefaultLayout,
    },
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
