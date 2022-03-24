import store from '../store/index';

export const generateId = () => {
  const todos = store.getters['todo/getTodos'];
  if (!todos.length) {
    return 1;
  }
  return Math.max(...todos.map((todo) => todo.id)) + 1;
};
