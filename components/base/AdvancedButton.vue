<script setup>
const props = defineProps({
  id: String,
});
</script>

<template>
  <button
    class="relative w-1/2 px-4 py-2.5 overflow-hidden font-medium text-blue-600 bg-white border border-blue-600 rounded-lg shadow-inner group"
  >
    <span
      class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-600 group-hover:w-full ease"
    ></span>
    <span
      class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-600 group-hover:w-full ease"
    ></span>
    <span
      class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"
    ></span>
    <span
      class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"
    ></span>
    <span
      class="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-900 opacity-0 group-hover:opacity-100"
    ></span>
    <span
      class="relative flex justify-center items-center space-x-2 transition-colors duration-300 delay-200 group-hover:text-white ease"
      ><slot></slot>
      <IconBottomArrow size="20" />
    </span>
  </button>
</template>
