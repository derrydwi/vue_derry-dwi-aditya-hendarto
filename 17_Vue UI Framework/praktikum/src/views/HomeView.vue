<template>
  <div v-if="!info">
    <BaseHeading :text="title" />
    <NewsCard
      :news-list="newsList"
      @save-detail="saveDetail"
      @load-more="loadMore"
    />
  </div>
  <div v-else>
    <BaseError :info="info" />
  </div>
</template>

<script>
import BaseError from "@/components/BaseError.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import NewsCard from "@/components/NewsCard.vue";

export default {
  name: "HomeView",
  components: {
    BaseError,
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
    info() {
      return this.$store.getters["news/getInfo"];
    },
    newsList() {
      return this.$store.getters["news/getNews"];
    },
    query() {
      return this.$store.getters["news/getQuery"];
    },
  },
  methods: {
    fetchNews(type, loadMore) {
      this.$store.dispatch("news/fetchNews", {
        type: type,
        loadMore: loadMore,
      });
    },
    loadMore() {
      this.query
        ? this.fetchNews("search", true)
        : this.fetchNews("category", true);
    },
    saveDetail(index) {
      this.$store.dispatch("news/saveCurrentNews", index);
    },
  },
  mounted() {
    if (this.query && !this.newsList.length) {
      this.fetchNews("search", false);
    } else if (!this.newsList.length) {
      this.fetchNews("category", false);
    }
  },
  watch: {
    query() {
      if (this.query) {
        this.fetchNews("search", false);
        window.scrollTo(0, 0);
      }
    },
    category() {
      if (this.category) {
        this.fetchNews("category", false);
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>
