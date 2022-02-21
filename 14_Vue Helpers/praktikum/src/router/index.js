import { createRouter, createWebHistory } from 'vue-router';
import TodoView from '../views/TodoView.vue';

const routes = [
  {
    path: '/',
    name: 'todo',
    component: TodoView,
  },
  {
    path: '/:id',
    name: 'detail',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/DetailView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
