<template>
  <div
    class="
      mx-auto
      text-center
      max-w-xl
      p-5
      my-60
      text-sm text-red-700
      bg-red-100
      rounded-lg
      dark:bg-red-200 dark:text-red-800
    "
    role="alert"
  >
    <span class="font-medium">Error!</span> {{ info }}
  </div>
</template>

<script>
export default {
  name: "BaseError",
  props: {
    info: String,
  },
};
</script>

<style>
</style>