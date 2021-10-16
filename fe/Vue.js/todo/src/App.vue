<template>
    <div class="app-layout">
        <div class="header">
            <app-header></app-header>
        </div>
        <div class="app-content">
            <todo-list></todo-list>
        </div>
    </div>
</template>

<script>
import AppHeader from './layouts/AppHeader.vue'
import TodoList from './views/TodoList.vue'
import { store } from './store/store'

export default {
    name: 'App',
    components: {
        AppHeader,
        TodoList
    },
    store,
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
