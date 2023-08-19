<script setup>
import { useLandingPageStore } from '@/store/landingPage';
import { storeToRefs } from 'pinia';

const store = useLandingPageStore();
const { shortIntroduction } = storeToRefs(store);
</script>

<template>
  <section
    class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden"
  >
    <div
      class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center"
    >
      <h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold">
        {{ shortIntroduction.title }}
      </h3>
      <p data-aos="flip-down" class="paragraph max-w-2xl">
        {{ shortIntroduction.description }}
      </p>
    </div>
  </section>
</template>
