import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultLayout from '../layout/DefaultLayout';
import HomeView from '../views/HomeView.vue';
import DetailView from '../views/DetailView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: ':id',
        name: 'detail',
        component: DetailView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
