<template>
  <nav
    class="
      bg-white
      border-gray-200
      px-4
      lg:px-2
      sm:px-4
      py-2.5
      dark:bg-gray-800
      shadow
      sticky
      top-0
      z-50
    "
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <NuxtLink
        :to="{ name: 'index' }"
        class="bg-transparent dark:bg-transparent"
      >
        <button class="flex">
          <span
            class="
              ml-2
              self-center
              text-lg
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            >Vue JS A</span
          >
        </button>
      </NuxtLink>
      <div class="flex md:hidden md:order-2">
        <button
          data-collapse-toggle="sidebar"
          type="button"
          class="
            inline-flex
            items-center
            p-2
            ml-3
            text-sm text-gray-500
            rounded-lg
            md:hidden
            hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-gray-200
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
          "
          aria-controls="sidebar"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="
          hidden
          justify-end
          items-center
          w-full
          md:flex md:w-9/12 md:order-1
        "
      >
        <div class="md:flex md:justify-between">
          <BaseColorMode class="my-auto lg:mx-3 py-2 flex justify-between" />
          <BaseProfile class="lg:mx-3 py-2 my-auto" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  computed: {
    query: {
      get() {
        return this.$store.getters['summary/getQuery']
      },
      set(value) {
        return this.$store.dispatch('summary/saveQuery', value)
      },
    },
  },
}
</script>
