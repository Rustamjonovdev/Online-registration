<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-8">
        <div class="inline-block p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-4 shadow-lg animate-pulse">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
          </svg>
        </div>
        <h1 class="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Ro'yxatdan o'tish
        </h1>
        <p class="text-gray-600 text-lg">Ma'lumotlaringizni to'ldiring va musobaqada qatnashing</p>
        
        <div class="mt-6 max-w-md mx-auto">
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-500 rounded-full"
              :style="{ width: progressWidth + '%' }"
            ></div>
          </div>
          <p class="text-sm text-gray-500 mt-2">{{ filledFields }}/8 maydon to'ldirildi</p>
        </div>
      </div>

      <div class="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          
          <div class="form-group">
            <label class="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-xs text-indigo-600">1</span>
              Profil rasmi
            </label>
            
            <div class="relative">
              <input
                type="file"
                accept="image/*"
                @change="onImageChange"
                id="profile-image"
                class="hidden"
              />
              <label
                for="profile-image"
                class="flex flex-col items-center justify-center w-full h-48 border-3 border-dashed border-indigo-300 rounded-2xl cursor-pointer bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition duration-300 group"
              >
                <div v-if="!imagePreview" class="text-center">
                  <svg class="w-12 h-12 text-indigo-400 mx-auto mb-3 group-hover:scale-110 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <p class="text-sm font-semibold text-gray-700 mb-1">Rasmni yuklash</p>
                  <p class="text-xs text-gray-500">PNG, JPG (max. 5MB)</p>
                </div>
                <div v-else class="relative w-full h-full p-4">
                  <img :src="imagePreview" alt="Preview" class="w-full h-full object-cover rounded-xl" />
                  <div class="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <p class="text-white font-semibold text-sm">Rasmni o'zgartirish</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-group">
              <label class="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span class="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-xs text-indigo-600">2</span>
                Ism
              </label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <input 
                  v-model="formData.firstName"
                  type="text" 
                  class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 outline-none hover:border-gray-300"
                  placeholder="Ismingizni kiriting"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label class="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span class="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs text-purple-600">3</span>
                Familiya
              </label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <input 
                  v-model="formData.lastName"
                  type="text" 
                  class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 outline-none hover:border-gray-300"
                  placeholder="Familiyangizni kiriting"
                  required
                />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-group">
              <label class="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center text-xs text-pink-600">4</span>
                Tug'ilgan sana
              </label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400 group-focus-within:text-pink-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <input 
                  v-model="formData.birthDate"
                  type="date" 
                  class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200 outline-none hover:border-gray-300"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label class="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs text-blue-600">5</span>
                Jinsi
              </label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <select 
                  v-model="formData.gender"
                  class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none appearance-none bg-white hover:border-gray-300"
                  required
                >
                  <option value="">Tanlang</option>
                  <option value="Erkak">Erkak</option>
                  <option value="Ayol">Ayol</option>
                </select>
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-group">
              <label class="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs text-green-600">6</span>
                Viloyat
              </label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <select 
                  v-model="formData.region"
                  class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 outline-none appearance-none bg-white hover:border-gray-300"
                  required
                >
                  <option value="">Tanlang</option>
                  <option value="Toshkent shahri">Toshkent shahri</option>
                  <option value="Toshkent viloyati">Toshkent viloyati</option>
                  <option value="Andijon">Andijon</option>
                  <option value="Buxoro">Buxoro</option>
                  <option value="Farg'ona">Farg'ona</option>
                  <option value="Jizzax">Jizzax</option>
                  <option value="Xorazm">Xorazm</option>
                  <option value="Namangan">Namangan</option>
                  <option value="Navoiy">Navoiy</option>
                  <option value="Qashqadaryo">Qashqadaryo</option>
                  <option value="Qoraqalpog'iston">Qoraqalpog'iston</option>
                  <option value="Samarqand">Samarqand</option>
                  <option value="Sirdaryo">Sirdaryo</option>
                  <option value="Surxondaryo">Surxondaryo</option>
                </select>
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span class="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-xs text-yellow-600">7</span>
                Klubi
              </label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400 group-focus-within:text-yellow-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <input 
                  v-model="formData.club"
                  type="text" 
                  class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200 outline-none hover:border-gray-300"
                  placeholder="Klubingizni kiriting"
                  required
                />
              </div>
            </div>
          </div>
          
          <div class="form-group">
            <label class="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-xs text-red-600">8</span>
              Tasdiqlash kodi
              <span class="text-xs text-gray-500">(Musobaqa kodi: **{{ competitionCode }}**)</span>
            </label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400 group-focus-within:text-red-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2v5a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2V9a2 2 0 012-2h2m4 0V5a2 2 0 10-4 0v2m4 0h2m-2 0h-2"/>
                </svg>
              </div>
              <input 
                v-model="formData.verificationCode"
                type="text" 
                class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200 outline-none hover:border-gray-300"
                placeholder="Tasdiqlash kodini kiriting"
                required
              />
            </div>
            <p v-if="!isCodeValid && formData.verificationCode.length > 0 && isFormValid" class="mt-2 text-sm text-red-600">
              Kiritilgan kod xato! Iltimos, musobaqa kodini tekshiring.
            </p>
          </div>


          <div class="pt-6">
            <button
              type="submit"
              :disabled="!isFormValid || !isCodeValid"
              :class="[
                'w-full font-bold py-4 px-6 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transform transition-all duration-200 shadow-xl text-lg',
                isFormValid && isCodeValid
                  ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 hover:scale-[1.02] active:scale-[0.98] cursor-pointer' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              ]"
            >
              <span class="flex items-center justify-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ isFormValid && isCodeValid ? "Ro'yxatdan o'tish" : "Barcha maydonlarni to'ldiring / Kodni kiriting" }}
              </span>
            </button>
          </div>
        </form>
      </div>

      <div class="mt-12">
          <h2 class="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center">
              Ro'yxatdan o'tgan sportchilar ({{ registeredAthletes.length }})
          </h2>
          <div class="bg-white rounded-3xl shadow-2xl p-6 overflow-x-auto">
              <table v-if="registeredAthletes.length > 0" class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-indigo-50">
                      <tr>
                          <th class="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">#</th>
                          <th class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Ism-Familiya</th>
                          <th class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Tug'ilgan sana</th>
                          <th class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Jinsi</th>
                          <th class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Viloyat</th>
                          <th class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Klub</th>
                      </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-100">
                      <tr v-for="(athlete, index) in registeredAthletes" :key="index" class="hover:bg-gray-50">
                          <td class="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ index + 1 }}</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{{ athlete.firstName }} {{ athlete.lastName }}</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ athlete.birthDate }}</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ athlete.gender }}</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ athlete.region }}</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ athlete.club }}</td>
                      </tr>
                  </tbody>
              </table>
              <p v-else class="text-center text-gray-500 py-4">Hozircha hech kim ro'yxatdan o'tmagan.</p>
          </div>
      </div>
      
      <div class="text-center mt-8 space-y-4">
        <p class="text-gray-600 text-sm">
          Ro'yxatdan o'tish orqali siz <a href="#" class="text-indigo-600 hover:text-indigo-700 font-semibold underline">foydalanish shartlari</a>ga rozilik bildirasiz
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div class="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
            <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="text-sm font-bold text-gray-800">Xavfsiz</h3>
            <p class="text-xs text-gray-600">Ma'lumotlar shifrlangan</p>
          </div>
          
          <div class="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
            <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-sm font-bold text-gray-800">Tez</h3>
            <p class="text-xs text-gray-600">Bir necha soniyada</p>
          </div>
          
          <div class="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
            <div class="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
              </svg>
            </div>
            <h3 class="text-sm font-bold text-gray-800">Oson</h3>
            <p class="text-xs text-gray-600">Oddiy jarayon</p>
          </div>
        </div>
      </div>

      <div v-if="showSuccess" class="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 px-4">
        <div class="bg-white rounded-3xl p-8 max-w-md mx-auto shadow-2xl transform transition-all animate-bounce-in">
          <div class="text-center">
            <div class="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-800 mb-3">Tabriklaymiz! 🎉</h3>
            <p class="text-gray-600 mb-6">Siz muvaffaqiyatli ro'yxatdan o'tdingiz. Tez orada sizga xabar beramiz.</p>
            <button 
              @click="showSuccess = false"
              class="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition duration-200"
            >
              Yopish
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'

