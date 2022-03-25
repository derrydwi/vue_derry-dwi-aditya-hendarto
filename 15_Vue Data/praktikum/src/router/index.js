import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultLayout from '../layout/DefaultLayout.vue';
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
        path: ':slug',
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
  scrollBehavior() {
    return { y: 0 };
  },
});

export default router;
