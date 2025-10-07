<template>
  <div>
    <header>
      <div
        class="navbar lg: flex items-center justify-between bg-gray-400 p-4 font-medium"
      >
        <div class="logo-part">
          <img
            src="./assets/images/svg/logo.svg"
            alt=""
            class="logo lg: h-[64px]"
          />
        </div>
        <div class="list-part">
          <ul class="nav_list lg: flex gap-4 text-xl">
            <router-link to="/"> Asosiy sahifa</router-link>
            <router-link to="/tour_reg">Musobaqa sahifasi</router-link>
            <router-link to="/about">Biz haqimizda</router-link>
          </ul>
        </div>
        <div class="logIn-part hover:cursor-pointer">
          <button @click="showModal = true">
            <img src="./assets/images/svg/login.svg" alt="" />
          </button>
        </div>
      </div>
    </header>
    <main class="lg: min-h-screen">
      <router-view />
    </main>
    <!-- FOOTER -->
    <footer>
      <div class="footer-part">
        <div
          class="footer flex flex-col md:flex-row flex-wrap gap-6 md:gap-0 justify-between bg-gray-500 p-6 text-black text-center font-bold"
        >
          <!-- Biz haqimizda -->
          <div class="flex flex-col text-left gap-2 w-full md:w-auto">
            <h3 class="font-bold hover:cursor-pointer">Biz haqimizda</h3>
            <ul
              class="flex flex-col gap-2 text-sm font-normal hover:cursor-pointer"
            >
              <li>Topshirish punktlari</li>
              <li>Vakasiyalar</li>
            </ul>
          </div>

          <!-- Foydalanuvchilar -->
          <div class="flex flex-col text-left gap-2 w-full md:w-auto">
            <h3 class="font-bold hover:cursor-pointer">Foydalanuvchilar</h3>
            <ul
              class="flex flex-col gap-2 text-sm font-normal hover:cursor-pointer"
            >
              <li>Biz bilan bog'lanish</li>
              <li>Savol-javob</li>
            </ul>
          </div>

          <!-- Tadbirkorlarga -->
          <div class="flex flex-col text-left gap-2 w-full md:w-auto">
            <h3 class="font-bold hover:cursor-pointer">Tadbirkorlarga</h3>
            <ul
              class="flex flex-col gap-2 text-sm font-normal hover:cursor-pointer"
            >
              <li>R23 da soting</li>
              <li>Sotuvchi kabinetiga kirish</li>
              <li>Topshirish punktini ochish</li>
            </ul>
          </div>

          <!-- Social -->
          <div class="flex flex-col text-left gap-2 w-full md:w-auto">

            <div class="mt-4">
              <h2>Ijtimoiy tarmoqlar</h2>
              <div class="flex gap-2 mt-2">
                <a href="#">
                  <img
                    src="./assets/images/svg/instagram.svg"
                    alt="instagram icon"
                    class="w-6 h-6"
                  />
                </a>
                <a href="#">
                  <img
                    src="./assets/images/svg/telegram.svg"
                    alt="telegram icon"
                    class="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- LOGIN MODAL KOMPONENT -->
    <LoginModal :show="showModal" @close="showModal = false" />
  </div>
</template>

<script setup>
// IMPORTLAR
import { ref } from "vue";
import LoginModal from "./components/Login.vue";
const showModal = ref(false);
</script>

<style lang="scss" scoped></style>
