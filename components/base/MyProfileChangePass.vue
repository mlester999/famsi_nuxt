<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/store/useAuthStore';

const auth = useAuthStore();

const form = ref({
  password: auth.user?.password || '',
  confirm_password: auth.user?.password || '',
});

const errors = reactive({
  password: '',
  confirm_password: '',
});

const changePassword = async () => {
  if (!form.value.password || !form.value.confirm_password) {
    if (!form.value.password) {
      errors.password = 'Password field is required.';
    } else {
      errors.password = '';
    }

    if (!form.value.confirm_password) {
      errors.confirm_password = 'Confirm Password field is required.';
    } else {
      errors.confirm_password = '';
    }

    if (form.value.password !== form.value.confirm_password) {
      errors.password = 'Password does not match.';
    } else {
      errors.password = '';
    }

    return;
  }
  await auth.changePassword(form.value);
};
</script>

<template>
  <div class="w-full text-left text-md">
    <div>
      <h1 class="text-gray-800 text-xl font-semibold">Change your Password</h1>
      <p class="pb-4 text-gray-600 text-md font-normal">
        You can change your password credentials if you want.
      </p>
      <form
        class="text-gray-700 w-full px-6 py-8 space-y-4 bg-white"
        @submit.prevent="changePassword"
      >
        <div class="flex flex-row justify-between space-x-6">
          <div class="w-full">
            <BaseInputField
              id="password"
              v-model="form.password"
              type="password"
              label="Password *"
              placeholder="Password"
              :errors="errors.password"
            />
          </div>

          <div class="w-full">
            <BaseInputField
              id="confirm_password"
              v-model="form.confirm_password"
              type="password"
              label="Confirm Password *"
              placeholder="Confirm Password"
              :errors="errors.confirm_password"
            />
          </div>
        </div>

        <div class="flex flex-row w-max space-x-4 ml-auto">
          <BaseButton
            type="submit"
            :disabled="auth.isLoading"
            class="px-6 xl:px-8 py-3 mt-2 text-white"
            :class="[
              auth.isLoading
                ? 'bg-gradient-to-r from-[#85a5ff] to-[#4b8dff] hover:shadow-none'
                : 'bg-gradient-to-r from-[#468ef9] to-[#0c66ee]',
            ]"
          >
            {{ auth.isLoading ? 'Loading...' : 'Submit' }}
          </BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>
