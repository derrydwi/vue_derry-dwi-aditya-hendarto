<template>
  <div class="todo-list-input">
    <input
      :value="value"
      @input="inputHandler($event.target.value)"
      @keyup.enter="doEmit"
      type="text"
      class="input-field"
    />
    <button @click="doEmit" class="input-button">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "TodoListInput",
  props: {
    action: String,
    text: String,
    value: String,
  },
  methods: {
    doEmit() {
      this.$emit(this.action);
    },
    inputHandler(value) {
      this.$emit("input", value);
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
