<template>
  <div :class="styles">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "BaseHeading",
  props: {
    styles: String,
    text: String,
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
