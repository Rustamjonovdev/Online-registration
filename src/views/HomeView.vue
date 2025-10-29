<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <div class="inline-block">
          <h1
            class="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3"
          >
            Musobaqalar
          </h1>
          <div
            class="h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full"
          ></div>
        </div>
        <p class="text-gray-600 mt-4 text-lg">
          Yaqinlashib kelayotgan sport musobaqalari
        </p>
      </div>

      <!-- Filter Section -->
      <!-- <div class="mb-8 flex flex-wrap gap-3 justify-center">
        <button 
          v-for="category in categories" 
          :key="category"
          :class="selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'"
          class="px-6 py-2 rounded-full font-medium transition duration-200 shadow-sm border border-gray-200"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div> -->

      <!-- Tournaments Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="tournament in tournaments"
          :key="tournament.id"
          class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
        >
          <!-- Image Container -->
          <div
            class="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 h-48"
          >
            <div class="absolute inset-0 flex items-center justify-center">
              <svg
                class="w-24 h-24 text-white opacity-90 group-hover:scale-110 transition duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <!-- Status Badge -->
            <div class="absolute top-4 right-4">
              <span
                class="px-3 py-1 bg-white text-indigo-600 text-xs font-bold rounded-full shadow-lg"
              >
                {{ tournament.status }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Title -->
            <router-link
              to="/tour_page"
              class="block text-xl font-bold text-gray-800 hover:text-indigo-600 transition duration-200 mb-4"
            >
              {{ tournament.name }}
            </router-link>

            <!-- Info Items -->
            <div class="space-y-3">
              <!-- Location -->
              <div class="flex items-center gap-3 text-gray-600">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span class="text-sm font-medium">{{
                  tournament.location
                }}</span>
              </div>

              <!-- Date -->
              <div class="flex items-center gap-3 text-gray-600">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span class="text-sm font-medium">{{ tournament.date }}</span>
              </div>

              <!-- Participants -->
              <div class="flex items-center gap-3 text-gray-600">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span class="text-sm font-medium"
                  >{{ tournament.participants }} ishtirokchi</span
                >
              </div>
            </div>

            <!-- Action Button -->
            <div class="mt-6">
              <router-link
                to="/tour_page"
                class="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center font-semibold py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
              >
                Batafsil
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button
          class="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-200 hover:-translate-y-1 border-2 border-gray-200"
        >
          Ko'proq yuklash
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const categories = ref([
  "Barchasi",
  "Futbol",
  "Basketbol",
  "Voleybol",
  "Tennis",
]);
const selectedCategory = ref("Barchasi");

const tournaments = ref([
  {
    id: 1,
    name: "O'zbekiston Chempionati 2025",
    location: "Toshkent, Milliy stadion",
    date: "15-20 Mart, 2025",
    status: "Yaqinda",
    participants: 24,
  },
  {
    id: 2,
    name: "Osiyo Kubogi",
    location: "Samarqand, Sport majmuasi",
    date: "5-10 Aprel, 2025",
    status: "Ochiq",
    participants: 32,
  },
  {
    id: 3,
    name: "Yoshlar Turniri",
    location: "Buxoro, Arena",
    date: "22-25 Mart, 2025",
    status: "To'ldi",
    participants: 16,
  },
  {
    id: 4,
    name: "Viloyatlar Ligasi",
    location: "Andijon, Sport kompleksi",
    date: "1-8 May, 2025",
    status: "Yaqinda",
    participants: 28,
  },
  {
    id: 5,
    name: "Professional Turnir",
    location: "Nukus, Stadion",
    date: "12-15 Iyun, 2025",
    status: "Ochiq",
    participants: 20,
  },
  {
    id: 6,
    name: "Xalqaro Turnir",
    location: "Namangan, Arena",
    date: "20-25 May, 2025",
    status: "Yaqinda",
    participants: 36,
  },
  {
    id: 7,
    name: "Yozgi Kubok",
    location: "Farg'ona, Stadion",
    date: "1-5 Iyul, 2025",
    status: "Ochiq",
    participants: 18,
  },
  {
    id: 8,
    name: "Markaziy Osiyo Chempionati",
    location: "Toshkent, Universal sport majmuasi",
    date: "15-22 Iyul, 2025",
    status: "Yaqinda",
    participants: 40,
  },
  {
    id: 9,
    name: "Kuzgi Liga",
    location: "Qo'qon, Sport arena",
    date: "10-18 Avgust, 2025",
    status: "Ochiq",
    participants: 22,
  },
  {
    id: 10,
    name: "Milliy Superliga",
    location: "Toshkent, Bunyodkor stadioni",
    date: "1-10 Sentyabr, 2025",
    status: "Yaqinda",
    participants: 30,
  },
]);
</script>
