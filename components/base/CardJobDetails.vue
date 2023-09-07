<script setup>
const props = defineProps({
  details: Object,
});

const date = new Date(props.details.created_at);
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
const day = String(date.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

const slug = props.details.title
  .toLowerCase()
  .replaceAll(' ', '-')
  .replaceAll('.', '')
  .replaceAll('/', '-');
const readMore = `/portal/job/${props.details.id}/${slug}`;
</script>

<template>
  <div class="text-white py-5 px-5">
    <div class="flex flex-wrap -mx-3">
      <div class="w-full sm:w-1/2 md:w-2/3 px-3 text-left space-y-4">
        <div class="p-5 xl:px-8 md:py-5 space-y-2 bg-white shadow-xl">
          <div class="w-full text-left text-md text-gray-700">
            <div class="flex items-center border-t-2 border-gray-200">
              <div class="md:w-1/2 font-semibold">
                <p class="py-2">Job Title:</p>
              </div>

              <div class="w-full">
                <p class="px-4 py-2 font-semibold text-blue-500">
                  {{ details.title }}
                </p>
              </div>
            </div>

            <div class="flex items-center border-t-2 border-gray-200">
              <div class="md:w-1/2 font-semibold">
                <p class="py-2">Job Type:</p>
              </div>

              <div class="w-full">
                <p class="px-4 py-2">{{ details.job_type }}</p>
              </div>
            </div>

            <div class="flex items-center border-t-2 border-gray-200">
              <div class="md:w-1/2 font-semibold">
                <p class="py-2">Employee Type:</p>
              </div>

              <div class="w-full">
                <p class="px-4 py-2">{{ details.employment_type }}</p>
              </div>
            </div>

            <div class="flex items-center border-t-2 border-gray-200">
              <div class="md:w-1/2 font-semibold">
                <p class="py-2">Location:</p>
              </div>

              <div class="w-full">
                <p class="px-4 py-2">{{ details.location }}</p>
              </div>
            </div>

            <div class="flex items-center border-t-2 border-gray-200">
              <div class="md:w-1/2 font-semibold">
                <p class="py-2">Job Published:</p>
              </div>

              <div class="w-full">
                <p class="px-4 py-2">{{ formattedDate }}</p>
              </div>
            </div>

            <div class="flex items-center border-t-2 border-gray-200">
              <div class="md:w-1/2 font-semibold">
                <p class="py-2">Job ID:</p>
              </div>

              <div class="w-full">
                <p class="px-4 py-2">{{ details.id }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="p-5 xl:px-8 md:py-5 space-y-4 bg-white shadow-xl">
          <div>
            <h3
              class="text-2xl font-semibold text-black hover:text-blue-600 hover:text-underline"
            >
              Job Description
            </h3>

            <p class="text-sm text-black leading-relaxed">
              {{ details.description }}
            </p>
          </div>

          <div class="text-black" v-html="details.company_profile"></div>

          <div class="text-black space-y-2">
            <div class="flex items-center space-x-2">
              <p class="font-bold">Job type:</p>
              <p>{{ details.job_type }}</p>
            </div>

            <div class="flex items-center space-x-2">
              <p class="font-bold">Location:</p>
              <p>{{ details.location }}</p>
            </div>

            <div class="flex items-center space-x-2">
              <p class="font-bold">Industry:</p>
              <p>N/A</p>
            </div>

            <div class="flex items-center space-x-2">
              <p class="font-bold">Expertise:</p>
              <p>N/A</p>
            </div>

            <div class="flex items-center space-x-2">
              <p class="font-bold">Working Hours:</p>
              <p>{{ details.schedule }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 px-3 text-center space-y-4">
        <div class="w-full text-left text-md">
          <NuxtLink :to="readMore">
            <button
              class="bg-blue-500 uppercase rounded-md hover:bg-blue-600 transition duration-150 text-white px-4 py-6 w-full"
            >
              Apply Now
            </button>
          </NuxtLink>
        </div>

        <div
          class="bg-white shadow-xl text-gray-700 flex flex-wrap items-center"
        >
          <div class="w-full text-left text-md">
            <div class="flex items-center border-gray-200">
              <div class="w-full text-center">
                <p class="p-4 uppercase text-xl font-semibold text-blue-500">
                  Share this job
                </p>
              </div>
            </div>

            <div class="flex items-center border-t-2 border-gray-200">
              <div
                class="w-full font-semibold p-4 flex space-x-2 justify-around"
              >
                <a href="/">
                  <img
                    class="w-12 xl:w-18"
                    src="@/assets/social-media/facebook.png"
                  />
                </a>

                <a href="/">
                  <img
                    class="w-12 xl:w-18"
                    src="@/assets/social-media/twitter.png"
                  />
                </a>

                <a href="/">
                  <img
                    class="w-12 xl:w-18"
                    src="@/assets/social-media/instagram.png"
                  />
                </a>
                <a href="/">
                  <img
                    class="w-12 xl:w-18"
                    src="@/assets/social-media/linkedin.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="p-5 xl:px-4 md:py-5 bg-white shadow-xl text-gray-700 flex flex-wrap items-center"
        >
          <div class="w-full text-left text-md">
            <div class="flex items-center border-t-2 border-gray-200">
              <div class="md:w-1/2 font-semibold">
                <p class="py-2">Location:</p>
              </div>

              <div class="w-full">
                <p class="px-4 py-2">{{ details.location }}</p>
              </div>
            </div>

            <div class="flex items-center border-t-2 border-gray-200">
              <div class="md:w-1/2 font-semibold">
                <p class="py-2">Job Type:</p>
              </div>

              <div class="w-full">
                <p class="px-4 py-2">{{ details.job_type }}</p>
              </div>
            </div>

            <div class="flex items-center border-t-2 border-gray-200">
              <div class="md:w-1/2 font-semibold">
                <p class="py-2">Employee Type:</p>
              </div>

              <div class="w-full">
                <p class="px-4 py-2">{{ details.employment_type }}</p>
              </div>
            </div>

            <div class="flex items-center border-t-2 border-gray-200">
              <div class="md:w-1/2 font-semibold">
                <p class="py-2">Job Published:</p>
              </div>

              <div class="w-full">
                <p class="px-4 py-2">{{ formattedDate }}</p>
              </div>
            </div>

            <div class="flex items-center border-t-2 border-gray-200">
              <div class="md:w-1/2 font-semibold">
                <p class="py-2">Job ID:</p>
              </div>

              <div class="w-full">
                <p class="px-4 py-2">{{ details.id }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
