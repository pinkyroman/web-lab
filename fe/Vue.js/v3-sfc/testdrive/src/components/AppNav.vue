<template>
  <div class="app-nav">
    <div class="app-nav-container">
      <div class="app-nav-items" v-for="item in items" :key="item.title">
        <AppNavItem
          :value="item"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script setup>
import { provide, ref, watchEffect } from 'vue';
import AppNavItem from './AppNavItem.vue';

defineProps({
    items: {
        type: Array,
        default: () => [],
    },
});

const selectedItem = ref('');
provide('selectedItem', selectedItem);

const emits = defineEmits([
    'selected',
]);

watchEffect(() => {
  emits('selected', selectedItem.value);
});
</script>