import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Docs from '@/components/Docs';

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
});
