<script setup>
import { useFilterJobStore } from '@/store/useFilterJobStore';

const filter = useFilterJobStore();
</script>

<template>
  <BaseImageCarousel id="imageCarousel" />

  <div class="flex p-8 mx-auto max-w-6xl justify-center items-center space-x-8">
    <BaseSearchBar
      id="searchJob"
      v-model="filter.search"
      label="search"
      placeholder="Search for Job Title..."
    />

    <div class="w-full">
      <BaseSelectInput
        id="jobLocation"
        v-model="filter.location"
        label="Location"
        placeholder="Location"
      >
        <option value="" disabled selected hidden></option>
        <option value="Science Park 1 Diezmo Cabuyao Laguna">
          Science Park 1 Diezmo Cabuyao Laguna
        </option>
        <option value="Science Park 2 Real Calamba Laguna">
          Science Park 2 Real Calamba Laguna
        </option>
        <option value="Laguna Technopark Biñan Laguna">
          Laguna Technopark Biñan Laguna
        </option>
        <option value="Gen. Trias Cavite">Gen. Trias Cavite</option>
        <option value="LIMA Batangas">LIMA Batangas</option>
      </BaseSelectInput>
    </div>

    <BaseAdvancedButton id="advancedBtn">Advanced</BaseAdvancedButton>
  </div>

  <div
    class="flex py-8 mx-auto max-w-6xl justify-center items-center space-x-8"
  >
    <BaseCardJob />
  </div>
</template>
