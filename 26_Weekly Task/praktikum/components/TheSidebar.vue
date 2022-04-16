<template>
  <aside
    id="sidebar"
    class="
      hidden
      fixed
      inset-0
      z-20
      flex-none
      w-72
      h-full
      lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/5 lg:block
    "
  >
    <div
      id="navWrapper"
      class="
        overflow-hidden overflow-y-auto
        z-20
        h-full
        bg-white
        scrolling-touch
        max-w-2xs
        lg:h-screen lg:block lg:sticky
        top:24
        lg:top-12
        dark:bg-gray-900
        lg:mr-0
      "
    >
      <nav
        id="nav"
        class="
          pt-16
          px-1
          lg:pt-2
          overflow-y-auto
          font-medium
          text-base
          lg:text-md
          pb-10
          lg:pb-20
          sticky?lg:h-(screen-18)
        "
        aria-label="Docs navigation"
      >
        <ul class="p-4 lg:py-8 lg:pl-0 lg:pr-8">
          <li class="mb-4">
            <div class="w-full relative flex flex-col justify-between">
              <div class="w-full relative mx-1">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div
                    class="
                      absolute
                      inset-y-0
                      left-0
                      pl-3
                      flex
                      items-center
                      pointer-events-none
                    "
                  >
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-5 w-5 text-gray-500"
                    >
                      <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
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
                    autocomplete="off"
                  />
                </div>
              </div>
              <ul
                class="
                  z-10
                  absolute
                  w-full
                  flex-1
                  top-0
                  bg-white
                  dark:bg-gray-900
                  rounded-md
                  border border-gray-300
                  dark:border-gray-700
                  overflow-hidden
                "
                style="margin-top: 37px; display: none"
              ></ul>
            </div>
          </li>
          <li class="mb-4 active">
            <ul>
              <div v-if="summaryList.length">
                <h5
                  class="
                    p-3
                    mb-2
                    text-md
                    font-semibold
                    tracking-wide
                    text-gray-900
                    uppercase
                    dark:text-white
                  "
                >
                  Materi
                </h5>
                <li v-for="(summary, index) in summaryList" :key="index">
                  <NuxtLink
                    :to="{ name: 'slug', params: { slug: summary.slug } }"
                    class="
                      p-3
                      rounded-md
                      transition-colors
                      duration-200
                      relative
                      block
                      hover:text-gray-900
                      dark:hover:text-white
                    "
                    >{{ summary.title }}</NuxtLink
                  >
                </li>
              </div>
              <div v-else>
                <p class="p-3 relative block text-gray-400 dark:text-gray-500">
                  Materi tidak ditemukan!
                </p>
              </div>
            </ul>
          </li>
          <div class="flex justify-between">
            <BaseProfile class="lg:hidden p-3" />
            <BaseColorMode class="block lg:hidden p-3" />
          </div>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'TheSidebar',
  data() {
    return {
      summaryList: [],
    }
  },
  fetch() {
    this.getContentList()
  },
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
  watch: {
    query() {
      this.getContentList()
    },
  },
  methods: {
    getContentList() {
      this.$content('')
        .only(['id', 'slug', 'title'])
        .sortBy('id', 'asc')
        .where({
          title: {
            $regex: [this.query, 'i'],
          },
        })
        .fetch()
        .then((result) => {
          this.summaryList = result
        })
        .catch((error) => {
          this.$nuxt.error({ statusCode: 404, message: error.message })
        })
    },
  },
}
</script>
