<template>
    <div class="todo-main">
        <p>TODO: 새로운 항목 추가 컴포넌트</p>
        <ul>
            <todo-item
                v-for="todo in todoList"
                :key="todo.id"
                :id="todo.id"
            ></todo-item>
        </ul>
    </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'
import { mapState } from 'vuex'

export default {
    name: 'TodoMain',
    components: {
        TodoItem,
    },
    computed: {
        ...mapState(['todoList']),
    },
}
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