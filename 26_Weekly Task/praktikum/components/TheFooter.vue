<template>
  <footer class="bg-white dark:bg-gray-800">
    <div class="container px-6 pb-8 mx-auto">
      <hr class="mb-10 border-gray-200 dark:border-0" />
      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <p class="text-sm text-gray-400">
          © Derry Dwi Aditya {{ year }}. All Rights Reserved.
        </p>

        <div class="flex mt-3 sm:mt-0">
          <p class="text-sm text-gray-400">Built with NuxtJS & Tailwind CSS</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>
