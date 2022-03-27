<template>
  <div class="detail dark:bg-gray-900 mb-auto">
    <div class="md:mx-14 pb-6 dark:text-white">
      <BaseHeading :text="news.title" class="mx-auto" />
      <button
        @click="back"
        class="
          items-center
          inline-flex
          ml-4
          md:ml-0
          px-2
          py-2
          font-medium
          tracking-wide
          capitalize
          duration-200
          transform
          text-gray-700
          transition-colors
          bg-white
          border border-gray-200
          rounded-lg
          dark:bg-gray-900 dark:border-gray-700
          hover:bg-gray-100
          dark:text-white
          sm:w-auto
          dark:hover:bg-gray-800 dark:ring-gray-700
          focus:ring focus:ring-gray-200 focus:ring-opacity-80
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="mx-1">Back</span>
      </button>
      <img
        class="mx-auto md:rounded-lg md:shadow-lg w-auto lg:w-3/4 my-5"
        :src="news.urlToImage"
        :alt="news.title"
      />
      <div class="mx-4 md:mx-0">
        <p class="py-2">
          {{ dateTime }}
        </p>
        <p class="py-2">{{ news.content }}</p>
        <div class="flex">
          <a
            :href="news.url"
            target="_blank"
            rel="noopener noreferrer"
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
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span class="mx-1">Read More</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeading from "@/components/BaseHeading.vue";
import { generateDateTime } from "@/utils/formatter";

export default {
  name: "DetailView",
  components: {
    BaseHeading,
  },
  computed: {
    news() {
      return this.$store.getters["news/getCurrentNews"];
    },
    dateTime() {
      return generateDateTime(this.news.publishedAt);
    },
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
