<template>
  <div class="py-10 mx-10">
    <h1 class="text-3xl font-bold text-center dark:text-white capitalize">
      {{ title }}
    </h1>
  </div>
</template>

<script setup>
defineProps(["title"]);
</script>