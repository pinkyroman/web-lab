<template>
    <div class="default-layout">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import AppHeader from '@/layouts/AppHeader.vue'

export default {
    name: 'DefaultLayout',
    components: {
        AppHeader,
    }
}
</script>