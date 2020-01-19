import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Docs from '@/pages/Docs';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/docs/:language/:library',
      name: 'docs',
      component: Docs,
      children: [{
        path: ':version',
        name: 'docs-version',
        children: [{
          path: ':path',
          name: 'docs-path',
        }],
      }],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return null;
  },
});
