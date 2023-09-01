import { defineStore } from 'pinia';

export const useFilterJobStore = defineStore('filter', () => {
  const search = ref(null);
  const location = ref(null);

  return { search, location };
});
