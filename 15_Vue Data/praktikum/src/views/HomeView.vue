<template>
  <div class="home dark:bg-gray-900">
    <Navbar @changeCategory="changeCategory" />
    <Heading :title="title" />
    <NewsCard
      :newsList="newsList"
      @saveDetail="saveDetail"
      @loadMore="loadMore"
    />
    <Footer />
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

const apiKey = "eb0a5d20fea149669a829a8ae47c7c6a";

const store = useStore();
const newsList = ref([]);
const currentPage = ref(1);
const title = ref(store.state.category);

const loadNews = async () => {
  await axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${store.state.category}&pageSize=5&page=${currentPage.value}&apiKey=${apiKey}`
    )
    .then((response) => newsList.value.push(...response.data.articles))
    .catch((error) => {
      console.log(error.response);
    });
};

const saveDetail = (index) => {
  store.dispatch("saveNews", newsList.value[index]);
};

const loadMore = () => {
  currentPage.value++;
  loadNews();
};

const changeCategory = (categoryName) => {
  store.dispatch("saveCategory", categoryName);
  title.value = categoryName;
  newsList.value = [];
  currentPage.value = 1;
  loadNews();
  window.scrollTo(0, 0);
};

onMounted(() => loadNews());
</script>
