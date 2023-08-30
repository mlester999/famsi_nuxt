<script setup>
definePageMeta({
  layout: 'authenticated',
  middleware: 'auth',
});
</script>

<template>
  <BaseImageCarousel id="imageCarousel" />
</template>
