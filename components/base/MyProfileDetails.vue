<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/store/useAuthStore';

const auth = useAuthStore();

const form = ref({
  first_name: auth.user.applicant?.first_name || '',
  middle_name: auth.user.applicant?.middle_name || '',
  last_name: auth.user.applicant?.last_name || '',
  email: auth.user?.email || '',
  contact_number: auth.user.applicant?.contact_number || '',
});

const errors = reactive({
  first_name: '',
  last_name: '',
  email: '',
  contact_number: '',
});

const changeDetails = async () => {
  if (
    !form.value.first_name ||
    !form.value.last_name ||
    !form.value.email ||
    !form.value.contact_number
  ) {
    if (!form.value.first_name) {
      errors.first_name = 'First Name field is required.';
    } else {
      errors.first_name = '';
    }

    if (!form.value.last_name) {
      errors.last_name = 'Last Name field is required.';
    } else {
      errors.last_name = '';
    }

    if (!form.value.email) {
      errors.email = 'Email Address field is required.';
    } else {
      errors.email = '';
    }

    if (!form.value.contact_number) {
      errors.contact_number = 'Contact Number field is required.';
    } else {
      errors.contact_number = '';
    }

    return;
  }
  await auth.changeDetails(form.value);
};
</script>

<template>
  <div class="w-full text-left text-md">
    <div>
      <h1 class="text-gray-800 text-xl font-semibold">My Profile</h1>
      <p class="pb-4 text-gray-600 text-md font-normal">
        You can edit your personal information if you want.
      </p>
      <form
        class="text-gray-700 w-full px-6 py-8 space-y-4 bg-white"
        @submit.prevent="changeDetails"
      >
        <div class="flex flex-row justify-between space-x-6">
          <div class="w-full">
            <BaseInputField
              id="first_name"
              v-model="form.first_name"
              type="text"
              label="First Name *"
              placeholder="First Name"
              :errors="errors.first_name"
            />
          </div>

          <div class="w-full">
            <BaseInputField
              id="middle_name"
              v-model="form.middle_name"
              type="text"
              label="Middle Name (Optional)"
              placeholder="Middle Name (Optional)"
            />
          </div>

          <div class="w-full">
            <BaseInputField
              id="last_name"
              v-model="form.last_name"
              type="text"
              label="Last Name *"
              placeholder="Last Name"
              :errors="errors.last_name"
            />
          </div>
        </div>

        <div class="flex flex-row justify-between space-x-6">
          <div class="w-full">
            <BaseInputField
              id="email"
              v-model="form.email"
              type="text"
              label="Email Address *"
              placeholder="Email Address"
              :errors="errors.email"
            />
          </div>

          <div class="w-full">
            <BaseInputField
              id="contact_number"
              v-model="form.contact_number"
              type="text"
              label="Contact Number *"
              placeholder="Contact Number"
              :errors="errors.contact_number"
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
            {{ auth.isLoading ? 'Loading...' : 'Save Details' }}
          </BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>
