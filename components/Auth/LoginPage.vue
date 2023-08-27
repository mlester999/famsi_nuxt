<script lang="ts" setup>
import { ref } from 'vue';

const form = ref({
  emailAddress: '',
  password: '',
});

const handleLogin = async () => {
  await useFetch('http://localhost:8000/sanctum/csrf-cookie', {
    credentials: 'include',
  });

  const token = useCookie('XSRF-TOKEN');

  await useFetch('http://localhost:8000/login', {
    credentials: 'include',
    method: 'POST',
    body: form.value,
    headers: {
      'X-XSRF-TOKEN': token.value as string,
    },
  });
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

      <form class="w-full" @submit.prevent="handleLogin">
        <BaseInputField
          id="emailAddress"
          v-model="form.emailAddress"
          type="text"
          label="Email Address"
          placeholder="Email Address"
        />

        <BaseInputField
          id="password"
          v-model="form.password"
          type="password"
          label="Password"
          placeholder="Password"
        />

        <div class="flex flex-col space-y-5 w-full">
          <BaseButton
            type="submit"
            class="px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white"
          >
            Log In
          </BaseButton>
          <div
            class="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative"
          >
            <div class="-mt-1 font-bod bg-white px-5 absolute">Or</div>
          </div>
          <BaseButton
            type="button"
            class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]"
          >
            Sign Up
          </BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>
