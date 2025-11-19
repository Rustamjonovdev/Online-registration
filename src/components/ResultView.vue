<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-xl">
      <router-link
        :to="{ name: 'tour_page' }" 
        class="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold mb-8 group"
      >
         Musobaqa sahifasiga qaytish
      </router-link>

      <h1 class="text-4xl font-extrabold text-gray-800 mb-2">
        🏆 Vazn toifasi natijalari
      </h1>
      <h2 class="text-2xl font-semibold text-indigo-600 mb-8">
        {{ resultsData.weight }}
      </h2>

      <div v-if="resultsData.weight === 'Barcha vazn toifalari'"> 
          <p class="text-gray-700 text-lg italic bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
            Bu sahifa barcha vaznlar bo'yicha yakuniy hisobotni ko'rsatish uchun ishlatiladi.
          </p>
      </div>
      
      <div v-else class="space-y-6">
        
        <div v-if="resultsData.first === 'Natija yo\'q'" class="p-6 bg-red-100 border-l-4 border-red-500 rounded-xl text-red-700 font-semibold shadow-lg">
             Kechirasiz, **{{ resultsData.weight }}** vazn toifasi uchun yakuniy natijalar hali e'lon qilinmagan.
        </div>
        
        <div v-else>
            <div class="flex items-center gap-4 p-5 bg-yellow-50 border-4 border-yellow-400 rounded-xl shadow-lg">
                <div class="text-4xl">🥇</div>
                <div>
                    <p class="text-sm font-medium text-gray-600">1-o'rin (Oltin medal)</p>
                    <p class="text-2xl font-bold text-gray-800">{{ resultsData.first }}</p>
                </div>
            </div>

            <div class="flex items-center gap-4 p-5 bg-gray-100 border-4 border-gray-400 rounded-xl shadow-lg">
                <div class="text-4xl">🥈</div>
                <div>
                    <p class="text-sm font-medium text-gray-600">2-o'rin (Kumush medal)</p>
                    <p class="text-2xl font-bold text-gray-800">{{ resultsData.second }}</p>
                </div>
            </div>

            <div class="flex items-center gap-4 p-5 bg-amber-50 border-4 border-amber-400 rounded-xl shadow-lg">
                <div class="text-4xl">🥉</div>
                <div>
                    <p class="text-sm font-medium text-gray-600">3-o'rin (Bronza medal)</p>
                    <p class="text-2xl font-bold text-gray-800">{{ resultsData.third }}</p>
                </div>
            </div>
        </div>
      </div>
      
      </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    weight: {
        type: String,
        required: true
    }
});

const ALL_RESULTS = {
    '48 kg': { first: 'Aliyev Dilshod', second: 'Qodirova Zaynab', third: 'Ibragimov Otabek' },
    '52 kg': { first: 'Karimov Jahongir', second: 'Yusupova Gulnoza', third: 'Zokirov Akmal' },
    '57 kg': { first: 'Sobirov Bekzod', second: 'Xamroyev Eldor', third: 'Musaeva Nigora' },
    '63 kg': { first: 'Valiyev Jamshid', second: 'Aliyev Sherzod', third: 'Nazarov Dilshod' },
    '69 kg': { first: 'Raufova Aziza', second: 'Halimov Abror', third: 'Davlatov Aziz' },
    '75 kg': { first: 'Mirzayev Kamol', second: 'Sulaymonov Sardor', third: 'Ramazonov Asliddin' },
    '81 kg': { first: 'Rustamov Farrux', second: 'Xasanov Ilmiy', third: 'Toshpulatov Said' },
    '+81 kg': { first: 'Ganiyev Rustam', second: 'Madaminov Sodiq', third: 'Usmonov Furqat' },
};

const resultsData = computed(() => {
    // props.weight qiymati toza (trimmed) bo'lishi kerak deb qabul qilingan.
    if (props.weight === 'Umumiy') {
        return { weight: 'Barcha vazn toifalari', first: '', second: '', third: '' };
    }
    
    const data = ALL_RESULTS[props.weight];
    
    // Agar vazn topilmasa, 'Natija yo'q' xabarini chiqaradi, bu Template qismidagi 'v-if'ni ishga tushiradi.
    return {
        weight: props.weight, 
        first: data?.first || 'Natija yo\'q',
        second: data?.second || 'Natija yo\'q',
        third: data?.third || 'Natija yo\'q'
    };
});
</script>