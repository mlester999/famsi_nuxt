<script setup>
import { useMainPortalStore } from '@/store/useMainPortalStore';

const portal = useMainPortalStore();
</script>

<template>
  <BaseImageCarousel id="imageCarousel" />

  <div
    class="flex py-8 mx-auto max-w-6xl justify-center items-center space-x-8"
  >
    <BaseSearchBar
      id="searchJob"
      v-model="portal.filter.search"
      label="search"
      placeholder="Search for Job Title..."
    />

    <div class="w-full bg-white">
      <BaseSelectInput
        id="jobLocation"
        v-model="portal.filter.location"
        label="Location"
        placeholder="Location"
      >
        <option value="" disabled selected hidden></option>
        <option value="All Location" selected>All Location</option>
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
    v-if="portal.isLoading"
    class="flex flex-col py-8 mx-auto max-w-6xl justify-center items-center space-y-0.5"
  >
    <div class="text-white py-2 px-2 w-full">
      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3 text-center">
          <div class="p-5 xl:px-0 md:py-5 space-y-2">
            <BaseLoadingDetails />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    class="flex flex-col py-8 mx-auto max-w-6xl justify-center items-center space-y-0.5"
  >
    <template v-if="portal.allJobPositions.length === 0">
      <div class="bg-white shadow-xl text-white py-2 px-2 w-full">
        <div class="flex flex-wrap -mx-3">
          <div class="w-full px-3 text-center">
            <div class="p-5 xl:px-0 md:py-5 space-y-2">
              <h1 class="text-xl text-gray-800">No Job found 😰</h1>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template
      v-else
      v-for="jobPosition in portal.allJobPositions.slice().reverse()"
      :key="jobPosition.id"
    >
      <BaseCardJob :details="jobPosition" />
    </template>
  </div>
</template>
