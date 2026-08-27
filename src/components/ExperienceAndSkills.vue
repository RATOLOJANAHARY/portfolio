<template>
  <section class="text-white mt-18" id="skills">
    <!-- Effet décoratif -->
    <div class="absolute right-0 top-[110rem] h-full justify-end">
      <span class="flex opacity-20">
        <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
        <span
          class="w-32 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
        ></span>
      </span>
    </div>

    <div
      class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16"
    >
      <!-- Skills -->
      <div class="mt-4 md:mt-0 text-left flex-col z-10 h-full w-[80%]">
        <h2 class="text-4xl font-bold text-white text-left mb-4">
          Mes
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            Competences
          </span>
        </h2>

        <div class="mt-8" v-for="skill in skills" :key="skill.id">
          <div class="flex items-end justify-between" data-aos="fade-right">
            <h4 class="font-semibold uppercase text-white">{{ skill.name }}</h4>
            <h3 class="text-2xl font-bold text-white">{{ skill.width }}</h3>
          </div>
          <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
            <div
              class="h-1 rounded-full bg-primary"
              :style="`width: ${skill.width}`"
            ></div>
          </div>
        </div>
      </div>

      <!-- Experience -->
      <div data-aos="flip-left">
        <h2
          class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8"
        >
          Mon Experience
        </h2>

        <div class="space-y-8 py-8" data-aos="fade-left">
          <div
            v-for="element in Experiences"
            :key="element.id"
            class="flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641] hover:scale-105 transition-transform duration-300"
          >
            <!-- Icône -->
            <div class="w-1/4 flex justify-center">
              <i class="fa-solid fa-briefcase text-5xl text-primary"></i>
            </div>

            <!-- Infos -->
            <div class="w-3/4 pl-4">
              <h3
                class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
              >
                {{ element.role }}
              </h3>
              <p class="text-white">{{ element.company }}</p>
              <p class="text-gray-400 text-sm">{{ element.duration }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const skills = ref([
  { id: 1, name: "HTML & CSS & PHP", width: "90%" },
  { id: 2, name: "JavaScript", width: "80%" },
  { id: 3, name: "Vue.js", width: "90%" },
  { id: 4, name: "Vue.js", width: "90%" },
  { id: 5, name: "Angulars.js", width: "85%" },
  { id: 6, name: "Laravel", width: "90%" },
  { id: 6, name: "CMS Magento2", width: "90%" },
  { id: 7, name: "Tailwind CSS", width: "95%" },
  { id: 8, name: "Git & GitHub", width: "85%" },
  { id: 9, name: "FIGMA (UX/UI)", width: "85%" },
  { id: 10, name: "MySQL & POSTGRESQL", width: "85%" },
  { id: 11, name: "AGILE & SCRUM", width: "90%" },
  { id: 12, name: "Trello & Jira", width: "90%" },
]);

const Experiences = ref([
  {
    id: 1,
    role: "Full Stack Developer",
    company: "MG Consulting IT & ACT",
    duration: "Jan 2025 - Present",
  },
  {
    id: 2,
    role: "Junior Web Developer Laravel",
    company: "PRINCEPT-IWEB",
    duration: "Jan 2024 - Dec 2024",
  },
  {
    id: 3,
    role: "CMS Magento2",
    company: "Caruso-Créations",
    duration: "Février 2023 - Dec 2023",
  },
]);
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
</style>
