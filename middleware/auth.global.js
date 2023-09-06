import { useAuthStore } from '@/store/useAuthStore';
import { useMainDashboardStore } from '@/store/useMainDashboardStore';

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    const store = useAuthStore();
    const dashboard = useMainDashboardStore();

    await store.fetchUser();
    await dashboard.getJobPositionDetails();
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
