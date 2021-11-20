import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // title 값을 상탯값으로 정의
  state: {
    title: '',
  },
  // mutations는 getters와 대칭되는 setters 역할을 한다.
  mutations: {
    setData(state, payload) {
      return state.title = payload;
    },
  },
  // actions는 mutations와 대칭되는 getters 역할을 한다.
  getters: {
    getData(state) {
      return state.title;
    },
  },
  modules: {
  }
});

