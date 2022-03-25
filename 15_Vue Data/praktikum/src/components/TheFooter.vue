<template>
  <footer class="bg-white dark:bg-gray-800">
    <div class="container px-6 pb-8 mx-auto">
      <hr class="mb-10 border-gray-200 dark:border-0" />
      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <p class="text-sm text-gray-400">
          © Derry Dwi Aditya {{ year }}. All Rights Reserved.
        </p>

        <div class="flex mt-3 -mx-2 sm:mt-0">
          <a
            href="#"
            class="
              mx-2
              text-sm text-gray-400
              hover:text-gray-500
              dark:hover:text-gray-300
            "
            aria-label="Teams"
          >
            Teams
          </a>

          <a
            href="#"
            class="
              mx-2
              text-sm text-gray-400
              hover:text-gray-500
              dark:hover:text-gray-300
            "
            aria-label="Privacy"
          >
            Privacy
          </a>

          <a
            href="#"
            class="
              mx-2
              text-sm text-gray-400
              hover:text-gray-500
              dark:hover:text-gray-300
            "
            aria-label="Cookies"
          >
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>