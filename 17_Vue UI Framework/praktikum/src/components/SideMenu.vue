<template>
  <v-navigation-drawer app clipped :value="isDrawer">
    <v-list>
      <v-list-group prepend-icon="mdi-view-dashboard" no-action>
        <template v-slot:activator>
          <v-list-item-title>Category</v-list-item-title>
        </template>
        <v-list-item
          v-for="category in categories"
          :key="category"
          @click="changeCategory(category)"
        >
          <v-list-item-title
            v-text="category"
            class="text-capitalize"
          ></v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group prepend-icon="mdi-newspaper-variant" no-action>
        <template v-slot:activator>
          <v-list-item-title>Sources</v-list-item-title>
        </template>
        <v-list-item
          v-for="source in sources"
          :key="source.id"
          @click="changeSources({ id: source.id, name: source.name })"
        >
          <v-list-item-title
            v-text="source.name"
            class="text-capitalize"
          ></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
      categories: [
        "general",
        "business",
        "entertainment",
        "health",
        "science",
        "sports",
        "technology",
      ],
    };
  },
  computed: {
    isDrawer() {
      return this.$store.getters["news/getIsDrawer"];
    },
    sources() {
      return this.$store.getters["news/getSources"];
    },
  },
  methods: {
    navigateTo() {
      this.$route.path !== "/" && this.$router.push({ name: "home" });
    },
    changeCategory(category) {
      this.$store.dispatch("news/saveCategory", category);
      this.navigateTo();
    },
    changeSources(source) {
      this.$store.dispatch("news/saveSource", source);
      this.navigateTo();
    },
  },
};
</script>
