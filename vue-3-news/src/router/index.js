import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('@/views/NewsView.vue'),
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: () => import('@/views/JobsView.vue'),
    },
    {
      path: '/ask',
      name: 'Ask',
      component: () => import('@/views/AskView.vue'),
    },
    {
      path: '/user/:id',
      name: 'User',
      component: () => import('@/views/UserView.vue'),
    },
    {
      path: '/item/:id',
      name: 'Item',
      component: () => import('@/views/ItemView.vue'),
    },
  ],
});

export default router;
