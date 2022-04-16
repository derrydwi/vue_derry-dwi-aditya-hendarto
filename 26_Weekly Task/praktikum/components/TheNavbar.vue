<template>
  <nav
    class="
      bg-white
      border-gray-200
      px-2
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
          data-collapse-toggle="mobile-menu-3"
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
          aria-controls="mobile-menu-3"
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
        id="mobile-menu-3"
        class="
          hidden
          justify-end
          items-center
          w-full
          md:flex md:w-9/12 md:order-1
        "
      >
        <div class="md:flex md:justify-between">
          <div class="my-auto lg:mx-3 py-2 flex justify-between">
            <span
              class="
                md:hidden
                text-gray-700
                dark:text-gray-400
                mr-5
                font-semibold
              "
              >Dark Mode</span
            >
            <label
              for="toggle-example"
              name="dark-mode-toggle"
              class="flex relative items-center cursor-pointer my-auto"
            >
              <input
                id="toggle-example"
                type="checkbox"
                class="sr-only"
                :checked="$colorMode.value === 'dark'"
                @click="darkModeToggle"
              />
              <div
                class="
                  w-11
                  h-6
                  bg-gray-200
                  rounded-full
                  border border-gray-200
                  toggle-bg
                  dark:bg-gray-700 dark:border-gray-600
                "
              ></div>
            </label>
          </div>
          <div class="relative lg:mx-3 md:mr-0 md:block py-2">
            <div
              class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-3
                pointer-events-none
              "
            >
              <svg
                class="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              v-model="query"
              type="search"
              class="
                block
                p-2
                pl-10
                w-full
                text-gray-900
                bg-gray-50
                rounded-lg
                border border-gray-300
                sm:text-sm
                focus:ring-blue-500 focus:border-blue-500
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              placeholder="Search..."
            />
          </div>
          <div class="lg:mx-3 py-2 my-auto">
            <img
              class="w-9 h-9 my-auto rounded-full"
              src="/profile_img.jpg"
              alt="profile_img"
            />
          </div>
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
  methods: {
    darkModeToggle() {
      if (this.$colorMode.value === 'light') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    },
  },
}
</script>
