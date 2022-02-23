<template>
  <div class="home dark:bg-gray-900 min-h-screen">
    <Navbar @changeCategory="changeCategory" />
    <Detail />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Detail from "@/components/Detail.vue";
import Footer from "@/components/Footer.vue";
import { useStore } from "vuex";

const store = useStore();
const changeCategory = (categoryName) => {
  store.dispatch("saveCategory", categoryName);
};
</script>