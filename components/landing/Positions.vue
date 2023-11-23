<script setup>
defineProps({
  positions: Array,
});
</script>

<template>
  <div
    v-for="position in positions"
    :key="position.id"
    class="max-w-[280px] xl:max-w-[363px] space-y-4 sm:space-y-2 mx-4 my-8"
  >

    <h3 class="text-lg text-neutral-800 font-semibold">{{ position.title }}</h3>
    <p class="text-sm text-gray-700 leading-relaxed">
      {{ position.description }}
    </p>
    <NuxtLink to="/login">
          <base-button
            class="px-8 xl:px-10 py-3 mt-3 text-white bg-blue-500"
          >
            Apply Now
          </base-button>
        </NuxtLink>
  </div>
</template>
