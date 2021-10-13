export const actions = {
    addTodo(context) {
        // 비동기 처리 후, commit() 호출하여 mutations 의 메서드 호출.
        // mutations의 메서드 호출로 실제 state의 업데이트 발생.
        // DB 또는 API 서비스의 비동기 호출 후, 성공 시 state 업데이트 등의
        // 작업 수행.
        context.commit('addTodo');
    }
}