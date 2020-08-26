import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LoginToken from '../views/LoginToken.vue';
import Admin from '../views/Admin.vue';

import store from '../store/index';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login/token/:token',
    name: 'login-token',
    component: LoginToken,
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter(to, form, next) {
      if (store.getters.isLoggedIn) {
        next();
      } else {
        next('/');
      }
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
