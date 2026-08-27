<template>
  <div class="flex items-center justify-center h-screen">
    <svg
      class="animate-spin h-16 w-16 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#ec4899" />
        </linearGradient>
      </defs>
      <!-- Cercle de fond -->
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="url(#gradient1)"
        stroke-width="4"
      ></circle>
      <!-- Arc animé -->
      <path
        fill="url(#gradient1)"
        d="M4 12a8 8 0 018-8V0a12 12 0 00-12 12h4z"
      ></path>
    </svg>
  </div>
</template>

<script setup></script>
