<script setup>
defineProps({
  home: String,
  homeLink: String,
  currentPage: String,
  currentPageLink: String,
});
</script>

<template>
  <nav class="bg-grey-light w-full rounded-md px-4 pb-4">
    <ol class="list-none flex">
      <li>
        <a
          :href="homeLink"
          class="mx-3 text-blue-500 transition duration-150 hover:underline ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
          >{{ home }}</a
        >
      </li>
      <li>
        <span class="text-neutral-500 dark:text-neutral-400">></span>
      </li>
      <li>
        <a
          :href="currentPageLink"
          class="mx-3 text-blue-500 transition duration-150 hover:underline ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
          >{{ currentPage }}</a
        >
      </li>
      <li>
        <span class="text-neutral-500 dark:text-neutral-400">></span>
      </li>
      <li class="mx-3 text-neutral-500 dark:text-neutral-400">Apply now</li>
    </ol>
  </nav>
</template>
