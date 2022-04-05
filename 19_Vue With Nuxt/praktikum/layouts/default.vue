<template>
  <v-app>
    <SideMenu />
    <TheNavbar :is-dark="isDark" />
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'DefaultLayout',
  components: {
    SideMenu,
    TheNavbar,
    TheFooter,
  },
  computed: {
    isDark() {
      return this.$store.state.news.isDark
    },
  },
  watch: {
    isDark(value) {
      this.$vuetify.theme.dark = value
    },
  },
  mounted() {
    this.$vuetify.theme.dark = this.isDark
  },
}
</script>
