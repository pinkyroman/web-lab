export const getters = {
    getTodoList(state) {
        return state.todoList.sort((t1, t2) => {
            return t2.createdAt - t1.createdAt;
        });
    },
    // 기본적으로 Vuex의 getters는 state 이외의 추가 파라미터를 허용하지 않는다.
    // 따라서, 다음과 같이 하여 추가 파라미터를 받을 수 있도록 한다.
    getTodo: (state) => (id) => {
        return state.todoList.find(todo => todo.id == id);
    }
}