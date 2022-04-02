<template>
  <v-navigation-drawer app :value="isDrawer">
    <v-list>
      <v-subheader>CATEGORY</v-subheader>
      <v-list-item
        v-for="category in categories"
        :key="category"
        @click="changeCategory(category)"
      >
        <v-list-item-title v-text="category" class="text-capitalize" />
      </v-list-item>
      <v-subheader>SOURCES</v-subheader>
      <v-list-item
        v-for="source in sources"
        :key="source.id"
        @click="changeSources(source.id)"
      >
        <v-list-item-title v-text="source.name" class="text-capitalize" />
      </v-list-item>
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
