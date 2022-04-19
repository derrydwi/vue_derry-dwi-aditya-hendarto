import { apolloClient } from '../main';
import getUser from '../graphql/getUser.gql';
import getTodo from '../graphql/getTodo.gql';
import addTodo from '../graphql/addTodo.gql';
import updateTodo from '../graphql/updateTodo.gql';
import deleteTodo from '../graphql/deleteTodo.gql';

const state = () => ({
  users: [],
  todos: [],
});

const getters = {
  getUsers: (state) => {
    return state.users;
  },
  getTodos: (state) => {
    return state.todos;
  },
  getTodoById: (state) => (id) => {
    return state.todos.find((todo) => todo.id === Number.parseInt(id));
  },
};

const mutations = {
  SET_USERS(state, param) {
    state.users = param;
  },
  SET_TODOS(state, param) {
    state.todos = param;
  },
};

const actions = {
  fetchUsers({ commit }) {
    apolloClient
      .query({
        query: getUser,
      })
      .then((response) => {
        commit('SET_USERS', response.data.kampus_merdeka_user);
      });
  },
  fetchTodos({ commit }, param) {
    apolloClient
      .query({
        query: getTodo,
        variables: {
          _eq: param,
        },
      })
      .then((response) => {
        commit('SET_TODOS', response.data.kampus_merdeka_todolist);
      });
  },
  addTodo({ dispatch }, param) {
    apolloClient
      .mutate({
        mutation: addTodo,
        variables: param,
        update: (cache, { data: { insert_kampus_merdeka_todolist_one } }) => {
          try {
            const data = cache.readQuery({
              query: getTodo,
              variables: {
                _eq: param.id_user,
              },
            });
            data.kampus_merdeka_todolist.push(
              insert_kampus_merdeka_todolist_one
            );
            cache.writeQuery({
              query: getTodo,
              variables: {
                _eq: param.id_user,
              },
              data,
            });
          } catch (error) {
            console.log(error);
          }
        },
      })
      .then(() => {
        dispatch('fetchTodos', param.id_user);
      });
  },
  editTodo({ dispatch }, param) {
    apolloClient
      .mutate({
        mutation: updateTodo,
        variables: param,
      })
      .then(() => {
        dispatch('fetchTodos', 1);
      });
  },
  deleteTodo({ dispatch }, param) {
    apolloClient
      .mutate({
        mutation: deleteTodo,
        variables: param,
        update: (cache) => {
          try {
            const data = cache.readQuery({
              query: getTodo,
              variables: {
                _eq: 1,
              },
            });
            data.kampus_merdeka_todolist = data.kampus_merdeka_todolist.filter(
              (todo) => todo.id !== param.id
            );
            cache.writeQuery({
              query: getTodo,
              variables: {
                _eq: 1,
              },
              data,
            });
          } catch (error) {
            console.log(error);
          }
        },
      })
      .then(() => {
        dispatch('fetchTodos', 1);
      });
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
  getters,
  mutations,
  actions,
};
