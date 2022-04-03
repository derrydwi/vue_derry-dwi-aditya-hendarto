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
        meta: {
          scrollPos: {
            x: 0,
            y: 0,
          },
        },
      },
      {
        path: ':slug',
        name: 'detail',
        component: DetailView,
      },
    ],
  },
];

const scrollBehavior = (to, from, savedPosition) => {
  return savedPosition || to.meta?.scrollPos || { x: 0, y: 0 };
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior,
});

router.beforeEach((to, from, next) => {
  let title = process.env.VUE_APP_TITLE;
  if (to.params.title) {
    title += ` | ${to.params.title}`;
  }
  document.title = title;
  next();
});

export default router;
