<template>
  <v-app>
    <SideMenu
      :categories="categories"
      :sources="sources"
      :is-drawer="isDrawer"
      :menus="menus"
    />
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
import { menus, categories, sources } from '~/common/api'

export default {
  name: 'DefaultLayout',
  components: {
    SideMenu,
    TheNavbar,
    TheFooter,
  },
  computed: {
    categories() {
      return categories
    },
    sources() {
      return sources
    },
    isDark() {
      return this.$store.getters['news/getIsDark']
    },
    isDrawer() {
      return this.$store.getters['news/getIsDrawer']
    },
    menus() {
      return menus
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
