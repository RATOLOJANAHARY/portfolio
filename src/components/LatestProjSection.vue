<template>
  <section class="text-white mt-20" id="projects">
    <div class="px-4 xl:pl-16">
      <!-- 🔹 Titre + filtres -->
      <div class="mb-4 md:flex md:justify-between xl:pr-16">
        <h2 class="text-4xl font-bold text-white">Mes derniers projets</h2>
        <div class="flex space-x-4 mb-4 md:mt-0">
          <button
            v-for="category in ['Tous', 'Developpement Web', 'Mobile App']"
            :key="category"
            @click="selectedCategory = category"
            class="hover:text-primary transition duration-300 capitalize"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- 🔹 Liste des projets -->
      <div
        class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
        data-aos="fade-right"
      >
        <!-- ✅ Chaque carte projet -->
        <div v-for="project in filteredProjects" :key="project.id">
          <!-- 🖼️ Image + overlay -->
          <div
            class="relative group h-80 rounded-t-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            :style="{
              backgroundImage: 'url(' + project.image + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          >
            <!-- Overlay -->
            <div
              class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
            >
              <!-- 🌐 Lien vers le site web -->
              <a
                :href="project.websiteURL || '#'"
                target="_blank"
                class="h-14 w-14 mr-4 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-10 w-10 text-[#ADB7BE] hover:text-white transition duration-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25"
                  />
                </svg>
              </a>

              <!-- 💻 Lien vers GitHub -->
              <a
                :href="project.gitURL || '#'"
                target="_blank"
                class="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-10 w-10 text-[#ADB7BE] hover:text-white transition duration-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.364 5.12 12 5.12c4.638 0 8.573 3.007 9.963 7.178.07.207.07.433 0 .64C20.573 17.25 16.638 20.257 12 20.257c-4.636 0-8.577-3.007-9.964-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 0 1-6 0 3 3 0 0 1 6 0z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- ✅ Bloc titre + description -->
          <div
            class="text-white rounded-b-xl bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4"
          >
            <h3
              class="text-lg font-semibold uppercase lg:text-xl text-center mb-2"
            >
              {{ project.title }}
            </h3>
            <p class="text-sm text-gray-300 text-center leading-relaxed mb-4">
              {{ project.description }}
            </p>

            <!-- 🧩 Liste des technologies -->
            <div class="flex flex-wrap justify-center p-2.5">
              <div
                v-for="technology in project.technologies"
                :key="technology"
                class="text-center mx-2 my-1 rounded-3xl bg-[#111827] hover:bg-[#1f2937] transition-all duration-300"
                style="
                  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                  border: 1px solid #111827;
                  backdrop-filter: blur(9px);
                  -webkit-backdrop-filter: blur(9px);
                "
              >
                <p class="px-3 py-1 text-sm">{{ technology }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const projects = ref([
  // {
  //   id: 1,
  //   category: "Developpement Frontend",
  //   title: "Project 1",
  //   description: "Site web développé en front-end avec Vue.js et Tailwind.",
  //   image: "src/assets/project.jpg",
  //   gitURL: "https://github.com/",
  //   websiteURL: "https://example.com",
  //   technologies: ["Vue.js 3", "Vuex", "Nuxt"],
  // },
  // {
  //   id: 2,
  //   category: "CMS",
  //   title: "Project 2",
  //   description:
  //     "Front-end e-commerce développé avec PHP, MySQL et l’API Magento.",
  //   image: "src/assets/mobile.jpg",
  //   gitURL: "https://github.com/",
  //   websiteURL: "https://example.com",
  //   technologies: ["Magento2", "MySQL", "PHP"],
  // },
  // {
  //   id: 3,
  //   category: "Developpement FullStack",
  //   title: "Project 3",
  //   description: "Application web responsive pour suivi d’activités fitness.",
  //   image: "src/assets/project.jpg",
  //   gitURL: "https://github.com/",
  //   websiteURL: "https://example.com",
  //   technologies: ["Vue.js 3", "Vuex", "Bootstrap"],
  // },
  // {
  //   id: 4,
  //   category: "Mobile App",
  //   title: "Project 4",
  //   description:
  //     "Portfolio interactif pour une agence digitale avec animations front-end.",
  //   image: "src/assets/project.jpg",
  //   gitURL: "https://github.com/",
  //   websiteURL: "https://example.com",
  //   technologies: ["Vue.js 3", "Socket.io","Laravel", "Tailwind CSS"],
  // },
  // {
  //   id: 5,
  //   category: "web developpement",
  //   title: "Project 5",
  //   description: "Application de chat en temps réel avec interface front-end moderne.",
  //   image: "src/assets/mobile.jpg",
  //   gitURL: "https://github.com/",
  //   websiteURL: "https://example.com",
  //   technologies: ["Vue.js 3", "Vuex", "Express"],
  // },
  // {
  //   id: 6,
  //   category: "Mobile App",
  //   title: "Project 6",
  //   description: "Site vitrine interactif pour une agence avec design responsive.",
  //   image: "src/assets/mobile.jpg",
  //   gitURL: "https://github.com/",
  //   websiteURL: "https://example.com",
  //   technologies: ["Nuxt3", "Vue Router", "Tailwind CSS"],
  // },

   {
    id: 1,
    category: "Developpement Frontend",
    title: "Project 1",
    description: "Site web développé en front-end avec Vue.js et Tailwind.",
    image: "src/assets/E_001.png",
    gitURL: "https://github.com/",
    websiteURL: "https://example.com",
    technologies: ["Vue.js 3", "Vuex", "Nuxt"],
  },
  {
    id: 2,
    category: "CMS",
    title: "Project 2",
    description:
      "Front-end e-commerce développé avec PHP, MySQL et l’API Magento.",
    image: "src/assets/E_002.png",
    gitURL: "https://github.com/",
    websiteURL: "https://example.com",
    technologies: ["Magento2", "MySQL", "PHP"],
  },
  {
    id: 3,
    category: "Developpement FullStack",
    title: "Project 3",
    description: "Application web responsive pour suivi d’activités fitness.",
    image: "src/assets/BO_001.png",
    gitURL: "https://github.com/",
    websiteURL: "https://example.com",
    technologies: ["Vue.js 3", "Vuex", "Bootstrap"],
  },
  {
    id: 4,
    category: "Mobile App",
    title: "Project 4",
    description:
      "Portfolio interactif pour une agence digitale avec animations front-end.",
    image: "src/assets/PR_BO_001.png",
    gitURL: "https://github.com/",
    websiteURL: "https://example.com",
    technologies: ["Vue.js 3", "Socket.io","Laravel", "Tailwind CSS"],
  },
  {
    id: 5,
    category: "web developpement",
    title: "Project 5",
    description: "Application de chat en temps réel avec interface front-end moderne.",
    image: "src/assets/mobile.jpg",
    gitURL: "https://github.com/",
    websiteURL: "https://example.com",
    technologies: ["Vue.js 3", "Vuex", "Express"],
  },
  {
    id: 6,
    category: "Mobile App",
    title: "Project 6",
    description: "Site vitrine interactif pour une agence avec design responsive.",
    image: "src/assets/mobile.jpg",
    gitURL: "https://github.com/",
    websiteURL: "https://example.com",
    technologies: ["Nuxt3", "Vue Router", "Tailwind CSS"],
  },
]);

const selectedCategory = ref("Tous");

const filteredProjects = computed(() => {
  if (selectedCategory.value === "Tous") return projects.value;
  return projects.value.filter(
    (project) =>
      project.category.toLowerCase() === selectedCategory.value.toLowerCase()
  );
});
</script>
