<template>
  <div :class="isDark ? 'dark' : ''">
    <TheNavbar :is-dark="isDark" />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "DefaultLayout",
  components: {
    TheNavbar,
    TheFooter,
  },
  computed: {
    isDark() {
      return this.$store.getters["news/getIsDark"];
    },
  },
};
</script>

<style>
</style>