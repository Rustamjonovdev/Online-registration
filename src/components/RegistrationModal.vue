<!-- src/components/RegisterModal.vue -->
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
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Header with Icon -->
        <div class="text-center pt-6 pb-4 px-6">
          <div class="inline-block p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-3 shadow-lg">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-800 mb-1">
            Ro'yxatdan o'tish
          </h2>
          <p class="text-gray-600 text-sm">Yangi akkaunt yarating</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleRegister" class="px-6 pb-6 space-y-4">
          <!-- Full Name Input -->
          <div class="form-group">
            <label class="block text-xs font-semibold text-gray-700 mb-1.5">
              To'liq ism
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <input
                type="text"
                v-model="formData.fullName"
                placeholder="Ism va familiyangiz"
                class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 outline-none"
                required
              />
            </div>
          </div>

          <!-- Email Input -->
          <div class="form-group">
            <label class="block text-xs font-semibold text-gray-700 mb-1.5">
              Email
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <input
                type="email"
                v-model="formData.email"
                placeholder="email@example.com"
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
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="formData.password"
                placeholder="Parol kiriting"
                class="w-full pl-9 pr-10 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 outline-none"
                required
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg v-if="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                </svg>
              </button>
            </div>
            <!-- Password Strength Indicator -->
            <div class="mt-2">
              <div class="flex gap-1">
                <div 
                  v-for="i in 4" 
                  :key="i"
                  :class="[
                    'h-1 flex-1 rounded-full transition-all duration-300',
                    passwordStrength >= i ? getStrengthColor(passwordStrength) : 'bg-gray-200'
                  ]"
                ></div>
              </div>
              <p class="text-xs mt-1" :class="getStrengthTextColor(passwordStrength)">
                {{ getStrengthText(passwordStrength) }}
              </p>
            </div>
          </div>

          <!-- Confirm Password Input -->
          <div class="form-group">
            <label class="block text-xs font-semibold text-gray-700 mb-1.5">
              Parolni tasdiqlash
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <input
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="formData.confirmPassword"
                placeholder="Parolni qayta kiriting"
                class="w-full pl-9 pr-10 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 outline-none"
                required
              />
              <button
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg v-if="!showConfirmPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                </svg>
              </button>
            </div>
            <p v-if="formData.confirmPassword && !passwordsMatch" class="text-xs text-red-600 mt-1">
              Parollar mos kelmayapti
            </p>
            <p v-if="formData.confirmPassword && passwordsMatch" class="text-xs text-green-600 mt-1 flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Parollar mos keldi
            </p>
          </div>

          <!-- Terms Checkbox -->
          <div class="flex items-start gap-2 pt-2">
            <input 
              type="checkbox" 
              v-model="acceptTerms"
              id="terms"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-0.5"
              required
            />
            <label for="terms" class="text-xs text-gray-700">
              Men <a href="#" class="text-indigo-600 hover:text-indigo-700 font-semibold">foydalanish shartlari</a> va <a href="#" class="text-indigo-600 hover:text-indigo-700 font-semibold">maxfiylik siyosati</a>ga roziman
            </label>
          </div>

          <!-- Submit Button -->
          <div class="pt-2">
            <button
              type="submit"
              :disabled="!isFormValid"
              :class="[
                'w-full font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition duration-200 shadow-lg text-sm',
                isFormValid 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 hover:scale-[1.02] active:scale-[0.98] cursor-pointer' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              ]"
            >
              <span class="flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                </svg>
                Ro'yxatdan o'tish
              </span>
            </button>
          </div>

          <!-- Sign In Link -->
          <p class="text-center text-xs text-gray-600 pt-2">
            Allaqachon akkauntingiz bormi? 
            <button 
              type="button"
              @click="$emit('switch-to-login')"
              class="text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              Kirish
            </button>
          </p>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  show: Boolean,
});

const emit = defineEmits(["close", "switch-to-login"]);

const formData = ref({
  fullName: "",
  email: "",
  password: "",
  confirmPassword: ""
});

const showPassword = ref(false);
const showConfirmPassword = ref(false);
const acceptTerms = ref(false);

const passwordStrength = computed(() => {
  const password = formData.value.password;
  if (!password) return 0;
  
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;
  
  return strength;
});

const passwordsMatch = computed(() => {
  return formData.value.password === formData.value.confirmPassword;
});

const isFormValid = computed(() => {
  return formData.value.fullName && 
         formData.value.email && 
         formData.value.password && 
         formData.value.confirmPassword &&
         passwordsMatch.value &&
         acceptTerms.value;
});

const getStrengthColor = (strength) => {
  if (strength <= 1) return 'bg-red-500';
  if (strength === 2) return 'bg-yellow-500';
  if (strength === 3) return 'bg-blue-500';
  return 'bg-green-500';
};

const getStrengthTextColor = (strength) => {
  if (strength <= 1) return 'text-red-600';
  if (strength === 2) return 'text-yellow-600';
  if (strength === 3) return 'text-blue-600';
  return 'text-green-600';
};

const getStrengthText = (strength) => {
  if (strength === 0) return '';
  if (strength === 1) return 'Zaif parol';
  if (strength === 2) return 'O\'rtacha parol';
  if (strength === 3) return 'Yaxshi parol';
  return 'Kuchli parol';
};

const handleRegister = () => {
  if (!isFormValid.value) return;
  
  console.log("Register data:", formData.value);
  
  // Registration logic here
  emit('close');
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