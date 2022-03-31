<template>
  <v-navigation-drawer app :value="isDrawer">
    <v-list>
      <v-list-item
        v-for="category in categories"
        :key="category"
        @click="changeCategory(category)"
      >
        <v-list-item-title v-text="category" class="text-capitalize" />
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
  },
  methods: {
    navigateTo() {
      this.$route.path !== "/" && this.$router.push({ name: "home" });
    },
    changeCategory(category) {
      this.$store.dispatch("news/saveCategory", category);
      this.navigateTo();
    },
  },
};
</script>
