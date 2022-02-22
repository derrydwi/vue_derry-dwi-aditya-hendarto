<template>
  <div>
    <nav class="sticky top-0 z-50">
      <Header />
    </nav>
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>