<template>
  <div id="todo-list-input">
    <input
      v-model="todo"
      @keyup.enter="sendTodo"
      type="text"
      class="input-field"
    />
    <button @click="sendTodo">Tambahkan</button>
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
.input-field {
  margin-right: 4px;
}
</style>