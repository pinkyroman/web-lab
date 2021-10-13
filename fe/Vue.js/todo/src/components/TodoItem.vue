<template>
    <li class="todo-item">
        <span>
            <input
                type="checkbox"
                name="progress"
                id="progress"
                v-model="this.completed"
            />
        </span>
        {{ this.subject }}
    </li>
</template>

<script>
import { todoModel } from '../models/todo'

export default {
    name: 'TodoItem',
    props: {
        ...todoModel
    }
}
</script>

<style scoped>
li {
    border: 1px solid rgb(87, 162, 231);
    border-radius: 4px;
    list-style: none inside;
    margin-top: -1px;
    padding: 4px 16px;
}
</style>