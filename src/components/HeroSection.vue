<template>
  <section class="relative w-full" data-aos="zoom-in-up">
    <!-- Effet décoratif -->
    <div class="absolute top-0 inset-x-0 h-64 flex items-start">
      <div
        class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"
      ></div>
      <div
        class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"
      ></div>
    </div>

    <!-- Contenu principal -->
    <div
      class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative"
    >
      <div
        class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto"
      >
        <!-- Partie gauche -->
        <div class="lg:py-6">
          <div class="text-center lg:text-left">
            <h1
              class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl"
            >
              Bonjour, je suis
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500"
              >
                André
              </span>
            </h1>
          </div>

          <p
            class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl"
          >
            En tant que développeur full-stack maîtrisant Vue.js, Nuxt.js,
            Angular et Laravel pour le backend, je conçois et développe des
            applications web modernes, performantes et évolutives. J’accorde une
            attention particulière à la qualité du code, à l’expérience
            utilisateur et à la fiabilité des fonctionnalités afin de répondre
            efficacement aux besoins des projets.
          </p>

          <div
            class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
          >
            <!-- Bouton Hire Me -->
            <button
              class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max justify-center overflow-hidden"
            >
              <span
                class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent"
              ></span>
              <span
                class="relative flex items-center justify-center text-white font-medium"
              >
                Engagez-moi
              </span>
            </button>

            <!-- Bouton Download Resume -->
            <!--<a
              :href="cvPath"
              download="resume.pdf"
              target="_blank"
              class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all ease-in-out"
            >-->
            <a
              :href="cvPath"
              download="Cv_Jean_André_RATOLOJANAHARY.pdf"
              target="_blank"
              class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all ease-in-out"
            >
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2"
              >
                <path
                  d="M13 9L9 13M9 13L5 9M9 13V1"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <span class="font-medium">Download CV</span>
            </a>
          </div>
        </div>

        <!-- Partie droite : image -->
        <div class="lg:h-full md:flex">
          <div class="flex w-full h-96 min-h-[24rem] items-center relative">
            <div
              class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"
            ></div>
            <div
              class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-40 sm:right-16 rounded-full shadow-lg border border-primary"
            >
              <img
                src="@/assets/moi.jpeg"
                alt="André"
                width="500"
                height="auto"
                loading="lazy"
                class="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const cvPath = "/Cv_Jean_André_RATOLOJANAHARY.pdf";
</script>
