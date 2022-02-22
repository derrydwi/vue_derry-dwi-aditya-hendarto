<template>
  <div class="h-100 w-full flex items-center justify-center font-sans">
    <div v-if="newsList.length">
      <div
        class="py-5 mx-auto"
        v-for="(news, index) in newsList"
        :key="news.url"
      >
        <router-link
          :to="{
            name: 'detail',
            params: {
              id: news.title.replace(/ /g, '-').replace(/[^\w-]+/g, ''),
            },
          }"
          @click="saveDetail(index)"
        >
          <div
            class="
              mx-auto
              max-w-3xl
              overflow-hidden
              bg-white
              lg:rounded-lg
              md:rounded-lg
              sm:rounded-none
              drop-shadow-xl
              dark:bg-gray-800
            "
          >
            <img
              class="object-cover w-full h-64"
              :src="news.urlToImage"
              alt="Article"
            />

            <div class="p-6">
              <div>
                <span class="text-xs text-gray-600 dark:text-gray-300">{{
                  new Date(news.publishedAt).toUTCString().substring(0, 22)
                }}</span>
                <p
                  class="
                    block
                    text-2xl
                    font-semibold
                    text-gray-800
                    transition-colors
                    duration-200
                    transform
                    dark:text-white
                  "
                >
                  {{ news.title }}
                </p>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {{ news.description }}
                </p>
              </div>

              <div class="mt-4">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <p
                      href="#"
                      class="font-semibold text-gray-700 dark:text-gray-200"
                    >
                      {{ news.author }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-else class="flex min-h-screen">
      <svg
        role="status"
        class="
          mr-2
          w-8
          h-8
          text-gray-200
          animate-spin
          dark:text-gray-600
          fill-blue-600
          align-middle
          m-auto
        "
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        ></path>
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";

const store = useStore();
const newsList = ref([]);

const loadNews = async () => {
  await axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=eb0a5d20fea149669a829a8ae47c7c6a"
    )
    .then((response) => (newsList.value = response.data.articles))
    .catch((error) => {
      console.log(error.response);
    });
};

const saveDetail = (index) => {
  store.dispatch("saveNews", newsList.value[index]);
};

watchEffect(() => loadNews());
</script>

<style>
</style>