<!-- src/components/LoginModal.vue -->
<template>
  <transition name="modal">
    <div
      v-if="show"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      @click.self="$emit('close')"
    >
      <div
        class="bg-white rounded-2xl shadow-2xl w-full max-w-sm relative transform transition-all"
        @click.stop
      >
        <!-- Close Button -->
        <button
          class="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition duration-200 z-10"
          @click="$emit('close')"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Header with Icon -->
        <div class="text-center pt-6 pb-4 px-6">
          <div
            class="inline-block p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-3 shadow-lg"
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-800 mb-1">Xush kelibsiz</h2>
          <p class="text-gray-600 text-sm">Akkauntingizga kiring</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="px-6 pb-6 space-y-4">
          <!-- Username Input -->
          <div class="form-group">
            <label class="block text-xs font-semibold text-gray-700 mb-1.5">
              Foydalanuvchi nomi
            </label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <input
                type="text"
                v-model="username"
                placeholder="Foydalanuvchi nomi"
                class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 outline-none"
                required
              />
            </div>
          </div>

          <!-- Password Input -->
          <div class="form-group">
            <label class="block text-xs font-semibold text-gray-700 mb-1.5">
              Parol
            </label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="Parolingizni kiriting"
                class="w-full pl-9 pr-10 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 outline-none"
                required
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg
                  v-if="!showPassword"
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <svg
                  v-else
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Remember & Forgot Password -->
          <div class="flex items-center justify-between text-xs">
            <label class="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                v-model="rememberMe"
                class="w-3.5 h-3.5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span class="text-gray-700">Eslab qolish</span>
            </label>
            <a
              href="#"
              class="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Parolni unutdingizmi?
            </a>
          </div>

          <!-- Submit Button -->
          <div class="pt-1">
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg text-sm"
            >
              <span class="flex items-center justify-center gap-2">
                <svg
                  class="w-4 h-4"
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
                Kirish
              </span>
            </button>
          </div>

          <!-- Divider -->
          <div class="relative py-3">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-xs">
              <span class="px-3 bg-white text-gray-500">yoki</span>
            </div>
          </div>

          <!-- Social Login Buttons -->
          <div class="space-y-2">
            <button
              type="button"
              class="w-full flex items-center justify-center gap-2 px-3 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 font-medium text-gray-700 text-sm"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google bilan kirish
            </button>

            <button
              type="button"
              class="w-full flex items-center justify-center gap-2 px-3 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 font-medium text-gray-700 text-sm"
            >
              <svg
                class="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
              Twitter bilan kirish
            </button>
          </div>

          <!-- Sign Up Link -->
          <p class="text-center text-xs text-gray-600 pt-2">
            Akkauntingiz yo'qmi?
            <button
              type="button"
              @click="$emit('switch-to-register')"
              class="text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              Ro'yxatdan o'tish
            </button>
          </p>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  show: Boolean,
});

const emit = defineEmits(["close", "switch-to-register"]); // Yangi event qo'shdik

const username = ref("");
const password = ref("");
const showPassword = ref(false);
const rememberMe = ref(false);

const handleLogin = () => {
  console.log("Username:", username.value);
  console.log("Password:", password.value);
  console.log("Remember Me:", rememberMe.value);

  // Login logic here
  emit("close");
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.9);
  opacity: 0;
}
</style>
