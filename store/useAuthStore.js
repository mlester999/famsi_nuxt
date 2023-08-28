import { defineStore } from 'pinia';
import { useApiFetch } from '~/composables/useApiFetch';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);

  const isLoading = ref(false);

  const fetchUser = async () => {
    if (process.client) {
      if (localStorage.getItem('Token')) {
        const { data } = await useApiFetch('/api/user', {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('Token'),
          },
        });

        user.value = data.value;
      }
    }
  };

  const logout = async () => {
    isLoading.value = true;
    await useApiFetch('/logout', { method: 'POST' });
    user.value = null;
    localStorage.setItem('Token', null);

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

      localStorage.setItem('Token', loginResponse.data.value.token);

      user.value = data.value;

      return navigateTo('/dashboard');
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

      localStorage.setItem('Token', registerResponse.data.value.token);

      user.value = data.value;

      return navigateTo('/dashboard');
    }

    isLoading.value = false;

    return registerResponse;
  };

  return { user, isLoading, login, logout, register, fetchUser };
});
