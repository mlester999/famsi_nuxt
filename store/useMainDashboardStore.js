import { defineStore } from 'pinia';
import nuxtStorage from 'nuxt-storage';

export const useMainDashboardStore = defineStore('filter', () => {
  const search = ref(null);
  const location = ref(null);
  const jobPositionDetails = ref(null);
  const isLoading = ref(false);

  const getJobPositionDetails = async () => {
    const token = nuxtStorage.localStorage.getData('Token');

    if (token) {
      try {
        const { data } = await useFetch(
          'http://localhost:8000/api/job-positions/details'
        );
        jobPositionDetails.value = data.value;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  return {
    search,
    location,
    jobPositionDetails,
    isLoading,
    getJobPositionDetails,
  };
});
