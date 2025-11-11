<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-block p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-6 shadow-2xl">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Musobaqa Registratsiyasi
        </h1>
        <p class="text-gray-600 text-lg">Yangi musobaqa yarating va ma'lumotlarni to'ldiring</p>
      </div>

      <!-- Form Card -->
      <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-100">
        <form @submit.prevent="handleSubmit" class="space-y-8">
          
          <!-- MUSOBAQA RASMI -->
          <div class="form-section">
            <label class="block text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              Musobaqa rasmi yoki zal
            </label>
            
            <div class="relative">
              <input
                type="file"
                accept="image/*"
                @change="onImageChange"
                id="image-upload"
                class="hidden"
              />
              <label
                for="image-upload"
                class="flex flex-col items-center justify-center w-full h-64 border-3 border-dashed border-indigo-300 rounded-2xl cursor-pointer bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition duration-300 group"
              >
                <div v-if="!imagePreview" class="text-center">
                  <svg class="w-16 h-16 text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                  </svg>
                  <p class="text-lg font-semibold text-gray-700 mb-2">Rasmni yuklash</p>
                  <p class="text-sm text-gray-500">PNG, JPG yoki JPEG (max. 10MB)</p>
                </div>
                <div v-else class="relative w-full h-full">
                  <img :src="imagePreview" alt="Preview" class="w-full h-full object-cover rounded-2xl" />
                  <div class="absolute inset-0 bg-black bg-opacity-40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <p class="text-white font-semibold">Rasmni o'zgartirish</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- MUSOBAQA NOMI -->
          <div class="form-section">
            <label class="block text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
                </svg>
              </div>
              Musobaqa nomi
            </label>
            <div class="relative">
              <input
                type="text"
                v-model="form.name"
                placeholder="Masalan: O'zbekiston Chempionati 2025"
                class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-transparent transition duration-200 text-lg"
                required
              />
            </div>
          </div>

          <!-- MUSOBAQA JOYI -->
          <div class="form-section">
            <label class="block text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div class="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              Musobaqa o'tkazilish joyi
            </label>
            <div class="relative">
              <input
                type="text"
                v-model="form.place"
                placeholder="Masalan: Toshkent, Milliy stadion"
                class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-transparent transition duration-200 text-lg"
                required
              />
            </div>
          </div>

          <!-- MUSOBAQA KUNI -->
          <div class="form-section">
            <label class="block text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              Musobaqa sanasi
            </label>
            <div class="relative">
              <input
                type="date"
                v-model="form.date"
                class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-transparent transition duration-200 text-lg"
                required
              />
            </div>
          </div>

          <!-- MUSOBAQA NIZOMI -->
          <div class="form-section">
            <label class="block text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              Musobaqa nizomi
            </label>
            
            <div class="relative">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                @change="onNizomChange"
                id="nizom-upload"
                class="hidden"
              />
              <label
                for="nizom-upload"
                class="flex items-center justify-between w-full px-6 py-5 border-2 border-dashed border-green-300 rounded-xl cursor-pointer bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition duration-300 group"
              >
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 bg-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition duration-300">
                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-lg font-semibold text-gray-700">
                      {{ nizomFileName || 'Nizom faylini yuklang' }}
                    </p>
                    <p class="text-sm text-gray-500">PDF, DOC yoki DOCX (max. 5MB)</p>
                  </div>
                </div>
                <svg v-if="nizomFileName" class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </label>
            </div>
          </div>

          <!-- TASDIQLASH KODI -->
          <div class="form-section">
            <label class="block text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              Tasdiqlash kodi
            </label>
            <div class="relative">
              <input
                type="text"
                v-model="form.verificationCode"
                placeholder="4 xonali kod"
                maxlength="4"
                @input="onlyNumbers"
                class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:border-transparent transition duration-200 text-lg tracking-[0.5em] text-center font-bold text-3xl"
                required
              />
              <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
            </div>
            <p class="text-sm text-gray-500 mt-2 text-center">Telefon raqamingizga yuborilgan 4 xonali kodni kiriting</p>
          </div>

          <!-- YUBORISH BUTTON -->
          <div class="pt-6">
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold py-5 px-8 rounded-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transform transition duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-2xl hover:shadow-3xl text-lg"
            >
              <span class="flex items-center justify-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Musobaqani yaratish
              </span>
            </button>
          </div>

          <!-- Info Text -->
          <p class="text-center text-gray-500 text-sm mt-6">
            Barcha maydonlarni to'ldirgandan so'ng forma yuboriladi
          </p>
        </form>
      </div>

      <!-- Success Message -->
      <div v-if="showSuccess" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl transform transition-all">
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Muvaffaqiyatli!</h3>
            <p class="text-gray-600">Musobaqa muvaffaqiyatli yaratildi</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  name: "",
  place: "",
  date: "",
  image: null,
  nizom: null,
  verificationCode: "",
});

const imagePreview = ref(null);
const nizomFileName = ref("");
const showSuccess = ref(false);

// Rasm yuklash
const onImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    form.image = file;
    imagePreview.value = URL.createObjectURL(file);
  }
};

// Nizom yuklash
const onNizomChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    form.nizom = file;
    nizomFileName.value = file.name;
  }
};

// Faqat raqam kiritish
const onlyNumbers = (e) => {
  form.verificationCode = e.target.value.replace(/[^0-9]/g, '');
};

// Yuborish
const handleSubmit = () => {
  console.log("Form submitted:", form);
  
  showSuccess.value = true;
  
  setTimeout(() => {
    showSuccess.value = false;
    router.push({
      name: "Home",
      query: {
        name: form.name,
        place: form.place,
        date: form.date,
      },
    });
  }, 2000);
};
</script>