<script setup>
import { ref } from 'vue';

const form = ref({
  emailAddress: '',
  password: '',
});
</script>

<template>
  <!-- component -->
  <div class="min-h-screen flex justify-center items-center bg-white">
    <div
      class="p-10 border-[1px] w-96 border-slate-200 rounded-md flex flex-col items-center space-y-3"
    >
      <div class="py-8">
        <NuxtLink to="/">
          <img
            class="-mt-10 w-28 xl:w-36"
            src="@/assets/img/logo/famsi_logo.png"
          />
        </NuxtLink>
      </div>

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
        type="text"
        label="Password"
        placeholder="Password"
      />
      <div class="flex flex-col space-y-5 w-full">
        <BaseButton
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
          class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]"
        >
          Sign Up
        </BaseButton>
      </div>
    </div>
  </div>
</template>
