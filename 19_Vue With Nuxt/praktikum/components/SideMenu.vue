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
          @click="navigateTo({ type: 'category', path: category })"
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
          @click="navigateTo({ type: 'source', path: source.id })"
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
import { categories, sources } from '~/common/api'

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
  },
  methods: {
    navigateTo({ type, path }) {
      this.$router.push({
        path: `/${type}/${path}`,
      })
    },
  },
}
</script>
