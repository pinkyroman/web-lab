<template>
    <v-app id="app">
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <app-header></app-header>
            </div>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col>
                        <todo-list></todo-list>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AppHeader from "./layouts/AppHeader.vue";
import TodoList from "./views/TodoList.vue";

export default {
    name: "App",

    components: {
        AppHeader,
        TodoList,
    },

    data: () => ({
        //
    }),
};
</script>
