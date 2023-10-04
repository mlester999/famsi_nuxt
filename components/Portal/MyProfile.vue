<script setup>
import { useAuthStore } from '@/store/useAuthStore';

const { user } = useAuthStore();
</script>

<template>
  <Head>
    <Title>FAMSI | My Profile</Title>
    <Meta name="description" />
  </Head>

  <BaseImageCarousel id="imageCarousel" />

  <div
    class="flex flex-col py-8 mx-auto max-w-4xl justify-center items-center space-y-8"
  >
    <BaseMyProfileDetails />
    <BaseMyProfileChangePass />
  </div>
</template>
