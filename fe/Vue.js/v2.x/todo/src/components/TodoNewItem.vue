<template>
    <div class="todo-new-item">
        <label for="subject" class="form-element subject">New To Do:</label>
        <input
            ref="subject"
            type="text"
            class="form-element subject"
            placeholder="할 일의 제목을 입력 하세요 ..."
            v-model="subject"
            @keyup.enter="addNewTodo"
        />
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import { newTodoModel } from "../models/todo";

export default {
    name: "TodoNewItem",
    data() {
        return {
            subject: "",
        };
    },
    methods: {
        ...mapMutations(["addTodo"]),
        addNewTodo() {
            let todo = new newTodoModel();
            todo.subject = this.subject;
            this.addTodo(todo);
            this.subject = "";
        },
    },
};
</script>

<style scoped>
label.subject {
    font-weight: bold;
}

input.subject {
    border: none;
    border-bottom: 2px dotted blue;
    width: 80%;
}

input.subject:hover {
    border: none;
    border-bottom: 2px dotted red;
}

input.subject:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid red;
}

.form-element {
    margin: 4px auto;
    padding: 8px;
}
</style>
