<script setup>
defineProps({
  offices: Array,
});
</script>

<template>
  <div v-for="office in offices" :key="office.id" class="space-y-2">
    <h4 class="text-xl font-medium">
      {{ office.name }}
    </h4>
    <p class="paragraph text-sm xl:text-base">
      {{ office.landmark }}
    </p>
  </div>
</template>
