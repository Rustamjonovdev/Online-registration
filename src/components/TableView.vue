<template>
  <div class="p-10">
    <h1 class="text-3xl font-bold mb-6 text-indigo-700">
        Turnir Setkasi: {{ weight }}
    </h1>
    
    <div v-if="isResultsMode">
        <div class="bg-green-100 p-6 rounded-xl border-4 border-green-500">
            <h2 class="text-2xl font-bold text-green-800 mb-4">🏆 Musobaqa Natijalari (Yakunlangan)</h2>
            <p class="text-lg">**G'olib (1-o'rin):** {{ winnerName }}</p>
            <p class="text-lg">**2-o'rin:** {{ runnerUpName }}</p>
            <p class="mt-4 text-sm text-gray-600">Quyida to'liq setka joylashgan bo'ladi...</p>
        </div>
        </div>
    <div v-else>
        <p class="text-gray-600">Musobaqa boshlanishini kuting. Setka tayyorlanmoqda...</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

// Routerdan weight parametrini olish
const props = defineProps({
    weight: {
        type: String,
        required: true
    }
});

// Ma'lumotlarni prop orqali URL dan olamiz
// Eslatma: Haqiqiy loyihada bu ma'lumotlar API dan olinadi!
const dummyResults = ref({
    '48 kg': { winner: 'Aliyev Dilshod', runnerUp: 'Qodirova Zaynab' },
    // ... barcha vaznlar uchun ma'lumotlar
});

const isResultsMode = computed(() => true); // Musobaqa o'tgan deb hisoblaymiz

const winnerName = computed(() => dummyResults.value[props.weight]?.winner || 'Noma\'lum');
const runnerUpName = computed(() => dummyResults.value[props.weight]?.runnerUp || 'Noma\'lum');
</script>