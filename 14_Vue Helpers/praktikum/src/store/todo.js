const state = () => ({
  todos: [],
});

const mutations = {
  ADD_TODO(state, param) {
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
  addTodo({ commit }, param) {
    commit('ADD_TODO', param);
  },
  editTodo({ commit }, param) {
    commit('EDIT_TODO', param);
  },
  deleteTodo({ commit }, param) {
    commit('DELETE_TODO', param);
  },
  editDescription({ commit }, param) {
    commit(
      'EDIT_DESCRIPTION',
      !param.description
        ? { ...param, description: 'Belum ada deskripsi nih' }
        : param
    );
  },
};

export default {
  state,
  mutations,
  actions,
};
