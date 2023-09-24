import { useAuthStore } from '@/store/useAuthStore';
import { useMainPortalStore } from '@/store/useMainPortalStore';
import { useLandingPageStore } from '@/store/useLandingPageStore';

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    const store = useAuthStore();
    const portal = useMainPortalStore();
    const landingPage = useLandingPageStore();

    await store.fetchUser();

    if (store.user) {
      if (to.path === '/portal') {
        await landingPage.fetchCompanyAssignments();
        await landingPage.fetchJobTypes();
        await landingPage.fetchEmploymentTypes();
        await landingPage.fetchIndustries();
        await portal.getAllJobPositions();
      }

      if (to.path.includes('/portal/job')) {
        await portal.getJobPositionDetails(
          to.params.slug[0],
          to.params.slug[1]
        );
      }

      if (to.path.includes('/portal/apply')) {
        await portal.getJobPositionDetails(
          to.params.slug[0],
          to.params.slug[1]
        );
      }

      if (to.path === '/' || to.path === '/login' || to.path === '/signup') {
        return navigateTo('/portal');
      }
    } else {
      if (to.path.includes('/portal')) {
        return navigateTo('/login');
      }

      if (to.path === '/') {
        await landingPage.fetchQualifications();
        await landingPage.fetchBenefits();
        await landingPage.fetchCompanyAssignments();
        await landingPage.fetchJobTypes();
        await landingPage.fetchEmploymentTypes();
      }
    }
  }
});
