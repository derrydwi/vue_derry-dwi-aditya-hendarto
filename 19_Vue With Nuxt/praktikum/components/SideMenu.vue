<template>
  <v-navigation-drawer app clipped :value="isDrawer">
    <v-list>
      <v-list-group prepend-icon="mdi-view-dashboard" no-action>
        <template #activator>
          <v-list-item-title>Category</v-list-item-title>
        </template>
        <v-list-item
          v-for="category in categories"
          :key="category"
          @click="navigateTo({ menu: menus[0], type: category })"
        >
          <v-list-item-title
            class="text-capitalize"
            v-text="category"
          ></v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group prepend-icon="mdi-newspaper-variant" no-action>
        <template #activator>
          <v-list-item-title>Sources</v-list-item-title>
        </template>
        <v-list-item
          v-for="source in sources"
          :key="source.id"
          @click="navigateTo({ menu: menus[1], type: source.id })"
        >
          <v-list-item-title
            class="text-capitalize"
            v-text="source.name"
          ></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { menus, categories, sources } from '~/common/api'

export default {
  name: 'SideMenu',
  computed: {
    categories() {
      return categories
    },
    sources() {
      return sources
    },
    isDrawer() {
      return this.$store.getters['news/getIsDrawer']
    },
    menus() {
      return menus
    },
  },
  methods: {
    navigateTo({ menu, type }) {
      this.$router.push({
        name: 'menu-type',
        params: {
          menu,
          type,
        },
      })
    },
  },
}
</script>
