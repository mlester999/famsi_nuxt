<script setup>
import { useMainPortalStore } from '@/store/useMainPortalStore';

const portal = useMainPortalStore();
</script>

<template>
  <BaseImageCarousel id="imageCarousel" />

  <div
    class="flex flex-col py-8 mx-auto max-w-6xl justify-center items-center space-y-0.5"
  >
    <BaseCardJobDetails
      :details="portal.jobPositionDetails"
      :relatedJobs="portal.relatedJobsDetails"
    />
  </div>
</template>
