<template>
  <v-container v-if="!info.news">
    <BaseError v-if="info.sources" :info="info" />
    <BaseHeading :text="title" />
    <NewsCard
      :news-list="newsList"
      @save-detail="saveDetail"
      @load-more="loadMore"
    />
  </v-container>
  <v-container v-else>
    <BaseError :info="info" />
  </v-container>
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
    pageTitle() {
      return `${process.env.VUE_APP_TITLE}`;
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
    initialFetch() {
      if (this.query && !this.newsList.length) {
        this.fetchNews("search", false);
      } else if (this.category && !this.newsList.length) {
        this.fetchNews("category", false);
      } else if (this.source && !this.newsList.length) {
        this.fetchNews("source", false);
      }
      !this.sources.length && this.fetchSources();
    },
    loadMore() {
      if (this.query) {
        this.fetchNews("search", true);
      } else if (this.category) {
        this.fetchNews("category", true);
      } else if (this.source) {
        this.fetchNews("source", true);
      }
    },
    saveDetail(index) {
      this.$store.dispatch("news/saveCurrentNews", index);
    },
    setTitle() {
      document.title = this.pageTitle;
    },
  },
  mounted() {
    this.initialFetch();
    this.setTitle();
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
