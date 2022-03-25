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
      if (this.query) {
        return `Result of "${this.query}"`;
      } else {
        return `${this.category} News`;
      }
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
      if (this.query) {
        this.$store.dispatch("news/fetchSearchMoreNews");
      } else {
        this.$store.dispatch("news/fetchMoreNews");
      }
    },
    searchLoadMore() {
      this.$store.dispatch("news/fetchSearchMoreNews");
    },
    saveDetail(index) {
      this.$store.dispatch("news/saveCurrentNews", index);
    },
  },
  mounted() {
    if (this.query) {
      this.fetchSearchNews();
    } else {
      this.fetchNews();
    }
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
