<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup>
const props = defineProps(["title"]);
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>