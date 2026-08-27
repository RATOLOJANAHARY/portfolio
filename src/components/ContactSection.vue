<template>
  <section class="text-white mt-20" id="contact">
    <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">
      Contactez-moi
    </h2>

    <div
      class="grid md:grid-cols-2 gap-12 relative px-4 xl:px-16 mt-8 items-start"
      data-aos="zoom-in-up"
    >
      <!-- 🟣 Partie gauche : infos + texte -->
      <div>
        <p class="text-[#adb7be] leading-relaxed mb-8">
          | N’hésitez pas à me contacter pour toute question ou projet. Je suis
          disponible pour discuter de vos besoins et proposer des solutions
          adaptées. Je m’engage à répondre rapidement et efficacement à chaque
          demande.
        </p>

        <!-- 🔹 Informations de contact -->
        <div class="space-y-8">
          <!-- Email -->
          <div class="flex items-center">
            <div
              class="bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#111a3e] backdrop-blur-md"
            >
              <img
                src="https://img.icons8.com/metro/50/ffffff/new-post.png"
                alt="new-post"
                class="w-6"
              />
            </div>
            <div class="ml-5">
              <h4 class="font-semibold">Email</h4>
              <p class="text-[#adb7be]">rjandrejean@gmail.com</p>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex items-center">
            <div
              class="bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#111a3e] backdrop-blur-md"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
                alt="phone"
                class="w-6"
              />
            </div>
            <div class="ml-5">
              <h4 class="font-semibold">Phone</h4>
              <p class="text-[#adb7be]">(+261) 34 47 002 69</p>
            </div>
          </div>

          <!-- LinkedIn -->
          <div class="flex items-center">
            <div
              class="bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#111a3e] backdrop-blur-md"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                alt="linkedin"
                class="w-6"
              />
            </div>
            <div class="ml-5">
              <h4 class="font-semibold">LinkedIn</h4>
              <p class="text-[#adb7be]">www.linkedin.com</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 🟠 Partie droite : formulaire -->
      <div
        class="bg-[#0d1435] w-full rounded-2xl p-6 md:p-8 border border-[#111a3e] backdrop-blur-md"
        data-aos="zoom-in-up"
      >
        <form class="flex flex-col space-y-6">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="bg-[#111827] text-gray-100 text-sm rounded-lg block w-full p-3 placeholder-gray-400"
              placeholder="email@gmail.com"
              name="email"
            />
          </div>

          <div>
            <label for="subject" class="block mb-2 text-sm font-medium"
              >Objet</label
            >
            <input
              type="text"
              id="objet"
              class="bg-[#111827] text-gray-100 text-sm rounded-lg block w-full p-3 placeholder-gray-400"
              placeholder="objet"
              name="objet"
            />
          </div>

          <div>
            <label for="message" class="block mb-2 text-sm font-medium"
              >Message</label
            >
            <textarea
              id="message"
              rows="4"
              class="bg-[#111827] text-gray-100 text-sm rounded-lg block w-full p-3 placeholder-gray-400"
              placeholder="Parlons de..."
              name="message"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full sm:w-auto px-6 py-3 rounded-full text-white font-semibold bg-[#ff7b00] hover:bg-[#ff9000] transition-colors duration-200"
          >
            Envoyer le message
          </button>
        </form>
      </div>
      <div
        class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 -translate-1/2"
      ></div>
    </div>
  </section>
</template>

<script setup></script>
