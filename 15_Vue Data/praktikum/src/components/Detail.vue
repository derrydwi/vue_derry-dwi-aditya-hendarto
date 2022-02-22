<template>
  <div class="detail dark:text-white mx-14 md:mx-0 lg:mx-14 sm:mx-0 pb-6">
    <Heading :title="news.title" class="mx-auto" />
    <router-link :to="{ name: 'home' }"
      ><button
        class="
          flex
          items-center
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
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-left"
          viewBox="0 0 16 16"
        >
          <path
            d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"
          />
        </svg>
        <span class="mx-1">Back</span>
      </button></router-link
    >
    <img
      class="mx-auto rounded-lg shadow-lg w-auto lg:w-3/4 my-5"
      :src="news.urlToImage"
      :alt="news.title"
    />
    <p class="py-2">
      {{ new Date(news.publishedAt).toUTCString().substring(0, 22) }}
    </p>
    <p class="py-2">{{ news.description }}</p>
    <p class="py-2">{{ news.content }}</p>
    <a :href="news.url" target="_blank" rel="noopener noreferrer">
      <button
        class="
          mx-auto
          flex
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
      </button>
    </a>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Heading from "@/components/Heading.vue";

const store = useStore();
const news = store.state.currentNews;
</script>

<style>
</style>