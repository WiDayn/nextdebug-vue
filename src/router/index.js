import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import userRoutes from './module/user';
import problemRoutes from './module/problem';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  ...problemRoutes,
  ...userRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 判断是否登录
    if (store.state.userModule.token) {
      // 判断有效性

      next();
    } else {
      router.push({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
