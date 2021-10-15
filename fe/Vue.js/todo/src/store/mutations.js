export const mutations = {
    addTodo(state, todo) {
        todo.id = ''; // TODO set UUID
        state.push(todo);
    },
}