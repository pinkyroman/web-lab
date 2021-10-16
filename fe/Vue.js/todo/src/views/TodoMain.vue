<template>
  <div class="todo-main">
    <div class="new-todo">
      <todo-new-item></todo-new-item>
    </div>
    <div class="todo-list">
      <ul>
        <todo-item
          v-for="todo in todoList"
          :key="todo.id"
          :id="todo.id"
        ></todo-item>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoNewItem from "../components/TodoNewItem.vue";
import TodoItem from "../components/TodoItem.vue";

export default {
  name: "TodoMain",
  components: {
    TodoItem,
    TodoNewItem,
  },
  computed: {
    ...mapGetters({
      todoList: "getTodoList"
    }),
  },
};
</script>

<style scoped>
.todo-main {
  margin-top: 16px;
  margin: 0px auto;
  width: 70%;
  padding: 8px;
  border: 2px solid rgb(53, 53, 53);
  border-radius: 8px;
}

ul {
  padding-left: 0px;
}
</style>
