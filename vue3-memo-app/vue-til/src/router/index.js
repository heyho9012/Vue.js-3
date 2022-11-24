import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { useUserStore } from '../stores/auth/user';
import { storeToRefs } from 'pinia';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(to => {
  const { isLogin } = storeToRefs(useUserStore());
  if (to.meta.auth && !isLogin) {
    console.log('Authentication required');
    return '/login';
  }
});

export default router;
