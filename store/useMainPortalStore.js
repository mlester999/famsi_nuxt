import { defineStore } from 'pinia';
import nuxtStorage from 'nuxt-storage';

export const useMainPortalStore = defineStore('filter', () => {
  const search = ref(null);
  const location = ref(null);
  const allJobPositions = ref(null);
  const jobPositionDetails = ref(null);
  const isLoading = ref(false);

  const getAllJobPositions = async () => {
    const token = nuxtStorage.localStorage.getData('Token');

    if (token) {
      try {
        const { data } = await useFetch(
          'http://localhost:8000/api/job-positions/details'
        );
        allJobPositions.value = data.value;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  const getJobPositionDetails = async (id, slug) => {
    const token = nuxtStorage.localStorage.getData('Token');

    if (token) {
      try {
        const { data } = await useFetch(
          `http://localhost:8000/api/job-positions/details/${id}/${slug}`
        );

        console.log(data.value);
        if (data.value) {
          jobPositionDetails.value = data.value;
        } else {
          jobPositionDetails.value = false;
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  return {
    search,
    location,
    allJobPositions,
    jobPositionDetails,
    isLoading,
    getAllJobPositions,
    getJobPositionDetails,
  };
});
