<template>
    <li class="todo-item" @click="showTodoDetails">
        <span>
            <input
                type="checkbox"
                name="progress"
                id="progress"
                v-model="currentState.completed"
            />
        </span>
        <span :class="{ 'todo-completed': currentState.completed }">
            {{ currentState.subject }}
        </span>
    </li>
</template>

<script>
import { todoModel } from '../models/todo'

export default {
    name: 'TodoItem',
    props: {
        ...todoModel
    },
    data() {
        return {
            /*
                prop 을 직접 변경하는 것은 피해야 한다.
                부모 컴포넌트가 다시 렌더링 될 때, 부모 컴포넌트가 지정한 값으로 오버라이트 되기 때문.
                따라서, 별도로 data에 사본을 준비하고 이를 활용한다.
            */
            currentState: {
                ...todoModel
            },
        };
    },
    mounted() {
        // prop 으로 전달 받은 값을 currentState로 복사
        let currentState = this.currentState;
        for (const key in currentState) {
            if (Object.hasOwnProperty.call(currentState, key)) {
                currentState[key] = this[key];
            }
        }
    },
    methods: {
        showTodoDetails() {

        }
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

.todo-completed {
    text-decoration-line: line-through;
}
</style>