<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseMessage",
  props: {
    message: String,
  },
};
</script>

<style scoped>
p {
  font-weight: bold;
}
</style>