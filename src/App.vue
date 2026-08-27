<template>
  <div class="bg-[#111827] min-h-screen">
    <!-- Wrapping all components -->
    <Suspense>
      <template #default>
        <div>
          <NavBar />
          <HeroSection />
          <ServiceSection />
          <AboutSection />
          <ExperienceAndSkills />
          <LatestProjSection />
          <ContactSection />
          <TestimonialsSection />
          <Footer />
          <BackToTop />
        </div>
      </template>

      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const NavBar = defineAsyncComponent(() => import("./components/NavBar.vue"));
const HeroSection = defineAsyncComponent(() => import("./components/HeroSection.vue"));
const ServiceSection = defineAsyncComponent(() => import("./components/ServiceSection.vue"));
const AboutSection = defineAsyncComponent(() => import("./components/AboutSection.vue"));
const ExperienceAndSkills = defineAsyncComponent(() => import("./components/ExperienceAndSkills.vue"));
const LatestProjSection = defineAsyncComponent(() => import("./components/LatestProjSection.vue"));
const ContactSection = defineAsyncComponent(() => import("./components/ContactSection.vue"));
const TestimonialsSection = defineAsyncComponent(() => import("./components/TestimonialsSection.vue"));
const Footer = defineAsyncComponent(() => import("./components/Footer.vue"));
const BackToTop = defineAsyncComponent(() => import("./components/BackToTop.vue"));
const LoadingSpinner = defineAsyncComponent(() => import("./components/loadingSpinner.vue"));
</script>
<style>
/* Global styles can be added here if needed */
*{
  scrollbar-width: thin;
  scrollbar-color: #111827  #f1f1f1;
}
</style>