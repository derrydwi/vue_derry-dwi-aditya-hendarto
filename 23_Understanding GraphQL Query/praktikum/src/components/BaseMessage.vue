<template>
  <div :class="styles">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseMessage",
  props: {
    styles: String,
    text: String,
  },
};
</script>

<style scoped>
.message {
  font-weight: bold;
}

.error-empty {
  color: red;
}
</style>
