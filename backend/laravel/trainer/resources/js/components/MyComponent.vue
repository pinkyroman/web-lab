<template>
    <p class="container">
        My Component
    </p>
</template>

<script>
export default {
    created() {
        console.log('my component created.');
    },
    mounted() {
        let x = [1, 2, 3];
        let y = _.concat(x, [4, 5]);
        console.log('Component mounted: ' + y);
    },
}
</script>

