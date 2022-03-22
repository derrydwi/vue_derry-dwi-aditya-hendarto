<template>
  <div class="todo-list-input">
    <input
      :value="value"
      @input="inputHandler($event.target.value)"
      @keyup.enter="sendTodo"
      type="text"
      class="input-field"
    />
    <button @click="sendTodo" class="input-button">Tambahkan</button>
  </div>
</template>

<script>
export default {
  name: "TodoListInput",
  props: {
    value: String,
  },
  methods: {
    inputHandler(value) {
      this.$emit("input", value);
    },
    sendTodo() {
      this.$emit("add-todo");
    },
  },
};
</script>

<style scoped>
.todo-list-input {
  display: flex;
}

.input-field {
  width: 80%;
}

.input-button {
  width: 20%;
  margin: 0 20px;
}
</style>