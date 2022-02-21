import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    title: 'Vuex Store',
    todos: [],
  },
  getters: {},
  mutations: {
    SAVE_TODO(state, title) {
      state.todos.push(title);
    },
    EDIT_TODO(state, index) {},
    DELETE_TODO(state, index) {
      state.todos.splice(index, 1);
    },
    EDIT_DESCRIPTION(state, index) {
      state.todos[index.index].description = index.description;
    },
  },
  actions: {
    saveTodo({ commit }, title) {
      commit('SAVE_TODO', title);
    },
    editTodo({ commit }, index) {
      commit('EDIT_TODO', index);
    },
    deleteTodo({ commit }, index) {
      commit('DELETE_TODO', index);
    },
    editDescription({ commit }, index) {
      commit('EDIT_DESCRIPTION', index);
    },
  },
  modules: {},
});

export default store;
