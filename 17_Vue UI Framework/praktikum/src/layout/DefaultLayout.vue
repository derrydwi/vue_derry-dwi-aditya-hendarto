<template>
  <v-app>
    <SideMenu />
    <TheNavbar />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "DefaultLayout",
  components: {
    SideMenu,
    TheNavbar,
    TheFooter,
  },
};
</script>
