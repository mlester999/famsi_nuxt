<template>
  <div
    class="w-full lg:w-1/3 mt-6 lg:mt-0 overflow-hidden space-y-6"
    v-bind="$attrs"
  >
    <div class="w-full flex items-center justify-between">
      <span class="font-medium">{{ title }}</span>
    </div>
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div
          class="px-2 sm:px-6 py-2 align-middle inline-block min-w-full overflow-hidden"
        >
          <table class="min-w-full">
            <tbody>
              <tr
                v-for="data in datasets"
                :key="data.id"
                class="border-b border-gray-200"
              >
                <td class="py-4 whitespace-nowrap">
                  <div class="flex items-center space-x-2">
                    <p class="text-center">{{ data.id }}. {{ data.title }}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LandingCryptoStatistic',
  props: {
    title: {
      type: String,
      default: '',
    },
    datasets: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
