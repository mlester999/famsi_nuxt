import { defineStore } from 'pinia';
import { useApiFetch } from '~/composables/useApiFetch';
import nuxtStorage from 'nuxt-storage';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isLoading = ref(false);

  const fetchUser = async () => {
    const token = nuxtStorage.localStorage.getData('Token');

    if (token) {
      try {
        const { data } = await useApiFetch('/api/user', {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });

        user.value = data.value;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  const logout = async () => {
    isLoading.value = true;
    await useApiFetch('/logout', { method: 'POST' });
    user.value = null;
    nuxtStorage.localStorage.setData('Token', null);

    isLoading.value = false;
    navigateTo('/login');
  };

  const login = async (credentials) => {
    isLoading.value = true;
    await useApiFetch('/sanctum/csrf-cookie');

    const loginResponse = await useApiFetch('/api/login', {
      method: 'POST',
      body: credentials,
    });

    if (loginResponse.data?.value?.token) {
      const { data } = await useApiFetch('/api/user', {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + loginResponse.data.value.token,
        },
      });

      nuxtStorage.localStorage.setData(
        'Token',
        loginResponse.data.value.token,
        300
      );

      user.value = data.value;

      return navigateTo('/portal');
    }

    isLoading.value = false;

    return loginResponse;
  };

  const register = async (info) => {
    isLoading.value = true;
    await useApiFetch('/sanctum/csrf-cookie');

    const registerResponse = await useApiFetch('/api/register', {
      method: 'POST',
      body: info,
    });

    if (registerResponse.data?.value?.token) {
      const { data } = await useApiFetch('/api/user', {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + registerResponse.data.value.token,
        },
      });

      nuxtStorage.localStorage.setData(
        'Token',
        registerResponse.data.value.token,
        300
      );

      user.value = data.value;

      return navigateTo('/portal');
    }

    isLoading.value = false;

    return registerResponse;
  };

  const application = async (val) => {
    isLoading.value = true;

    const formData = new FormData();
    formData.append('resume_path', val.resume_path);
    formData.append('applicant_id', val.applicant_id);

    try {
      const { data, error } = await useFetch(
        'http://localhost:8000/api/application',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (data) {
        console.log(data);
        // return navigateTo('/portal');
      }

      isLoading.value = false;

      return error;
    } catch (error) {
      isLoading.value = false;
      return error;
    }
  };

  return { user, isLoading, login, logout, register, application, fetchUser };
});
