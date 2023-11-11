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
    <!-- <LandingCurrentOpenings /> -->

  </div>
</template>

<style scoped>
.max-h-0 {
  max-height: 0;
}
</style>
