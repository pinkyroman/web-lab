<template>
  <div class="app-header">
    <div class="app-header-title">{{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'Untitled',
    },
});
</script>