<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="home dark:bg-gray-900 min-h-screen">
      <Navbar
        @changeCategory="changeCategory"
        @search="search"
        @darkModeToggle="darkModeToggle"
      />
      <Detail />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Detail from "@/components/Detail.vue";
import Footer from "@/components/Footer.vue";
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();
const isDark = ref(store.state.isDark);

const changeCategory = (categoryName) => {
  store.dispatch("saveCategory", categoryName);
};

const search = (query) => {
  store.dispatch("saveQuery", query);
};

const darkModeToggle = () => {
  isDark.value = !isDark.value;
  store.dispatch("saveIsDark", isDark.value);
};
</script>