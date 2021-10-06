<template>
    <div class="edit-form">
        <!-- <input type="text" :value="message" @input="updateMessage"> -->
        <input v-model="message">
    </div>
</template>

<script>
export default {
    name: "EditForm",
    computed: {
        message: {
            get() { return this.$store.getters.message; },
            set(value) { this.$store.dispatch("updateMessage", value); }
        }
    },
    // methods: {
    //     updateMessage(event) {
    //         this.$store.dispatch("updateMessage", event.target.value);
    //     }
    // }
}
</script>
