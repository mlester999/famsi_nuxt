<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  id: String,
  modelValue: String,
  label: String,
  errors: String,
  canSearch: Boolean,
});

onMounted(async () => {
  await useTwElements();
});

async function useTwElements() {
  const { Select } = await import('tw-elements');

  const options = {
    selectFilter: props.canSearch ?? true,
    selectSize: 'lg',
    selectClearButton: false,
  };

  const mySelect = new Select(document.getElementById(props.id), options);

  twElements.default;
}
</script>

<template>
  <select
    data-te-select-init
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    :id="props.id"
  >
    <slot />
  </select>
  <label data-te-select-label-ref :for="props.id">{{ props.label }} </label>

  <p class="text-red-500 text-sm mt-1 absolute" v-if="errors">
    {{ errors }}
  </p>
</template>
