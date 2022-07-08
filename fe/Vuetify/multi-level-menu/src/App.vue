<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>My App</v-app-bar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <TheMainMenu />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheMainMenu from './components/TheMainMenu.vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      //
    };
  },
  components: { TheMainMenu },
});
</script>
