const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/signup',
    component: () => import('@/views/SignupView.vue'),
  },
  {
    path: '/main',
    component: () => import('@/views/MainView.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('@/views/PostAddView.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/post/:id',
    name: 'Edit',
    component: () => import('@/views/PostEditView.vue'),
    meta: {
      auth: true,
    },
    // props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFoundPage.vue'),
  },
];

export { routes };
