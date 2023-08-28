<script setup>
definePageMeta({
  middleware: 'auth',
});
</script>

<script>
import aosMixin from '@/mixins/aos';
export default {
  mixins: [aosMixin],
};
</script>

<template>
  <div class="w-full">
    <!-- Hero section -->
    <LandingWelcome />

    <!-- Requirements section -->
    <LandingRequirements />

    <!-- Introduction section -->
    <LandingShortIntroduction />

    <!-- Visit office section -->
    <LandingVisitOffice />

    <!-- Getting started section -->
    <LandingCurrentOpenings />

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div
          data-aos="fade-right"
          data-aos-delay="150"
          class="col-span-12 lg:col-span-6"
        >
          <div class="w-full">
            <!-- <img
              :src="require('~/assets/img/faq.webp')"
              class="w-full"
              alt=""
            /> -->
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8"
        >
          <span
            class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2"
            >Support</span
          >
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">
            Frequently asked questions
          </h2>

          <ul class="shadow-box">
            <BaseAccordion
              v-for="(accordion, index) in accordions"
              :key="index"
              :accordion="accordion"
            />
          </ul>
        </div>
      </BaseSection>
    </section>
  </div>
</template>

<style scoped>
.max-h-0 {
  max-height: 0;
}
</style>
