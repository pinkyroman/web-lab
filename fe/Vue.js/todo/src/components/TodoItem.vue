<template>
    <li class="todo-item">
        <!-- checkbox -->
        <span>
            <input
                type="checkbox"
                name="progress"
                id="progress"
                v-model="currentState(id).completed"
            />
        </span>

        <!-- subject  -->
        <span class="todo-subject" :class="{ 'todo-completed': currentState(id).completed }" @click="showTodoDetails">
            {{ currentState(id).subject }}
        </span>
        <span class="button-delete" @click="deleteTodo(id)">X</span>

        <!-- show/hide details -->
        <todo-item-details v-show="showDetails" :id="id"></todo-item-details>
    </li>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import TodoItemDetails from './TodoItemDetails.vue';

export default {
    name: 'TodoItem',
    components: { 
        TodoItemDetails 
    },
    props: {
        /*
            prop 을 컴포넌트 내에서 직접 변경하는 것은 피해야 한다. 
            즉, read-only 로만 사용 하는 것이 좋다.
            부모 컴포넌트가 다시 렌더링 될 때, 부모 컴포넌트가 지정한 값으로 오버라이트 되기 때문.
        */
        id: {
            type: String,
            required: true,
            default: null,
        }
    },
    data() {
        return {
            showDetails: false,
        };
    },
    computed: {
        ...mapGetters({
            currentState: 'getTodo' // getTodo getter를 currentState로 맵핑
        }),
    },
    methods: {
        ...mapMutations({
            deleteTodo: 'deleteTodo'
        }),
        showTodoDetails() {
            this.showDetails = !this.showDetails;
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

.todo-subject {
    font-weight: bold;
    cursor: pointer;
}

.todo-completed {
    font-style: italic;
    font-weight: unset;
    text-decoration-line: line-through;
}

.button-delete {
    color: red;
    float: right;
    position: relative;
    z-index: 597;
    cursor: pointer;
}
</style>