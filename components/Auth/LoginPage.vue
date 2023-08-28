<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/store/useAuthStore';

const auth = useAuthStore();

const form = ref({
  email: '',
  password: '',
});

const errors = reactive({
  email: '',
  password: '',
});

const handleLogin = async () => {
  const { error } = await auth.login(form.value);

  if (error.value?.data?.error) {
    if (typeof error.value.data.error !== 'string') {
      if (error.value.data.error.email) {
        errors.email = error.value.data.error.email[0];
      }

      if (error.value.data.error.password) {
        errors.password = error.value.data.error.password[0];
      }
    } else {
      errors.email = error.value.data.error;
      errors.password = '';
    }
  } else {
    errors.email = '';
    errors.password = '';
  }
};
</script>

<template>
  <!-- component -->
  <div class="min-h-screen flex justify-center items-center bg-white">
    <div
      class="p-10 border-[1px] sm:w-1/2 xl:w-[28rem] border-slate-200 rounded-md flex flex-col items-center space-y-3"
    >
      <div class="py-4">
        <NuxtLink to="/">
          <img class="w-28 xl:w-36" src="@/assets/img/logo/famsi_logo.png" />
        </NuxtLink>
      </div>

      <div class="pb-4">
        <h1 class="text-xl font-normal">Login your account.</h1>
      </div>

      <form class="w-full py-4 space-y-10" @submit.prevent="handleLogin">
        <div>
          <BaseInputField
            id="email"
            v-model="form.email"
            type="text"
            label="Email Address"
            placeholder="Email Address"
            :errors="errors?.email"
          />
        </div>

        <div>
          <BaseInputField
            id="password"
            v-model="form.password"
            type="password"
            label="Password"
            placeholder="Password"
            :errors="errors?.password"
          />
        </div>

        <div class="flex flex-col space-y-5 w-full">
          <BaseButton
            type="submit"
            :disabled="auth.isLoading"
            class="px-8 xl:px-10 py-3 mt-2 text-white"
            :class="[
              auth.isLoading
                ? 'bg-gradient-to-r from-[#85a5ff] to-[#4b8dff] hover:shadow-none'
                : 'bg-gradient-to-r from-[#468ef9] to-[#0c66ee]',
            ]"
          >
            {{ auth.isLoading ? 'Loading...' : 'Log In' }}
          </BaseButton>
          <div
            class="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative"
          >
            <div class="-mt-1 font-bod bg-white px-5 absolute">Or</div>
          </div>
          <NuxtLink to="/signup">
            <BaseButton
              type="button"
              class="px-8 w-full xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]"
            >
              Sign Up
            </BaseButton>
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>
