<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4"
  >
    <div class="max-w-5xl mx-auto">
      <router-link
        to="/"
        class="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold mb-6 group"
      >
        <svg
          class="w-5 h-5 group-hover:-translate-x-1 transition duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Asosiyga qaytish
      </router-link>

      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div
          class="relative h-96 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden"
        >
          <div class="absolute inset-0 bg-black/20"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <svg
              class="w-48 h-48 text-white/90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>

          <div class="absolute top-6 right-6">
            <span
              class="px-6 py-2 bg-white text-sm font-bold rounded-full shadow-xl flex items-center gap-2"
              :class="isCompetitionDatePassed ? 'text-red-600' : 'text-indigo-600'"
            >
              <span
                class="w-2 h-2 rounded-full animate-pulse"
                :class="isCompetitionDatePassed ? 'bg-red-500' : 'bg-green-500'"
              ></span>
              {{ isCompetitionDatePassed ? 'Natijalar bilan yopildi' : 'Ochiq' }}
            </span>
          </div>

          <div class="absolute bottom-6 left-6">
            <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
              <div class="flex items-center gap-3">
                <div
                  class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-7 h-7 text-indigo-600"
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
                <div>
                  <p class="text-xs text-gray-600 font-medium">
                    Musobaqa sanasi
                  </p>
                  <p class="text-lg font-bold text-gray-800">17 Noyabr, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="p-8 md:p-12">
          <div class="mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              Viloyat Chempionati
            </h1>
            <div class="flex flex-wrap gap-3">
              <span
                class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold"
              >
                Chempionat
              </span>
              <span
                class="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold"
              >
                Professional
              </span>
              <span
                class="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold"
              >
                Barcha yoshlar
              </span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div
              class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-100"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <svg
                    class="w-7 h-7 text-white"
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
                <div>
                  <p class="text-sm text-gray-600 font-semibold mb-1">
                    Musobaqa joyi
                  </p>
                  <p class="text-lg font-bold text-gray-800">
                    Farg'ona shahar Samo sport majmuasi
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-100"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <svg
                    class="w-7 h-7 text-white"
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
                <div>
                  <p class="text-sm text-gray-600 font-semibold mb-1">
                    Ishtirokchilar
                  </p>
                  <p class="text-lg font-bold text-gray-800">
                    {{ totalParticipants }} ishtirokchi ro'yxatdan o'tgan
                  </p>
                  <div class="mt-2 flex -space-x-2">
                    <div
                      class="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"
                    ></div>
                    <div
                      class="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"
                    ></div>
                    <div
                      class="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-2 border-white"
                    ></div>
                    <div
                      class="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    >
                      +{{ totalParticipants - 3 }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg mb-10 border-2 border-gray-100">
            <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <svg class="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Vazn toifalari bo'yicha statistika
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 border-2 border-indigo-200">
                <p class="text-sm text-indigo-600 font-semibold mb-1">Jami vazn toifalari</p>
                <p class="text-3xl font-bold text-indigo-700">{{ weightCategories.length }}</p>
              </div>
              <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border-2 border-purple-200">
                <p class="text-sm text-purple-600 font-semibold mb-1">Jami ishtirokchilar</p>
                <p class="text-3xl font-bold text-purple-700">{{ totalParticipants }}</p>
              </div>
              <div class="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-5 border-2 border-pink-200">
                <p class="text-sm text-pink-600 font-semibold mb-1">O'rtacha (toifa)</p>
                <p class="text-3xl font-bold text-pink-700">{{ averagePerCategory }}</p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div 
                v-for="category in weightCategories" 
                :key="category.weight"
                class="bg-gradient-to-br rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/50"
                :class="category.bgColor"
              >
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-2">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    <span class="text-white/90 text-sm font-semibold">Vazn toifasi</span>
                  </div>
                </div>
                <div class="mb-3">
                  <h4 class="text-3xl font-bold text-white mb-1">{{ category.weight }}</h4>
                </div>
                
                <div v-if="isCompetitionDatePassed" class="mt-4">
                    <div class="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-3">
                        <span class="text-white/90 text-sm font-medium">G'olib:</span>
                        <p class="text-xl font-bold text-white">{{ category.winner }}</p>
                    </div>
                    <router-link 
                        :to="{
                          name: 'result', 
                          params: { weight: category.weight }
                        }"
                        class="w-full py-2 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Natijalar/Setkani ko'rish
                    </router-link>
                </div>
                <div v-else>
                    <div class="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <span class="text-white/90 text-sm font-medium">Ishtirokchilar:</span>
                        <span class="text-2xl font-bold text-white">{{ category.participants }}</span>
                    </div>
                    <div class="mt-3 bg-white/20 rounded-full h-2 overflow-hidden">
                      <div 
                        class="bg-white h-full rounded-full transition-all duration-500"
                        :style="{ width: (category.participants / maxParticipants * 100) + '%' }"
                      ></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-xl mb-10 border-2 border-indigo-100">
            <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <svg class="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Ro'yxatdan o'tgan sportchilar ({{ filteredParticipants.length }})
            </h3>
            
            <div class="flex flex-col sm:flex-row gap-4 mb-6">
              <select
                v-model="selectedWeight"
                class="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              >
                <option value="">Barcha vaznlar</option>
                <option v-for="cat in weightCategories" :key="cat.weight" :value="cat.weight">
                  {{ cat.weight }}
                </option>
              </select>
              
              <select
                v-model="selectedRegion"
                class="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              >
                <option value="">Barcha viloyatlar</option>
                <option v-for="region in availableRegions" :key="region" :value="region">
                  {{ region }}
                </option>
              </select>
            </div>
            
            <div class="overflow-x-auto bg-gray-50 rounded-xl border border-gray-200">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-indigo-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                      #
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                      Ism/Familiya
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                      Vazni
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                      Viloyati
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr v-if="filteredParticipants.length === 0">
                    <td colspan="4" class="px-6 py-4 text-sm text-gray-500 text-center italic">
                      Tanlangan mezonlar bo'yicha ishtirokchilar topilmadi.
                    </td>
                  </tr>
                  <tr v-for="(participant, index) in filteredParticipants" :key="participant.id" class="hover:bg-indigo-50/50 transition duration-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {{ index + 1 }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-semibold">
                      {{ participant.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 font-medium">
                      {{ participant.weight }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-purple-600 font-medium">
                      {{ participant.region }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="mb-10">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-800">Musobaqa haqida</h2>
            </div>
            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p class="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                laborum tenetur debitis eveniet harum perspiciatis totam ratione
                quisquam? Numquam eius fugit facere, reiciendis dolorem rem qui
                velit error voluptate nostrum, ex officia alias obcaecati
                voluptas praesentium maxime cum laudantium delectus perferendis
                sapiente? Dolores, unde debitis! Perferendis saepe fuga
                laboriosam quibusdam.
              </p>
            </div>
          </div>

          <div class="mb-10">
            <h3
              class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"
            >
              <svg
                class="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              Asosiy ma'lumotlar
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200"
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p class="text-xs text-gray-500 font-medium">
                    Boshlanish vaqti
                  </p>
                  <p class="text-sm font-bold text-gray-800">10:00</p>
                </div>
              </div>

              <div
                class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200"
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p class="text-xs text-gray-500 font-medium">
                    Ro'yxatga olish
                  </p>
                  <p class="text-sm font-bold text-gray-800">Bepul</p>
                </div>
              </div>

              <div
                class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200"
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
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <div>
                  <p class="text-xs text-gray-500 font-medium">Mukofot</p>
                  <p class="text-sm font-bold text-gray-800">
                    Medallar va sovg'alar
                  </p>
                </div>
              </div>

              <div
                class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200"
              >
                <svg
                  class="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div>
                  <p class="text-xs text-gray-500 font-medium">Nizom</p>
                  <a
                    href="#"
                    class="text-sm font-bold text-indigo-600 hover:text-indigo-700 underline"
                    >Yuklab olish</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <router-link
              v-if="!isCompetitionDatePassed"
              to="/reg_page"
              class="flex-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center font-bold py-5 px-8 rounded-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-2xl text-lg"
            >
              <span class="flex items-center justify-center gap-3">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Ro'yxatdan o'tish
              </span>
            </router-link>
            
            <button
                v-else
                class="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center font-bold py-5 px-8 rounded-xl hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-300 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-2xl text-lg"
                @click="viewSetka({ weight: 'Umumiy' })"
            >
                <span class="flex items-center justify-center gap-3">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    Umumiy Natijalar (Setka)
                </span>
            </button>


            <button
              class="sm:w-auto bg-white border-2 border-indigo-600 text-indigo-600 text-center font-bold py-5 px-8 rounded-xl hover:bg-indigo-50 transition duration-200 shadow-lg"
            >
              <span class="flex items-center justify-center gap-3">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Ulashish
              </span>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <p class="text-gray-600 text-sm">
          Savol-javoblar uchun:
          <a
            href="tel:+998901234567"
            class="text-indigo-600 hover:text-indigo-700 font-semibold"
            >+998 90 123 45 67</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'; 

const router = useRouter(); 

// --- Loyiha mantig'i uchun sanalar ---
// Musobaqa sanasi 17-noyabrda bo'lgan
const COMPETITION_DATE_STRING = '2025-11-17';
// Hozirgi kun 18-noyabr
const TODAY_DATE_STRING = '2025-11-18'; 


// -----------------------------------------------------------
// 🏆 Vazn toifalari ma'lumotlari (G'oliblar bilan)
// -----------------------------------------------------------
const weightCategories = [
  { weight: '48 kg', participants: 5, bgColor: 'from-blue-500 to-blue-600', winner: 'Aliyev Dilshod' },
  { weight: '52 kg', participants: 7, bgColor: 'from-indigo-500 to-indigo-600', winner: 'Karimov Jahongir' },
  { weight: '57 kg', participants: 6, bgColor: 'from-purple-500 to-purple-600', winner: 'Sobirov Bekzod' },
  { weight: '63 kg', participants: 8, bgColor: 'from-pink-500 to-pink-600', winner: 'Valiyev Jamshid' },
  { weight: '69 kg', participants: 5, bgColor: 'from-rose-500 to-rose-600', winner: 'Raufova Aziza' },
  { weight: '75 kg', participants: 4, bgColor: 'from-orange-500 to-orange-600', winner: 'Mirzayev Kamol' },
  { weight: '81 kg', participants: 3, bgColor: 'from-amber-500 to-amber-600', winner: 'Rustamov Farrux' },
  { weight: '+81 kg', participants: 4, bgColor: 'from-green-500 to-green-600', winner: 'Ganiyev Rustam' }
];

// Musobaqa sanasi kelgan yoki o'tganligini tekshirish
const isCompetitionDatePassed = computed(() => {
    const today = new Date(TODAY_DATE_STRING); 
    const competitionDate = new Date(COMPETITION_DATE_STRING);
    // Agar bugun musobaqa kuni yoki undan keyingi kun bo'lsa, TRUE qaytaradi
    return today.getTime() > competitionDate.getTime();
});


// -----------------------------------------------------------
// 🏆 Setka tugmasi bosilganda (Natijalar sahifasiga yo'naltirish)
// -----------------------------------------------------------



// --- Qolgan barcha skriptlar avvalgidek qoldi ---
const participantsList = ref([
  { id: 1, name: "Aliyev Sherzod", weight: '63 kg', region: "Farg'ona" },
  { id: 2, name: "Karimov Javlon", weight: '52 kg', region: "Andijon" },
  { id: 3, name: "Valiyev Jamshid", weight: '63 kg', region: "Namangan" },
  { id: 4, name: "Ibragimov Otabek", weight: '48 kg', region: "Farg'ona" },
  { id: 5, name: "Sobirov Bekzod", weight: '57 kg', region: "Toshkent sh." },
  { id: 6, name: "Nazarov Dilshod", weight: '63 kg', region: "Samarqand" },
  { id: 7, name: "Yusupova Gulnoza", weight: '52 kg', region: "Buxoro" },
  { id: 8, name: "Qodirova Zaynab", weight: '48 kg', region: "Andijon" },
  { id: 9, name: "Ramazonov Asliddin", weight: '75 kg', region: "Namangan" },
  { id: 10, name: "Ergashev Tohir", weight: '69 kg', region: "Farg'ona" },
  { id: 11, name: "Madaminov Sodiq", weight: '+81 kg', region: "Samarqand" },
  { id: 12, name: "Xamroyev Eldor", weight: '57 kg', region: "Toshkent sh." },
  { id: 13, name: "Azimova Laylo", weight: '63 kg', region: "Farg'ona" },
  { id: 14, name: "Zokirov Akmal", weight: '52 kg', region: "Buxoro" },
  { id: 15, name: "Rustamov Farrux", weight: '81 kg', region: "Namangan" },
  { id: 16, name: "Davlatov Aziz", weight: '69 kg', region: "Andijon" },
  { id: 17, name: "Sulaymonov Sardor", weight: '75 kg', region: "Toshkent sh." },
  { id: 18, name: "Olimov Alijon", weight: '48 kg', region: "Farg'ona" },
  { id: 19, name: "Musaeva Nigora", weight: '57 kg', region: "Samarqand" },
  { id: 20, name: "To'rayev Nodir", weight: '+81 kg', region: "Buxoro" },
  { id: 21, name: "Shamsiyev Ilhom", weight: '63 kg', region: "Namangan" },
  { id: 22, name: "Jumayeva Dilorom", weight: '52 kg', region: "Farg'ona" },
  { id: 23, name: "Halimov Abror", weight: '69 kg', region: "Toshkent sh." },
  { id: 24, name: "Toshpulatov Said", weight: '81 kg', region: "Andijon" },
  { id: 25, name: "Xolmatov Sobir", weight: '48 kg', region: "Samarqand" },
  { id: 26, name: "G'aniyev Mansur", weight: '63 kg', region: "Buxoro" },
  { id: 27, name: "Ismoilova Guli", weight: '57 kg', region: "Farg'ona" },
  { id: 28, name: "Mirzayev Kamol", weight: '75 kg', region: "Toshkent sh." },
  { id: 29, name: "Saidov Dilmurod", weight: '+81 kg', region: "Namangan" },
  { id: 30, name: "Urinova Feruza", weight: '52 kg', region: "Andijon" },
  { id: 31, name: "Vohidov Husan", weight: '63 kg', region: "Farg'ona" },
  { id: 32, name: "Ziyayev Temur", weight: '69 kg', region: "Samarqand" },
  { id: 33, name: "Ahmedov Qobil", weight: '48 kg', region: "Buxoro" },
  { id: 34, name: "Eshonqulov Umid", weight: '75 kg', region: "Namangan" },
  { id: 35, name: "Jo'rayev Bobur", weight: '57 kg', region: "Toshkent sh." },
  { id: 36, name: "Pulatov Javohir", weight: '63 kg', region: "Andijon" },
  { id: 37, name: "Raufova Aziza", weight: '69 kg', region: "Farg'ona" },
  { id: 38, name: "Sattorov Jasur", weight: '75 kg', region: "Samarqand" },
  { id: 39, name: "Xasanov Ilmiy", weight: '81 kg', region: "Buxoro" },
  { id: 40, name: "Usmonov Furqat", weight: '+81 kg', region: "Toshkent sh." },
  { id: 41, name: "Komilova Shaxnoza", weight: '63 kg', region: "Andijon" },
  { id: 42, name: "Xolikov Alisher", weight: '52 kg', region: "Namangan" },
]);

const selectedWeight = ref('');
const selectedRegion = ref('');

const totalParticipants = computed(() => {
  return participantsList.value.length; 
});

const averagePerCategory = computed(() => {
  return weightCategories.length > 0
    ? Math.round(totalParticipants.value / weightCategories.length)
    : 0;
});

const maxParticipants = computed(() => {
  return Math.max(...weightCategories.map(cat => cat.participants));
});

const availableRegions = computed(() => {
  const regions = new Set(participantsList.value.map(p => p.region));
  return Array.from(regions).sort();
});

const filteredParticipants = computed(() => {
  let filtered = participantsList.value;
  if (selectedWeight.value) {
    filtered = filtered.filter(p => p.weight === selectedWeight.value);
  }
  if (selectedRegion.value) {
    filtered = filtered.filter(p => p.region === selectedRegion.value);
  }
  return filtered;
});
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>