const formData = reactive({
  profileImage: null,
  firstName: '',
  lastName: '',
  birthDate: '',
  gender: '',
  region: '',
  club: '',
  // Yangi maydon
  verificationCode: '' 
})

// Musobaqa kodi (statik misol, haqiqiy ilovada bu serverdan keladi)
const competitionCode = 'SPORT2025' 
const showSuccess = ref(false)
const imagePreview = ref(null)

// Ro'yxatdan o'tgan sportchilar ro'yxati
const registeredAthletes = reactive([
    { firstName: 'Ali', lastName: 'Valiyev', birthDate: '1998-05-15', gender: 'Erkak', region: 'Toshkent', club: 'Dinamo' },
    { firstName: 'Nigina', lastName: 'Karimova', birthDate: '2001-11-01', gender: 'Ayol', region: 'Samarqand', club: 'Bunyodkor' },
])

const onImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    formData.profileImage = file;
    imagePreview.value = URL.createObjectURL(file);
  }
}

// To'ldirilgan maydonlar sonini hisoblash (umumiy 8 ta maydon)
const filledFields = computed(() => {
  // .trim() ni qo'shdim, chunki kiritilgan matn bo'shliq bo'lishi mumkin
  return Object.values(formData).filter(value => (typeof value === 'string' ? value.trim() !== '' : value !== null)).length
})

