<!-- src/components/LoginModal.vue -->
<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white rounded-xl shadow-lg p-6 w-80 relative flex flex-col gap-4"
      >
        <button
          class="absolute top-2 right-2 text-gray-600 hover:text-black"
          @click="$emit('close')"
        >
          ✕
        </button>

        <h2 class="text-2xl font-bold text-center text-amber-600">Kirish</h2>

        <form @submit.prevent="handleLogin" class="flex flex-col gap-3">
          <input
            type="text"
            v-model="username"
            placeholder="Foydalanuvchi nomi"
            class="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-amber-500"
            required
          />
          <input
            type="password"
            v-model="password"
            placeholder="Parol"
            class="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-amber-500"
            required
          />
          <button
            type="submit"
            class="bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  show: Boolean, // tashqaridan ko‘rinish holatini boshqarish uchun
});

const emit = defineEmits(["close"]);

const username = ref("");
const password = ref("");

const handleLogin = () => {
  //Login parol
  console.log("Username:", username.value);
  console.log("Password:", password.value);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
