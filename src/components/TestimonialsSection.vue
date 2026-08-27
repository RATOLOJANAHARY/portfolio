<template>
  <section class="text-white mt-20" id="testimonials" data-aos="zoom-in-up">
    <h2 class="text-4xl font-bold text-white text-left mb-4 xl:pl-16">
      Témoignages
    </h2>
    <div class="px-4 xl:px-16">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="element in testimonials" :key="element.id">
          <div class="carousel__item p-4">
            <div
              class="w-full mx-auto bg-[#111a3e] shadow-lg border border-[#1f1641] p-5 text-white font-light mb-6"
            >
              <div class="w-full flex mb-4 items-center">
                <div
                  class="overflow-hidden rounded-full w-10 bg-gray-50 border border-gray-200"
                >
                  <img
                    :src="element.image"
                    alt="testimonial image"
                    loading="lazy"
                  />
                </div>
                <!--<h6 class="ml-4 font-bold text-sm uppercase text-white">
                  {{ element.fullName }}
                </h6>-->
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight">
                  <span
                    class="text-lg leading-none italic font-bold text-white mr-1"
                    >"</span
                  >
                  {{ element.comment }}
                  <span
                    class="text-lg leading-none italic font-bold text-white mr-1"
                    >"</span
                  >
                </p>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

//Carouse settings
const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

//Breakpoints
const breakpoints = ref({
  700: {
    itemsToShow: 2.5,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
});

const testimonials = [
  {
    id: 1,
    image: "src/assets/image.jpg",
    comment:
      "Nous avons collaboré avec André pour le développement de notre application web. Son expertise en Vue.js et Laravel a permis de livrer un projet performant et fiable. Son professionnalisme et sa réactivité sont exemplaires.",
  },
  {
    id: 2,
    image: "src/assets/image.jpg",
    comment:
      "André a su transformer nos idées en une solution concrète et efficace. Ses compétences techniques et sa capacité à comprendre nos besoins ont été un vrai atout pour notre projet.",
  },
  {
    id: 3,
    image: "src/assets/image.jpg",
    comment:
      "Travail remarquable ! André est un développeur full-stack talentueux, capable de gérer à la fois le front-end avec Nuxt.js et Angular, et le back-end avec Laravel. Le projet a été livré dans les délais et avec une qualité exceptionnelle.",
  },
  {
    id: 4,
    image: "src/assets/image.jpg",
    comment:
      "Nous avons apprécié le sérieux et la créativité d'André. Il propose toujours des solutions adaptées et innovantes pour améliorer l'expérience utilisateur de nos applications.",
  },
  {
    id: 5,
    image: "src/assets/image.jpg",
    comment:
      "André est un développeur fiable et compétent. Ses connaissances en développement web et mobile ont été cruciales pour le succès de notre projet. Nous recommandons vivement ses services.",
  },
];
</script>
<style>
.carousel__prev,
.carousel__next {
  color: white !important;
}
</style>
