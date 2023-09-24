<script setup>
import { useMainPortalStore } from '@/store/useMainPortalStore';

const portal = useMainPortalStore();
</script>

<template>
  <Head>
    <Title>FAMSI | Applying for {{ portal.jobPositionDetails.title }}</Title>
    <Meta name="description" />
  </Head>

  <BaseImageCarousel id="imageCarousel" />

  <div
    class="flex flex-col py-8 mx-auto max-w-7xl justify-center items-center space-y-0.5"
  >
    <BaseCardJobApplication
      :details="portal.jobPositionDetails"
      :relatedJobs="portal.relatedJobsDetails"
    />
  </div>
</template>
