<script setup>
import { useLandingPageStore } from '@/store/landingPage';
import { storeToRefs } from 'pinia';

const store = useLandingPageStore();
const { currentOpenings } = storeToRefs(store);
</script>

<template>
  <section
    class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden"
  >
    <div class="w-full py-16 flex flex-col items-center">
      <h2
        data-aos="flip-down"
        class="text-3xl sm:text-4xl font-semibold text-center"
      >
        {{ currentOpenings.title }}
      </h2>
      <div
        data-aos="fade-up"
        class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
      >
        <LandingPositions :positions="currentOpenings.positions" />
      </div>
    </div>
  </section>
</template>
