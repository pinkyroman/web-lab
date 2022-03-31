<template>
    <div class="app-card">
        <div class="app-title">
            <slot name="title">UNTITLED CARD</slot>            
        </div>
        <div class="app-card-content">
            <slot>NO CONTENT YET</slot>
        </div>
        <div class="app-card-footer">
            <slot name="footer" :versionInfo="versionInfo">NO FOOTER YET</slot>
        </div>
    </div>
</template>

<style scoped>
.app-card {
    border: 1px solid blue;
    border-radius: 0.5rem;
}
.app-title {
    margin: 8px 16px;    
    border-bottom: 1px dotted blueviolet;
    font-size: 1.5em;
}
.app-card-content {
    margin: 8px 16px;
    border-bottom: 1px dotted blueviolet;
}
.app-card-footer {    
    margin: 8px 16px;
    font-size: 0.75em;
}
</style>

<script setup>
import { reactive } from 'vue';

const versionInfo = reactive({
    version: '1.0.0',
    releaseDate: '2020-01-01',
});
</script>