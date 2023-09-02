import { useAuthStore } from '@/store/useAuthStore';

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    const store = useAuthStore();

    await store.fetchUser();
    if (store.user) {
      if (to.path === '/' || to.path === '/login' || to.path === '/signup') {
        return navigateTo('/dashboard');
      }
    } else {
      if (to.path === '/dashboard') {
        return navigateTo('/login');
      }
    }
  }
});
