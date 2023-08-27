<script setup>
const props = defineProps({
  type: String,
});
</script>

<template>
  <button
    :type="props.type"
    class="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300"
  >
    <slot></slot>
  </button>
</template>
