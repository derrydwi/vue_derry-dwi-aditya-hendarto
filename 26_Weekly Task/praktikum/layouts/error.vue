<template>
  <div class="text-center">
    <h1 v-if="error.statusCode === 404">404 Not Found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink
      :to="{ name: 'index' }"
      class="
        inline-flex
        items-center
        py-2
        px-3
        mt-5
        space-x-2
        rounded-md
        bg-gray-800
        text-gray-300 text-sm
        leading-5
        font-medium
        shadow-lg
        hover:bg-gray-700
        transition
        ease-in-out
        duration-100
      "
      >Go to home page</NuxtLink
    >
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  layout: 'error',
  props: {
    error: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