const progressWidth = computed(() => {
  return (filledFields.value / 8) * 100 // Endi umumiy maydon 8 ta
})

// Hamma maydonlar to'ldirilganligini tekshirish
const isFormValid = computed(() => {
  return filledFields.value === 8
})

// Tasdiqlash kodi to'g'riligini tekshirish
const isCodeValid = computed(() => {
    return formData.verificationCode.toUpperCase() === competitionCode.toUpperCase()
})

const handleSubmit = () => {
  // Ro'yxatdan o'tish uchun barcha maydonlar to'ldirilgan bo'lishi va kod to'g'ri bo'lishi kerak
  if (isFormValid.value && isCodeValid.value) {
    console.log('Form yuborildi:', formData)

    // Yangi sportchini ro'yxatga qo'shish
    const newAthlete = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthDate: formData.birthDate,
        gender: formData.gender,
        region: formData.region,
        club: formData.club,
        // Rasmni qo'shish shart emas, chunki u katta hajmli va ro'yxatda kerakmas
    }
    registeredAthletes.push(newAthlete)


    showSuccess.value = true
    
    setTimeout(() => {
      showSuccess.value = false
      // Reset form
      Object.keys(formData).forEach(key => formData[key] = key === 'profileImage' ? null : '')
      imagePreview.value = null
    }, 3000)
  } else if (!isCodeValid.value) {
    // Agar kod xato bo'lsa (faqat barcha maydonlar to'ldirilgan bo'lsa)
    alert("Ro'yxatdan o'tish uchun kiritilgan tasdiqlash kodi noto'g'ri!")
  } else {
     // Agar hamma maydon to'ldirilmagan bo'lsa
     alert("Ro'yxatdan o'tish uchun barcha maydonlarni to'ldiring!")
  }
}
</script>

<style scoped>
@keyframes bounce-in {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-bounce-in {
  animation: bounce-in 0.6s ease-out;
}
</style>