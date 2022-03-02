import { nanoid } from 'nanoid';

export const mutations = {
    addTodo(state, todo) {
        todo.id = nanoid();
        todo.createdAt = Date.now();
        state.todoList.push(todo);
    },
    deleteTodo(state, id) {
        let targetIndex = state.todoList.findIndex((todo) => {
            return todo.id == id;
        });
        if (targetIndex >= 0) {
            state.todoList.splice(targetIndex, 1);
            return;
        }
        console.warn(`The todo with id:'${id} not found.`);
    }
};