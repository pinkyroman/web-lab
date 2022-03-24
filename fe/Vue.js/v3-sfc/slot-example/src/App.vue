<template>
  <AppCard>
    <template #title>
      HERE COMES THE DARKNESS
    </template>

    <div>
      THIS IS MY OWN CONTENT.
    </div>

    <template #footer="fromChild">
      This is just built for testing purpose (version: {{ fromChild.versionInfo.version }}, release: {{ fromChild.versionInfo.releaseDate }}).
    </template>
  </AppCard>
</template>

<style>

</style>

<script setup>
import AppCard from './components/AppCard.vue';

</script>

