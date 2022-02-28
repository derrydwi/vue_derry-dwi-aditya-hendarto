<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="home dark:bg-gray-900">
      <Navbar
        @changeCategory="changeCategory"
        @search="search"
        @darkModeToggle="darkModeToggle"
      />
      <Heading :title="title" />
      <NewsCard
        :newsList="newsList"
        @saveDetail="saveDetail"
        @loadMore="loadMore"
      />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Heading from "@/components/Heading.vue";
import NewsCard from "@/components/NewsCard.vue";
import Footer from "@/components/Footer.vue";

import axios from "axios";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const APIKEY = "2b25f844d1db4b019ec74d004426a9fd";

const store = useStore();
const newsList = ref([]);
const isSearch = ref(false);
const isDark = ref(store.state.isDark);

const oldQuery = ref(store.state.query);

const currentPage = ref(1);
const title = ref(store.state.category);

const requestApi = async (request) => {
  await axios
    .get(request)
    .then((response) => newsList.value.push(...response.data.articles))
    .catch((error) => console.log(error.response));
};

const resetList = () => {
  newsList.value = [];
  currentPage.value = 1;
  window.scrollTo(0, 0);
};

const loadNews = () => {
  requestApi(
    `https://newsapi.org/v2/top-headlines?country=us&category=${store.state.category}&pageSize=5&page=${currentPage.value}&apiKey=${APIKEY}`
  );
  isSearch.value = false;
};

const saveDetail = (index) => {
  store.dispatch("saveNews", newsList.value[index]);
};

const loadMore = () => {
  currentPage.value++;
  if (isSearch.value) {
    search(oldQuery.value);
  } else {
    loadNews();
  }
};

const changeCategory = (categoryName) => {
  store.dispatch("saveCategory", categoryName);
  title.value = `${categoryName} News`;
  resetList();
  loadNews();
};

const search = async (query) => {
  if (isSearch.value === false || oldQuery.value != query) {
    resetList();
    title.value = `Result of "${query}"`;
    isSearch.value = true;
  }
  requestApi(
    `https://newsapi.org/v2/everything?q=${query}&pageSize=5&page=${currentPage.value}&apiKey=${APIKEY}`
  );
  oldQuery.value = query;
  store.dispatch("deleteQuery");
};

const darkModeToggle = () => {
  isDark.value = !isDark.value;
  store.dispatch("saveIsDark", isDark.value);
};

onMounted(() => {
  if (store.state.query) {
    search(oldQuery.value);
    store.dispatch("deleteQuery");
  } else {
    loadNews();
  }
});
</script>
