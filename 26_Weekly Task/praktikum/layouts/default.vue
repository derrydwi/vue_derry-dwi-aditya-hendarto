<template>
  <div
    class="
      antialiased
      text-gray-700
      leading-normal
      bg-white
      dark:bg-gray-900 dark:text-gray-300
    "
  >
    <TheNavbar />
    <main class="mx-auto px-4 lg:px-8 dark:bg-gray-900">
      <div class="flex flex-wrap relative">
        <TheSidebar />
        <article
          class="
            w-full
            py-4
            pt-9
            lg:pb-4
            dark:border-gray-800
            lg:w-4/5 lg:border-l
            dark:bg-gray-900
          "
        >
          <Nuxt />
        </article>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
