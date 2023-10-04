<script setup>
import { useMyApplicationsStore } from '@/store/useMyApplicationsStore';
import { useAuthStore } from '@/store/useAuthStore';
import { useLandingPageStore } from '@/store/useLandingPageStore';
import { ref, watch } from 'vue';

const { user } = useAuthStore();
const applications = useMyApplicationsStore();
const landingPage = useLandingPageStore();

const showAdvancedFilters = ref(false);

const toggleAdvancedFilters = () => {
  showAdvancedFilters.value = !showAdvancedFilters.value;
};
</script>

<template>
  <BaseImageCarousel id="imageCarousel" />

  <div
    class="flex py-8 mx-auto max-w-6xl justify-center items-center space-x-8"
  >
    <BaseSearchBar
      id="searchJob"
      v-model="applications.filter.search"
      label="search"
      placeholder="Search for Job Title..."
    />

    <div class="w-full bg-white">
      <BaseSelectInput
        id="jobLocation"
        v-model="applications.filter.location"
        label="Location"
        placeholder="Location"
      >
        <option value="" disabled selected hidden></option>

        <option value="All Location" selected>All Locations</option>
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

  <Transition
    enter-from-class="opacity-0"
    enter-active-class="transition-opacity opacity-0 ease-in-out duration-300"
    leave-active-class="transition-opacity opacity-0 ease-in-out duration-300"
    leave-to-class="opacity-0"
  >
    <div
      v-if="showAdvancedFilters"
      class="flex mx-auto pb-8 max-w-6xl justify-center items-center space-x-8"
    >
      <div class="w-full bg-white">
        <BaseSelectInput
          id="jobType"
          v-model="applications.filter.job_type"
          label="Job Type"
          :canSearch="false"
        >
          <option value="" disabled selected hidden></option>

          <option value="All Job Types" selected>All Job Types</option>
          <option
            v-for="jobType in landingPage.jobTypes"
            :key="jobType.title"
            :value="jobType.title"
          >
            {{ jobType.title }}
          </option>
        </BaseSelectInput>
      </div>

      <div class="w-full bg-white">
        <BaseSelectInput
          id="employmentType"
          v-model="applications.filter.employment_type"
          label="Employment Type"
          :canSearch="false"
        >
          <option value="" disabled selected hidden></option>

          <option value="All Employment Types" selected>
            All Employment Types
          </option>
          <option
            v-for="employeeType in landingPage.employmentTypes"
            :key="employeeType.title"
            :value="employeeType.title"
          >
            {{ employeeType.title }}
          </option>
        </BaseSelectInput>
      </div>

      <div class="w-full bg-white">
        <BaseSelectInput
          id="industry"
          v-model="applications.filter.industry"
          label="Industry"
          placeholder="Industry"
        >
          <option value="" disabled selected hidden></option>

          <option value="All Industries" selected>All Industries</option>
          <option
            v-for="industry in landingPage.industries"
            :key="industry.id"
            :value="industry.title"
          >
            {{ industry.title }}
          </option>
        </BaseSelectInput>
      </div>
    </div>
  </Transition>

  <div
    v-if="
      applications.filter.search ||
      (applications.filter.location &&
        !applications.filter.location.includes('All')) ||
      (applications.filter.job_type &&
        !applications.filter.job_type.includes('All')) ||
      (applications.filter.employment_type &&
        !applications.filter.employment_type.includes('All')) ||
      (applications.filter.industry &&
        !applications.filter.industry.includes('All') &&
        !applications.isLoading)
    "
    class="flex mx-auto max-w-6xl justify-center items-center space-x-8"
  >
    <div class="w-full border-gray-300 space-y-1">
      <h1 class="text-gray-800 font-semibold">Your search query:</h1>

      <div class="flex items-center space-x-2 text-xs">
        <div
          v-if="
            applications.filter.search &&
            !applications.filter.search.includes('All')
          "
          class="bg-white w-max p-2 border-gray-200 border-2 rounded-sm"
        >
          <h1 class="px-0.5">
            Search:
            <span class="text-blue-400 px-0.5">{{
              applications.filter.search
            }}</span>
          </h1>
        </div>

        <div
          v-if="
            applications.filter.location &&
            !applications.filter.location.includes('All')
          "
          class="bg-white w-max p-2 border-gray-200 border-2 rounded-sm"
        >
          <h1 class="px-0.5">
            Location:
            <span class="text-blue-400 px-0.5">{{
              applications.filter.location
            }}</span>
          </h1>
        </div>

        <div
          v-if="
            applications.filter.job_type &&
            !applications.filter.job_type.includes('All')
          "
          class="bg-white w-max p-2 border-gray-200 border-2 rounded-sm"
        >
          <h1 class="px-0.5">
            Job Type:
            <span class="text-blue-400 px-0.5">{{
              applications.filter.job_type
            }}</span>
          </h1>
        </div>

        <div
          v-if="
            applications.filter.employment_type &&
            !applications.filter.employment_type.includes('All')
          "
          class="bg-white w-max p-2 border-gray-200 border-2 rounded-sm"
        >
          <h1 class="px-0.5">
            Employment Type:
            <span class="text-blue-400 px-0.5">{{
              applications.filter.employment_type
            }}</span>
          </h1>
        </div>

        <div
          v-if="
            applications.filter.industry &&
            !applications.filter.industry.includes('All')
          "
          class="bg-white w-max p-2 border-gray-200 border-2 rounded-sm"
        >
          <h1 class="px-0.5">
            Industry:
            <span class="text-blue-400 px-0.5">{{
              applications.filter.industry
            }}</span>
          </h1>
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="applications.isLoading"
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
    <template v-if="applications.allJobApplications.length === 0">
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

    <template v-else>
      <div
        class="text-gray-600 border-b-2 font-semibold py-3 px-5 w-full bg-white border-gray-300"
      >
        <h1
          v-if="
            applications.filter.search ||
            (applications.filter.location &&
              !applications.filter.location.includes('All')) ||
            (applications.filter.job_type &&
              !applications.filter.job_type.includes('All')) ||
            (applications.filter.employment_type &&
              !applications.filter.employment_type.includes('All')) ||
            (applications.filter.industry &&
              !applications.filter.industry.includes('All'))
          "
        >
          Your search has found
          <span class="bg-blue-400 px-3 py-1 rounded-md text-white">{{
            applications.allJobApplications.length
          }}</span>

          <span class="px-1" v-if="applications.allJobApplications.length === 1"
            >applied job.</span
          >
          <span class="px-1" v-else>applied jobs.</span>
        </h1>
        <h1 v-else>
          You've applied for
          <span class="bg-blue-400 px-3 py-1 rounded-md text-white">{{
            applications.allJobApplications.length
          }}</span>
          jobs.
        </h1>
      </div>
      <template
        v-for="jobApplication in applications.allJobApplications
          .slice()
          .reverse()"
        :key="jobApplication.job_position.id"
      >
        <BaseCardMyJobApplications
          :details="jobApplication.job_position"
          :status="jobApplication.status"
        />
      </template>
    </template>
  </div>
</template>
