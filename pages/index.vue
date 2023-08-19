<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24">
      <BaseSection>
        <div
          class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left"
        >
          <span
            data-aos="fade-right"
            data-aos-once="true"
            class="text-base text-green-500 font-semibold uppercase tracking-wider"
            >Apply Now!</span
          >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            A Service Provider Of
            <span class="text-header-gradient">Highly Trained</span> and
            Superior Workforce
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            class="paragraph hidden sm:block"
          >
            It is built to help Filipinos find decent job while giving our
            customer the benefits of Control, Compliance, Efficiency, and Cost
            Savings.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <BaseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
            >
              Get Started
            </BaseButton>
            <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
            >
              <span>View Openings</span>
              <ChevronDownIcon :size="20" class="mt-1 text-[#0c66ee]" />
            </BaseButton>
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              src="~/assets/img/famsi_poster1.png"
              class="-mt-4"
              alt=""
            />
          </div>
        </div>
      </BaseSection>
    </section>

    <!-- Crypto statistic section -->
    <section
      class="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
    >
      <div class="w-full flex flex-col lg:flex-row items-center justify-center">
        <LandingCryptoStatistic
          data-aos="fade-up"
          title="✔️ Qualifications"
          :datasets="qualifications"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="150"
          title="🥰 Benefits"
          :datasets="benefits"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="300"
          title="📌 Company Assignments Location"
          :datasets="companyAssignments"
          class="lg:px-8"
        />
      </div>
    </section>

    <!-- Partners section -->
    <section
      class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden"
    >
      <div
        class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center"
      >
        <h3
          data-aos="flip-down"
          class="text-2xl text-neutral-800 font-semibold"
        >
          We at Fully Advanced Manpower Solutions, Inc.
        </h3>
        <p data-aos="flip-down" class="paragraph max-w-2xl">
          accepts all and temporary staffing requirements that may required by
          existing clients and prospective business associates. We're partners
          with countless major organisations around the globe
        </p>
        <div
          data-aos="fade-up"
          class="flex flex-wrap items-center justify-center"
        >
          <LandingPartnerImage
            v-for="img in [
              'clever.png',
              'diamon-cutts.png',
              'swiss-finance.png',
              'gambio.png',
            ]"
            :key="img"
            :img="img"
          />
        </div>
      </div>
    </section>

    <!-- Advanced trading tools section -->
    <section
      class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden"
    >
      <div
        class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6"
      >
        <LandingTradingToolImage class="sm:hidden" />
        <div
          data-aos="fade-right"
          class="col-span-12 lg:col-span-6 space-y-12 sm:space-y-6 px-4 sm:px-6 mt-8"
        >
          <h2 class="text-4xl font-semibold">
            For those
            <span class="text-header-gradient">interested applicants</span> may
            visit our office near you.
          </h2>
          <div class="space-y-2">
            <h4 class="text-xl font-medium">
              📍2/F JEC Bldg. National Highway, Brgy. Banay-banay, Cabuyao City,
              Laguna.
            </h4>
            <p class="paragraph text-sm xl:text-base">
              Landmark: In front of Banay-banay Brgy Hall. near Super 8.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-xl font-medium">
              📍3rd floor Piazza de Juan Bldg. Crisanto M. Delos Reyes Ave.
              Brgy. Manggahan, General Trias Cavite
            </h4>
            <p class="paragraph text-sm xl:text-base">
              Landmark : At the top of Bon Appetea.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-xl font-medium">
              📍J&M Building, Brgy. Santiago, Malvar, Batangas.
            </h4>
            <p class="paragraph text-sm xl:text-base">
              Landmark : Near the Jollibee.
            </p>
          </div>
        </div>
        <LandingGoogleMapPin data-aos="fade-left" class="hidden sm:block" />
      </div>
    </section>

    <!-- Getting started section -->
    <section
      class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden"
    >
      <div class="w-full py-16 flex flex-col items-center">
        <h2
          data-aos="flip-down"
          class="text-3xl sm:text-4xl font-semibold text-center"
        >
          For those interested applicants may visit our office near you.
        </h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingStep v-for="step in steps" :key="step.title" :step="step" />
        </div>
      </div>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div
          data-aos="fade-right"
          data-aos-delay="150"
          class="col-span-12 lg:col-span-6"
        >
          <div class="w-full">
            <!-- <img
              :src="require('~/assets/img/faq.webp')"
              class="w-full"
              alt=""
            /> -->
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8"
        >
          <span
            class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2"
            >Support</span
          >
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">
            Frequently asked questions
          </h2>

          <ul class="shadow-box">
            <BaseAccordion
              v-for="(accordion, index) in accordions"
              :key="index"
              :accordion="accordion"
            />
          </ul>
        </div>
      </BaseSection>
    </section>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos';
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      currencySelected: {
        img: 'country-icon/eng.png',
        name: 'USD',
      },
      currencies: [
        {
          img: 'country-icon/eng.png',
          name: 'USD',
        },
      ],
      cryptoSelected: {
        img: 'crypto-icon/bitcoin.png',
        name: 'BTC',
      },
      cryptocurrencies: [
        {
          img: 'crypto-icon/bitcoin.png',
          name: 'BTC',
        },
      ],
      qualifications: [
        {
          id: 1,
          name: 'Female or Male',
        },
        {
          id: 2,
          name: 'Single or Married',
        },
        {
          id: 3,
          name: 'At least HS/JHS/SHS/ALS Graduate',
        },
        {
          id: 4,
          name: 'With or Without Experience',
        },
        {
          id: 5,
          name: 'Flexible and Hardworking',
        },
      ],
      benefits: [
        {
          id: 1,
          name: 'HMO',
        },
        {
          id: 2,
          name: 'Mandatory Benefits',
        },
        {
          id: 3,
          name: 'Probationary Employment',
        },
        {
          id: 4,
          name: 'Service Incentive Leave',
        },
        {
          id: 5,
          name: 'Life and Accident Insurance',
        },
      ],
      companyAssignments: [
        {
          id: 1,
          name: 'Science Park 1 Diezmo Cabuyao Laguna',
        },
        {
          id: 2,
          name: 'Science Park 2 Real Calamba Laguna',
        },
        {
          id: 3,
          name: 'Laguna Technopark Biñan Laguna',
        },
        {
          id: 4,
          name: 'Gen. Trias Cavite',
        },
        {
          id: 5,
          name: 'LIMA Batangas',
        },
      ],
      steps: [
        {
          title: 'HR Supervisor',
          description: 'Full-Time Job.',
        },
        {
          title: 'Welder',
          description: 'Full-Time Job.',
        },
        {
          title: 'Driver (Restrictions: 1,2,3)',
          description: 'Full-Time Job.',
        },
      ],
    };
  },
};
</script>
<style scoped>
.text-header-gradient {
  background: rgb(59, 180, 77);
  background: linear-gradient(
    169.4deg,
    #3bb44d -6.01%,
    #0db865 36.87%,
    #2ea978 78.04%,
    #0dbf6f 103.77%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
