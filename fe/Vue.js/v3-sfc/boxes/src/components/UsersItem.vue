<template>
    <div class="user-item-wrapper">
        <div class="user-item">
            ID: {{ user.id }}, Name: {{ fullName }}
        </div>
    </div>
</template>

<style scoped>

</style>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});

const fullName = computed(() => 
    `${props.user.name.first} ${props.user.name.middle} ${props.user.name.last}`);

</script>