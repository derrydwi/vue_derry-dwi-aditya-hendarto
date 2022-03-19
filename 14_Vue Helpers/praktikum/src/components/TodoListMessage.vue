<template>
  <div class="todo-list-message">
    <p v-if="isEmpty" class="error-empty">Input todo tidak boleh kosong!</p>
    <p v-if="todosLength >= 4">Hebat!</p>
  </div>
</template>

<script>
export default {
  name: "TodoListMessage",
  props: {
    todosLength: Number,
    isEmpty: Boolean,
  },
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