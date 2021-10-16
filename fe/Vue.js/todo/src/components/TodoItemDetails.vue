<template>
    <div class="todo-details">
        <textarea
            ref="description"
            v-model="currentState(id).description"
            :readonly="!editing"
            @input="resize"
            @click.stop="toggleEditingMode"
            @focusout="toggleEditingMode"
        ></textarea>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "TodoItemDetails",
    props: {
        id: {
            type: String,
            required: true,
            default: null,
        },
    },
    data() {
        return {
            editing: false,
        };
    },
    computed: {
        ...mapGetters({
            currentState: "getTodo",
        }),
    },
    methods: {
        ...mapActions(["updateTodo"]),
        toggleEditingMode() {
            this.editing = !this.editing;
        },
        resize() {
            // https://www.geeksforgeeks.org/how-to-create-auto-resize-textarea-using-javascript-jquery/
            let el = this.$refs.description;
            let style = el.style;
            style.height = "auto";
            style.height = el.scrollHeight + "px";
        },
    },
};
</script>

<style scoped>
textarea {
    display: block;
    overflow: hidden;
    width: 98%;
    resize: none;
    border: 1px solid rgb(107, 110, 255);
    margin: 4px;
}

textarea:read-only {
    background-color: rgb(190, 218, 255);
}
</style>
