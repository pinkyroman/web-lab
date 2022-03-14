<template>
  <div class="app-nav-item" @click="onClicked">
    {{ value.title }}
  </div>
</template>

<style scoped>

</style>

<script setup>
import { inject } from 'vue';

const props = defineProps({
    value: {
        type: Object,
        default: () => ({}),
    },
});

const selectedItem = inject('selectedItem');

const onClicked = () => {
    selectedItem.value = props.value;
};
</script>