<template>
  <section class="text-white mt-18" id="about">
    <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
      <div
        class="h-24 w-64 bg-gradient-to-br from-primary blur-2xl to-[#570cac] opacity-20"
      ></div>
    </div>

    <div
      class="md:grid md:grid-cols-2 gap-12 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 relative z-10"
    >
      <div data-aos="flip-right">
        <h2 class="text-4xl font-bold text-white text-left mb-8">
         Ma formation
        </h2>

        <div class="space-y-8 py-8">
          <div
            v-for="element in education"
            :key="element.id"
            class="flex items-center w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-4"
          >
            <div class="w-1/4 flex justify-center">
              <img
                src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
                alt="Graduation Cap"
              />
            </div>

            <div class="w-3/4 pl-4">
              <h3
                class="text-lg font-semibold uppercase text-transparent bg-gradient-to-r bg-clip-text from-primary to-secondary lg:text-xl"
              >
                {{ element.School }}
              </h3>
              <p class="text-white">{{ element.programme }}</p>
              <p class="text-white">{{ element.year }}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full"
        data-aos="flip-right"
      >
        <h2 class="text-4xl font-bold text-white md:text-left mb-4">
          Plus
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            À propos
          </span>
          Moi
        </h2>
        <p class="text-base lg:text-lg mt-8 py-4 leading-relaxed text-gray-300">
          Ingénieur en informatique avec 3 années d’expérience en tant que
          développeur, spécialisé dans le développement d’applications web et
          mobiles. Je maîtrise les technologies modernes telles que Vue.js,
          Nuxt.js, Angular, Laravel et Ionic, et je conçois des solutions
          performantes, évolutives et orientées utilisateur pour répondre aux
          besoins des projets.
        </p>
        <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
          <div
            class="text-center rounded-xl bg-[#111a3e] shadow-lg border-[#1f1641] p-3"
          >
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">
              +20
            </h3>
            <p class="text-sm sm:text-base text-gray-300">Clients Satisfaits</p>
          </div>
          <div
            class="text-center rounded-xl bg-[#111a3e] shadow-lg border-[#1f1641] p-3"
          >
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">
              +10
            </h3>
            <p class="text-sm sm:text-base text-gray-300">Projets</p>
          </div>

          <div
            class="text-center rounded-xl bg-[#111a3e] shadow-lg border-[#1f1641] p-3"
          >
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">
              3
            </h3>
            <p class="text-sm sm:text-base text-gray-300">Années d'expérience</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const education = ref([
  {
    id: 1,
    School: "ENI",
    programme: "Master en Génie logiciel – Ingénierie et gestion de bases de données",
    year: "2021 - 2023",
  },
  {
    id: 2,
    School: "ENI",
    programme: "Licence en Génie logiciel – Ingénierie et gestion de bases de données",
    year: "2018 - 2021",
  },
]);
</script>
