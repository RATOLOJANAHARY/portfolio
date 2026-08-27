<template>
  <section class="text-white mt-20" id="services">
    <div class="px-4 xl:pl-16">
      <h2 class="text-3xl font-bold mb-4">Mes services</h2>
    </div>
    <div
      class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <div
        v-for="service in services"
        :key="service.id"
        data-aos="fade-up"
        class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] transform transition duration-500 hover:scale-105 hover:bg-[#1f1f3a] hover:shadow-2xl cursor-pointer group"
      >
        <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <img
            :src="service.icon"
            alt="service icon"
            class="mx-auto h-full w-full object-contain transition duration-500 group-hover:rotate-12"
          />
        </div>
        <div class="text-center">
          <h3
            class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary lg:text-xl transition duration-300 group-hover:scale-105"
          >
            {{ service.name }}
          </h3>
          <p class="pt-4 text-sm text-gray-300 md:text-base transition duration-300 group-hover:text-white">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const services = ref([
  {
    id: 1,
    icon: "https://img.icons8.com/ios-filled/50/ffffff/google-code.png",
    name: "Frontend Development",
    description:
      "Création de sites web réactifs et dynamiques en utilisant des technologies modernes comme Vue.js, Nuxt.js, Angular",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/ios-filled/50/ffffff/document.png",
    name: "Redaction Technique",
    description:
      "Création de documentation complète et de tutoriels pour les applications logicielles et les API.",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/ios-filled/50/ffffff/smartphone-tablet.png",
    name: "Backend Development",
    description:
      "Développement backend d’applications web avec Laravel et PHP, en mettant l’accent sur la performance, la sécurité et la maintenabilité.",
  },
  {
    id: 4,
    icon: "https://img.icons8.com/ios-filled/50/ffffff/email-open.png",
    name: "Mobile Development",
    description:
      "Développement d’applications mobiles performantes et intuitives pour Android et iOS en utilisant Ionic.",
  },
  {
    id: 5,
    icon: "https://img.icons8.com/ios-filled/50/ffffff/design.png",
    name: "Graphic Design",
    description:
      "Création de designs attrayants pour des sites web, des applications et des supports marketing en utilisant Figma.",
  },
  {
    id: 6,
    icon: "https://img.icons8.com/ios-filled/50/ffffff/web-design.png",
    name: "Web Design",
    description:
      "Création de designs attrayants et conviviaux pour des sites web et des applications web.",
  },
]);
</script>
