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
      return this.query
        ? `Result of "${this.query}"`
        : `${this.category || this.source.name} News`;
    },
    info() {
      return this.$store.getters["news/getInfo"];
    },
    newsList() {
      return this.$store.getters["news/getNews"];
    },
    source() {
      return this.$store.getters["news/getSource"];
    },
    sources() {
      return this.$store.getters["news/getSources"];
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
    fetchSources() {
      this.$store.dispatch("news/fetchSources");
    },
    loadMore() {
      if (this.query) {
        this.fetchNews("search", true);
      } else if (this.category) {
        this.fetchNews("category", true);
      } else {
        this.fetchNews("source", true);
      }
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
    !this.sources.length && this.fetchSources();
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
    source() {
      if (this.source) {
        this.fetchNews("source", false);
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>
