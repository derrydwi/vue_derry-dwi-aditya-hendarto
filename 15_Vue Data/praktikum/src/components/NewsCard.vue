<template>
  <div class="h-100 w-full flex items-center justify-center font-sans">
    <div v-if="newsList.length">
      <div
        class="py-3 md:py-5 mx-auto"
        v-for="(news, index) in newsList"
        :key="news.url"
      >
        <button @click="saveDetail(index, news.title)">
          <div
            class="
              text-left
              mx-auto
              max-w-3xl
              overflow-hidden
              bg-white
              md:rounded-lg
              sm:rounded-none
              md:drop-shadow-xl
              dark:bg-gray-900
              md:dark:bg-gray-800
            "
          >
            <img
              class="object-cover w-full h-64"
              :src="news.urlToImage"
              alt="Article"
            />

            <div class="px-4 py-3 md:p-6">
              <div>
                <span class="text-xs text-gray-600 dark:text-gray-300">{{
                  dateTime(news.publishedAt)
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
        </button>
      </div>
      <div class="mt-5 md:mt-0 flex mb-5">
        <button
          @click="$emit('load-more')"
          class="
            mx-auto
            inline-flex
            items-center
            px-2
            py-2
            font-medium
            tracking-wide
            text-white
            capitalize
            transition-colors
            duration-200
            transform
            bg-blue-600
            rounded-md
            hover:bg-blue-500
            focus:outline-none
            focus:ring
            focus:ring-blue-300
            focus:ring-opacity-80
          "
        >
          <svg
            v-if="isLoading"
            class="animate-spin mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mx-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="mx-1">Load More</span>
        </button>
      </div>
    </div>
    <div v-else class="flex min-h-screen">
      <svg
        v-if="isLoading"
        class="animate-spin mr-2 h-8 w-8 dark:text-blue-600 align-middle m-auto"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import { generateSlug, generateDateTime } from "@/utils/formatter";

export default {
  name: "NewsCard",
  props: {
    newsList: Array,
  },
  computed: {
    isLoading() {
      return this.$store.getters["news/getIsLoading"];
    },
  },
  methods: {
    saveDetail(index, title) {
      this.$emit("save-detail", index);
      this.$router.push({
        name: "detail",
        params: {
          slug: generateSlug(title),
        },
      });
    },
    dateTime(date) {
      return generateDateTime(date);
    },
  },
};
</script>
