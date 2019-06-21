import Vue from 'vue';
import Router from 'vue-router';
import SearchPage from './views/SearchPage.vue';
import MaquinaDeBusca from './views/MaquinaDeBusca.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'SearchPage',
      component: SearchPage,
    },
    {
      path: '/maquina-de-busca',
      name: 'MaquinaDeBusca',
      component: MaquinaDeBusca,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
