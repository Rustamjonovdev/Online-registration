<template>
  <div
    class="lg:mx-auto my-4 p-4 max-w-7xl bg-gray-200 rounded-xl min-h-screen"
  >
    <ul class="grid grid-cols-3">
      <li
        v-for="n in 10"
        :key="n"
        class="flex flex-col items-center gap-4 p-4 border-2 rounded-xl bg-gray-300 m-2"
      >
        <img src="../assets/images/svg/login.svg" alt="musobaqa rasmi" />
        <router-link to="/tour_page" class="text-xl font-medium"
          >Musobaqa nomi</router-link
        >
        <p class="text-sm">Musobaqa joyi</p>
        <p class="text-sm">Musobaqa kuni</p>
      </li>
    </ul>
  </div>
</template>

<script setup></script>
