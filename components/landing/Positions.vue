<script setup>
defineProps({
  positions: Array,
});
</script>

<template>
  <div
    v-for="position in positions"
    :key="position.id"
    class="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center"
  >
    <h3 class="text-lg text-neutral-800 font-semibold">{{ position.title }}</h3>
    <p class="text-sm text-gray-700 leading-relaxed">
      {{ position.description }}
    </p>
  </div>
</template>
