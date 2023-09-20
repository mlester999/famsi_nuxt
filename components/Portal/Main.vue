<script setup>
import { useMainPortalStore } from '@/store/useMainPortalStore';
import { useLandingPageStore } from '@/store/useLandingPageStore';
import { ref, watch } from 'vue';

const portal = useMainPortalStore();
const landingPage = useLandingPageStore();

const showAdvancedFilters = ref(false);
const selectedJobType = ref(null);
const selectedEmploymentType = ref(null);
let employmentTypesList = ref(null);

const toggleAdvancedFilters = () => {
  showAdvancedFilters.value = !showAdvancedFilters.value;
};

watch(
  () => selectedJobType.value,
  (value) => {
    if (value) {
      employmentTypesList.value = landingPage.employmentTypes.filter(
        (val, index) => val.job_type_id == value
      );
    } else {
      employmentTypesList.value = landingPage.employmentTypes;
    }
  }
);
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
        <option
          v-for="companyAssignment in landingPage.companyAssignments"
          :key="companyAssignment.id"
          :value="companyAssignment.title"
        >
          {{ companyAssignment.title }}
        </option>
      </BaseSelectInput>
    </div>

    <BaseAdvancedButton @click="toggleAdvancedFilters" id="advancedBtn"
      >Advanced</BaseAdvancedButton
    >
  </div>

  <div
    v-if="showAdvancedFilters"
    class="flex mx-auto max-w-6xl justify-center items-center space-x-8"
  >
    <div class="w-full bg-white">
      <BaseSelectInput
        id="jobType"
        v-model="selectedJobType"
        label="Job Type"
        :canSearch="false"
      >
        <option value="" disabled selected hidden></option>

        <option
          v-for="jobType in landingPage.jobTypes"
          :key="jobType.id"
          :value="jobType.id"
        >
          {{ jobType.title }}
        </option>
      </BaseSelectInput>
    </div>

    <div class="w-full bg-white">
      <BaseSelectInput
        id="employmentType"
        v-model="selectedEmploymentType"
        label="Employment Type"
        :canSearch="false"
        :disabled="!Boolean(employmentTypesList)"
      >
        <option value="" disabled selected hidden></option>

        <option
          v-for="employeeType in employmentTypesList"
          :key="employeeType.id"
          :value="employeeType.id"
        >
          {{ employeeType.title }}
        </option>
      </BaseSelectInput>
    </div>

    <div class="w-full bg-white">
      <BaseSelectInput
        id="industry"
        v-model="portal.filter.location"
        label="Location"
        placeholder="Location"
      >
        <option value="All Location" selected>All Location</option>
        <option
          v-for="companyAssignment in landingPage.companyAssignments"
          :key="companyAssignment.id"
          :value="companyAssignment.title"
        >
          {{ companyAssignment.title }}
        </option>
      </BaseSelectInput>
    </div>
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
