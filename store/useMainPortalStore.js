import { defineStore } from 'pinia';
import nuxtStorage from 'nuxt-storage';

export const useMainPortalStore = defineStore('filter', () => {
  const route = useRoute();
  const router = useRouter();

  const filter = reactive({
    search: route.query?.search,
    location: route.query?.location,
  });
  const allJobPositions = ref(null);
  const jobPositionDetails = ref(null);
  const relatedJobsDetails = ref(null);
  const isLoading = ref(false);

  watch(filter, (value) => {
    isLoading.value = true;
    if (value.search && value.location) {
      if (value.location.includes('All')) {
        router.push({
          path: '/portal',
          query: { search: value.search },
        });
      } else {
        router.push({
          path: '/portal',
          query: { search: value.search, location: value.location },
        });
      }
    } else if (value.search) {
      router.push({
        path: '/portal',
        query: { search: value.search },
      });
    } else if (value.location) {
      if (value.location.includes('All')) {
        router.replace({ path: '/portal' });
      } else {
        router.push({
          path: '/portal',
          query: { location: value.location },
        });
      }
    } else {
      router.replace({ path: '/portal' });
    }
  });

  const getAllJobPositions = async () => {
    const token = nuxtStorage.localStorage.getData('Token');

    if (token) {
      try {
        const { data } = await useFetch(
          'http://localhost:8000/api/job-positions/details'
        );
        if (filter.search && filter.location) {
          if (filter.location.includes('All')) {
            allJobPositions.value = data.value.filter((el, i) => {
              return (
                el.title.toLowerCase().includes(filter.search.toLowerCase()) ||
                el.description
                  .toLowerCase()
                  .includes(filter.search.toLowerCase())
              );
            });
          } else {
            allJobPositions.value = data.value.filter((el, i) => {
              return (
                (el.title.toLowerCase().includes(filter.search.toLowerCase()) ||
                  el.description
                    .toLowerCase()
                    .includes(filter.search.toLowerCase())) &&
                el.location === filter.location
              );
            });
          }
        } else if (filter.search) {
          allJobPositions.value = data.value.filter((el, i) => {
            return (
              el.title.toLowerCase().includes(filter.search.toLowerCase()) ||
              el.description.toLowerCase().includes(filter.search.toLowerCase())
            );
          });
        } else if (filter.location) {
          if (filter.location.includes('All')) {
            allJobPositions.value = data.value;
          } else {
            allJobPositions.value = data.value.filter((el, i) => {
              return el.location === filter.location;
            });
          }
        } else {
          allJobPositions.value = data.value;
        }

        isLoading.value = false;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  const getJobPositionDetails = async (id, slug) => {
    const token = nuxtStorage.localStorage.getData('Token');

    if (token) {
      try {
        const { data: jobPositionData } = await useFetch(
          `http://localhost:8000/api/job-positions/details/${id}/${slug}`
        );

        const { data: relatedJobsData } = await useFetch(
          `http://localhost:8000/api/job-positions/related-jobs/${id}`
        );

        if (jobPositionData.value) {
          jobPositionDetails.value = jobPositionData.value;
        } else {
          jobPositionDetails.value = false;
        }
        console.log(relatedJobsData.value);

        if (relatedJobsData.value) {
          relatedJobsDetails.value = relatedJobsData.value;
        } else {
          relatedJobsDetails.value = false;
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  return {
    filter,
    allJobPositions,
    jobPositionDetails,
    relatedJobsDetails,
    isLoading,
    getAllJobPositions,
    getJobPositionDetails,
  };
});
