<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/store/useAuthStore';

const auth = useAuthStore();

const form = ref({
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  gender: '',
  contact_number: '',
  password: '',
  password_confirmation: '',
});

const errors = reactive({
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  gender: '',
  contact_number: '',
  password: '',
  password_confirmation: '',
});

const handleRegister = async () => {
  const { error } = await auth.register(form.value);

  if (error.value?.data?.error) {
    if (typeof error.value.data.error !== 'string') {
      if (error.value.data.error.firstName) {
        errors.firstName = error.value.data.error.firstName[0];
      } else {
        errors.firstName = '';
      }

      if (error.value.data.error.middleName) {
        errors.middleName = error.value.data.error.middleName[0];
      } else {
        errors.middleName = '';
      }

      if (error.value.data.error.lastName) {
        errors.lastName = error.value.data.error.lastName[0];
      } else {
        errors.lastName = '';
      }

      if (error.value.data.error.email) {
        errors.email = error.value.data.error.email[0];
      } else {
        errors.email = '';
      }

      if (error.value.data.error.gender) {
        errors.gender = error.value.data.error.gender[0];
      } else {
        errors.gender = '';
      }

      if (error.value.data.error.contact_number) {
        errors.contact_number = error.value.data.error.contact_number[0];
      } else {
        errors.contact_number = '';
      }

      if (error.value.data.error.password) {
        errors.password = error.value.data.error.password[0];
      } else {
        errors.password = '';
      }

      if (error.value.data.error.password_confirmation) {
        errors.password_confirmation =
          error.value.data.error.password_confirmation[0];
      } else {
        errors.password_confirmation = '';
      }
    }
  } else {
    errors.firstName = '';
    errors.middleName = '';
    errors.lastName = '';
    errors.email = '';
    errors.gender = '';
    errors.contact_number = '';
    errors.password = '';
    errors.password_confirmation = '';
  }
};
</script>

<template>
  <!-- component -->
  <div class="min-h-screen p-12 flex justify-center items-center bg-white">
    <div
      class="p-10 border-[1px] sm:w-1/2 xl:w-[40rem] border-slate-200 rounded-md flex flex-col items-center space-y-3"
    >
      <div class="py-4">
        <NuxtLink to="/">
          <img class="w-28 xl:w-36" src="@/assets/img/logo/famsi_logo.png" />
        </NuxtLink>
      </div>

      <div class="pb-4">
        <h1 class="text-xl font-normal">Sign up an account.</h1>
      </div>

      <form class="w-full py-4 space-y-10" @submit.prevent="handleRegister">
        <div class="flex flex-col md:flex-row justify-between md:space-x-8">
          <div class="flex-1">
            <BaseInputField
              id="firstName"
              v-model="form.firstName"
              type="text"
              label="First Name"
              placeholder="First Name"
              :errors="errors?.firstName"
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between md:space-x-8">
          <div class="flex-1">
            <BaseInputField
              id="middleName"
              v-model="form.middleName"
              type="middleName"
              label="Middle Name (Optional)"
              placeholder="Middle Name (Optional)"
              :errors="errors?.middleName"
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between md:space-x-8">
          <div class="flex-1">
            <BaseInputField
              id="lastName"
              v-model="form.lastName"
              type="lastName"
              label="Last Name"
              placeholder="Last Name"
              :errors="errors?.lastName"
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between md:space-x-8">
          <div class="flex-1">
            <BaseInputField
              id="email"
              v-model="form.email"
              type="email"
              label="Email Address"
              placeholder="Email Address"
              :errors="errors?.email"
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between md:space-x-8">
          <div class="flex-1">
            <BaseSelectInput
              id="gender"
              v-model="form.gender"
              label="Gender"
              placeholder="Gender"
              :errors="errors?.gender"
            >
              <option value="" disabled selected hidden></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </BaseSelectInput>
          </div>

          <div class="flex-1">
            <BaseInputField
              id="contact_number"
              v-model="form.contact_number"
              type="contact_number"
              label="Contact Number"
              placeholder="Contact Number"
              :errors="errors?.contact_number"
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between md:space-x-8">
          <div class="flex-1">
            <BaseInputField
              id="password"
              v-model="form.password"
              type="password"
              label="Password"
              placeholder="Password"
              :errors="errors?.password"
            />
          </div>

          <div class="flex-1">
            <BaseInputField
              id="password_confirmation"
              v-model="form.password_confirmation"
              type="password"
              label="Confirm Password"
              placeholder="Confirm Password"
              :errors="errors?.password_confirmation"
            />
          </div>
        </div>

        <div class="flex flex-col space-y-5 w-full">
          <BaseButton
            type="submit"
            :disabled="auth.isLoading"
            class="px-8 xl:px-10 py-3 mt-2 text-white"
            :class="[
              auth.isLoading
                ? 'bg-gradient-to-r from-[#85a5ff] to-[#4b8dff] hover:shadow-none'
                : 'bg-gradient-to-r from-[#468ef9] to-[#0c66ee] focus:ring-2',
            ]"
          >
            {{ auth.isLoading ? 'Loading...' : 'Register' }}
          </BaseButton>
          <div
            class="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative"
          >
            <div class="-mt-1 font-bod bg-white px-5 absolute">Or</div>
          </div>

          <NuxtLink to="/login">
            <BaseButton
              type="button"
              class="px-8 w-full xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]"
            >
              Log In
            </BaseButton>
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>
