<template>
  <div id="todo-list-input">
    <input
      v-model="todo"
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
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    sendTodo() {
      this.$emit("addTodo", this.todo);
      this.todo = "";
    },
  },
};
</script>

<style scoped>
#todo-list-input {
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