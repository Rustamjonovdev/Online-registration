<template>
  <div class="lg:mx-auto my-4 p-4 max-w-7xl bg-gray-200 rounded-xl min-h-screen">
    <h2 class="text-center text-3xl font-semibold">
      Musobaqa registratsiya qilish
    </h2>

    <form
      @submit.prevent="handleSubmit"
      class="tour_main flex flex-col p-4 rounded-lg gap-4 mx-[150px] my-16"
    >
      <!-- MUSOBAQA RASMI -->
      <h2 class="text-xl font-medium">
        Musobaqa o'tkazilish joyi rasmi yoki zalni yuklang
      </h2>
      <input
        type="file"
        accept="image/*"
        @change="onImageChange"
        class="p-2 border-2 rounded-xl bg-gray-300 focus:outline-amber-500 w-[550px]"
      />

      <!-- MUSOBAQA NOMI -->
      <h2 class="text-xl font-medium">Musobaqa nomi</h2>
      <input
        type="text"
        v-model="form.name"
        class="p-2 border-2 rounded-xl bg-gray-300 focus:outline-amber-500 w-[550px]"
      />

      <!-- MUSOBAQA JOYI -->
      <h2 class="text-xl font-medium">Musobaqa o'tkazilish Joyi</h2>
      <input
        type="text"
        v-model="form.place"
        class="p-2 border-2 rounded-xl bg-gray-300 focus:outline-amber-500 w-[550px]"
      />

      <!-- MUSOBAQA KUNI -->
      <h2 class="text-xl font-medium">Musobaqa kuni</h2>
      <input
        type="date"
        v-model="form.date"
        class="p-2 border-2 rounded-xl bg-gray-300 focus:outline-amber-500 w-[550px]"
      />

      <!-- MUSOBAQA NIZOMI -->
      <h2 class="text-xl font-medium">Musobaqa nizomini yuklang</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        @change="onNizomChange"
        class="p-2 border-2 rounded-xl bg-gray-300 focus:outline-amber-500 w-[550px]"
      />

      <!-- YUBORISH -->
      <div>
        <button
          type="submit"
          class="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Yuborish
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  name: "",
  place: "",
  date: "",
  image: null,
  nizom: null,
});

// Rasm yuklash
const onImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    form.image = URL.createObjectURL(file);
  }
};

// Nizom yuklash
const onNizomChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    form.nizom = URL.createObjectURL(file);
  }
};

// Yuborish
const handleSubmit = () => {
  console.log("Form submitted:", form);

  router.push({
    name: "Home",
    query: {
      name: form.name,
      place: form.place,
      date: form.date,
      image: form.image,
      nizom: form.nizom,
    },
  });
};
</script>
