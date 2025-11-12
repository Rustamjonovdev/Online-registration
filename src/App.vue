<template>
  <div class="flex flex-col min-h-screen">
    <!-- HEADER -->
    <header class="sticky top-0 z-50 bg-white shadow-lg">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <div class="flex-shrink-0 group">
            <router-link to="/" class="flex items-center gap-3 cursor-pointer">
              <div
                class="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition duration-300 group-hover:scale-105"
              >
                <svg
                  class="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span
                class="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hidden sm:block"
              >
                SportHub
              </span>
            </router-link>
          </div>

          <!-- Navigation Links -->
          <div class="hidden md:block">
            <ul class="flex items-center gap-8">
              <li>
                <router-link
                  to="/"
                  class="text-gray-700 hover:text-indigo-600 font-medium transition duration-200 relative group"
                >
                  Asosiy sahifa
                  <span
                    class="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"
                  ></span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/tour_reg"
                  class="text-gray-700 hover:text-indigo-600 font-medium transition duration-200 relative group"
                >
                  Musobaqa sahifasi
                  <span
                    class="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"
                  ></span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/about"
                  class="text-gray-700 hover:text-indigo-600 font-medium transition duration-200 relative group"
                >
                  Biz haqimizda
                  <span
                    class="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"
                  ></span>
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Login Button -->
          <div class="flex items-center gap-4">
            <button
              @click="showLoginModal = true"
              class="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span class="hidden sm:inline">Kirish</span>
            </button>

            <!-- Mobile Menu Button -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition duration-200"
            >
              <svg
                class="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  v-if="!mobileMenuOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div
          v-show="mobileMenuOpen"
          class="md:hidden py-4 border-t border-gray-200"
        >
          <ul class="flex flex-col gap-4">
            <li>
              <router-link
                to="/"
                class="block text-gray-700 hover:text-indigo-600 font-medium transition duration-200 py-2"
                @click="mobileMenuOpen = false"
              >
                Asosiy sahifa
              </router-link>
            </li>
            <li>
              <router-link
                to="/tour_reg"
                class="block text-gray-700 hover:text-indigo-600 font-medium transition duration-200 py-2"
                @click="mobileMenuOpen = false"
              >
                Musobaqa sahifasi
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="block text-gray-700 hover:text-indigo-600 font-medium transition duration-200 py-2"
                @click="mobileMenuOpen = false"
              >
                Biz haqimizda
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- MAIN CONTENT -->
    <main class="flex-grow bg-gray-50">
      <router-view />
    </main>

    <!-- FOOTER -->
    <footer
      class="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Footer Main Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <!-- Biz haqimizda -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              <div
                class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
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
              Biz haqimizda
            </h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition duration-200 flex items-center gap-2 group"
                >
                  <span
                    class="w-1.5 h-1.5 bg-indigo-600 rounded-full group-hover:scale-150 transition duration-200"
                  ></span>
                  Topshirish punktlari
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition duration-200 flex items-center gap-2 group"
                >
                  <span
                    class="w-1.5 h-1.5 bg-indigo-600 rounded-full group-hover:scale-150 transition duration-200"
                  ></span>
                  Vakansiyalar
                </a>
              </li>
            </ul>
          </div>

          <!-- Foydalanuvchilar -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              <div
                class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              Foydalanuvchilar
            </h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition duration-200 flex items-center gap-2 group"
                >
                  <span
                    class="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:scale-150 transition duration-200"
                  ></span>
                  Biz bilan bog'lanish
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition duration-200 flex items-center gap-2 group"
                >
                  <span
                    class="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:scale-150 transition duration-200"
                  ></span>
                  Savol-javob
                </a>
              </li>
            </ul>
          </div>

          <!-- Tadbirkorlarga -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              <div
                class="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              Tadbirkorlarga
            </h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition duration-200 flex items-center gap-2 group"
                >
                  <span
                    class="w-1.5 h-1.5 bg-pink-600 rounded-full group-hover:scale-150 transition duration-200"
                  ></span>
                  Platformada soting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition duration-200 flex items-center gap-2 group"
                >
                  <span
                    class="w-1.5 h-1.5 bg-pink-600 rounded-full group-hover:scale-150 transition duration-200"
                  ></span>
                  Sotuvchi kabineti
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition duration-200 flex items-center gap-2 group"
                >
                  <span
                    class="w-1.5 h-1.5 bg-pink-600 rounded-full group-hover:scale-150 transition duration-200"
                  ></span>
                  Punkt ochish
                </a>
              </li>
            </ul>
          </div>

          <!-- Ijtimoiy tarmoqlar -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              <div
                class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
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
              </div>
              Ijtimoiy tarmoqlar
            </h3>
            <div class="flex gap-3">
              <a
                href="#"
                class="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition duration-200 shadow-lg hover:shadow-xl"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition duration-200 shadow-lg hover:shadow-xl"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition duration-200 shadow-lg hover:shadow-xl"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>
            </div>

            <!-- Newsletter -->
            <div class="mt-6">
              <p class="text-sm text-gray-400 mb-3">
                Yangiliklardan xabardor bo'ling
              </p>
              <div class="flex gap-2">
                <input
                  type="email"
                  placeholder="Email manzilingiz"
                  class="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  class="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-200"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="border-t border-gray-700 pt-8 mt-8">
          <div
            class="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p class="text-gray-400 text-sm text-center md:text-left">
              © 2025 SportHub. Barcha huquqlar himoyalangan.
            </p>
            <div class="flex gap-6 text-sm">
              <a
                href="#"
                class="text-gray-400 hover:text-white transition duration-200"
                >Foydalanish shartlari</a
              >
              <a
                href="#"
                class="text-gray-400 hover:text-white transition duration-200"
                >Maxfiylik siyosati</a
              >
              <a
                href="#"
                class="text-gray-400 hover:text-white transition duration-200"
                >Yordam</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Login Modal -->
    <LoginModal
      :show="showLoginModal"
      @close="showLoginModal = false"
      @switch-to-register="switchToRegister"
    />

    <!-- Register Modal -->
    <RegisterModal
      :show="showRegisterModal"
      @close="showRegisterModal = false"
      @switch-to-login="switchToLogin"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginModal from "@/components/Login.vue";
import RegisterModal from "@/components/RegistrationModal.vue";

const showLoginModal = ref(false);
const showRegisterModal = ref(false);
const mobileMenuOpen = ref(false);

const switchToRegister = () => {
  showLoginModal.value = false;
  showRegisterModal.value = true;
};

const switchToLogin = () => {
  showRegisterModal.value = false;
  showLoginModal.value = true;
};
</script>