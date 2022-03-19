const state = () => ({
  todos: [],
});

const mutations = {
  SAVE_TODO(state, param) {
    state.todos.push(param);
  },
  EDIT_TODO(state, param) {
    state.todos[param.index].body = param.todo;
  },
  DELETE_TODO(state, param) {
    state.todos.splice(param, 1);
  },
  EDIT_DESCRIPTION(state, param) {
    state.todos[param.index].description = param.description;
  },
};

const actions = {
  saveTodo({ commit }, param) {
    commit('SAVE_TODO', param);
  },
  editTodo({ commit }, param) {
    commit('EDIT_TODO', param);
  },
  deleteTodo({ commit }, param) {
    commit('DELETE_TODO', param);
  },
  editDescription({ commit }, param) {
    commit('EDIT_DESCRIPTION', param);
  },
};

export default {
  state,
  mutations,
  actions,
};
