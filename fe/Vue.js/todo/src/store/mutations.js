import { nanoid } from 'nanoid';

export const mutations = {
    addTodo(state, todo) {
        todo.id = nanoid();
        console.log(`new id: ${todo.id}`);
        state.todoList.push(todo);
    },
}