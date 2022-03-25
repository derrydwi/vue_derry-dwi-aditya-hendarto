<template>
  <div class="home dark:bg-gray-900">
    <BaseHeading :text="title" />
    <NewsCard
      :newsList="newsList"
      @save-detail="saveDetail"
      @load-more="loadMore"
    />
  </div>
</template>

<script>
import BaseHeading from "@/components/BaseHeading.vue";
import NewsCard from "@/components/NewsCard.vue";

export default {
  name: "HomeView",
  components: {
    BaseHeading,
    NewsCard,
  },
  computed: {
    category() {
      return this.$store.getters["news/getCategory"];
    },
    title() {
      return this.query ? `Result of "${this.query}"` : `${this.category} News`;
    },
    newsList() {
      return this.$store.getters["news/getNews"];
    },
    query() {
      return this.$store.getters["news/getQuery"];
    },
  },
  methods: {
    fetchNews() {
      this.$store.dispatch("news/fetchNews");
    },
    fetchSearchNews() {
      this.$store.dispatch("news/fetchSearchNews");
    },
    loadMore() {
      this.query
        ? this.$store.dispatch("news/fetchSearchMoreNews")
        : this.$store.dispatch("news/fetchMoreNews");
    },
    saveDetail(index) {
      this.$store.dispatch("news/saveCurrentNews", index);
    },
  },
  mounted() {
    this.query ? this.fetchSearchNews() : this.fetchNews();
  },
  watch: {
    category() {
      if (this.category) {
        this.fetchNews();
        window.scrollTo(0, 0);
      }
    },
    query() {
      if (this.query) {
        this.fetchSearchNews();
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>
