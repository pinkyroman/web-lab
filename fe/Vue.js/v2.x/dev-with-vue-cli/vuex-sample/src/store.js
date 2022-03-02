import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        message: "initial message",
    },
    getters: {
        count(state, getters, rootState, rootGetter) {
            return state.count;
        },
        message(state) {
            return state.message;
        },
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        setMessage(state, payload) {
            state.message = payload.message;
        }
    },
    actions: {
        incrementCount({ commit }, state) {
            return new Promise((resolve, reject) => {
                console.log("committing ...");                
                setTimeout(() => {
                    commit("increment", state);
                    resolve("committed successfully");
                });
            }, 8000);
        },
        updateMessage({ commit }, message) {
            commit('setMessage', { message });
        },
    }
});

export default store;
