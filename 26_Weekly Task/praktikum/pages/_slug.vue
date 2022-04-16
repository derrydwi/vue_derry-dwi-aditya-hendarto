<template>
  <BaseLoading v-if="$fetchState.pending" />
  <div
    v-else
    class="
      prose
      sm:prose-sm
      md:prose-md
      lg:prose-lg
      mx-auto
      dark:prose-invert
      mb-4
    "
  >
    <NuxtContent class="prose-img:shadow-xl" :document="content" />
    <div
      class="prose-a:no-underline flex mx-auto"
      :class="!prev || !next ? 'justify-center' : 'justify-between'"
    >
      <NuxtLink
        v-if="prev"
        :to="{ name: 'slug', params: { slug: prev.slug } }"
        class="
          inline-flex
          items-center
          py-2
          px-3
          space-x-2
          text-gray-900
          bg-white
          border border-gray-300
          focus:outline-none
          hover:bg-gray-100
          focus:ring-4 focus:ring-gray-200
          rounded-md
          text-sm
          transition
          ease-in-out
          duration-100
          dark:bg-gray-800
          dark:text-white
          dark:border-gray-600
          dark:hover:bg-gray-700
          dark:hover:border-gray-600
          dark:focus:ring-gray-700
        "
        :class="{ 'mr-5': next }"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          /></svg
        ><span>{{ prev.title }}</span></NuxtLink
      >
      <NuxtLink
        v-if="next"
        :to="{ name: 'slug', params: { slug: next.slug } }"
        class="
          inline-flex
          items-center
          py-2
          px-3
          space-x-2
          text-gray-900
          bg-white
          border border-gray-300
          focus:outline-none
          hover:bg-gray-100
          focus:ring-4 focus:ring-gray-200
          rounded-md
          text-sm
          transition
          ease-in-out
          duration-100
          dark:bg-gray-800
          dark:text-white
          dark:border-gray-600
          dark:hover:bg-gray-700
          dark:hover:border-gray-600
          dark:focus:ring-gray-700
        "
        :class="{ 'ml-5': prev }"
        ><span>{{ next.title }}</span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          /></svg
      ></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {},
      prev: {},
      next: {},
    }
  },
  fetch() {
    this.getContent()
  },
  head() {
    if (!this.content) return
    return {
      title: this.content.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `This is summary of ${this.content.title} section`,
        },
      ],
    }
  },
  methods: {
    getContent() {
      this.$content(this.$route.params.slug)
        .fetch()
        .then((result) => {
          this.content = result
        })
        .catch((error) => {
          this.$nuxt.error({ statusCode: 404, message: error.message })
        })

      this.$content('')
        .only(['id', 'slug', 'title'])
        .sortBy('id', 'asc')
        .surround(this.$route.params.slug)
        .fetch()
        .then(([prev, next]) => {
          this.prev = prev
          this.next = next
        })
        .catch((error) => {
          this.$nuxt.error({ statusCode: 404, message: error.message })
        })
    },
  },
}
</script>