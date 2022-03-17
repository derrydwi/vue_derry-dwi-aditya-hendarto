<template>
  <div id="message-todo">
    <p v-if="isEmpty" class="error-empty">Input todo tidak boleh kosong!</p>
    <p v-if="todos.length >= 4">Hebat!</p>
  </div>
</template>

<script>
export default {
  name: "MessageTodo",
  props: ["todos", "isEmpty"],
};
</script>

<style scoped>
p {
  font-weight: bold;
}

.error-empty {
  color: red;
}
</style>