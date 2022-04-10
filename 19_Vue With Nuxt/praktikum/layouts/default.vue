<template>
  <v-app>
    <v-navigation-drawer v-model="isDrawer" app clipped>
      <v-list>
        <BaseListGroup
          v-for="([icon, text, list], index) in items"
          :key="index"
          :icon="icon"
          :text="text"
          :list="list"
        />
      </v-list>
    </v-navigation-drawer>
    <TheNavbar :is-dark="isDark" @drawer-toggle="drawerToggle" />
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import BaseListGroup from '@/components/BaseListGroup.vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
import { menus, categories, sources } from '~/common/api'

export default {
  name: 'DefaultLayout',
  components: {
    BaseListGroup,
    TheNavbar,
    TheFooter,
  },
  data() {
    return {
      isDrawer: false,
      items: [
        ['mdi-view-dashboard', menus[0], categories],
        ['mdi-newspaper-variant', menus[1], sources],
      ],
    }
  },
  computed: {
    isDark() {
      return this.$store.getters['news/getIsDark']
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
  methods: {
    drawerToggle() {
      this.isDrawer = !this.isDrawer
    },
  },
}
</script>
