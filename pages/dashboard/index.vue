<script setup>
definePageMeta({
  layout: 'authenticated',
  middleware: 'auth',
});
</script>

<template>
  <DashboardMain />
</template>
