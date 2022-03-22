const state = () => ({
  todos: [],
});

const mutations = {
  SAVE_TODO(state, param) {
    state.todos.push(param);
  },
  EDIT_TODO(state, param) {
    state.todos = state.todos.map((todo) =>
      todo.id === param.id ? { ...todo, body: param.body } : todo
    );
  },
  DELETE_TODO(state, param) {
    state.todos = state.todos.filter((todo) => todo.id !== param);
  },
  EDIT_DESCRIPTION(state, param) {
    state.todos = state.todos.map((todo) =>
      todo.id === param.id ? { ...todo, description: param.description } : todo
    );
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
