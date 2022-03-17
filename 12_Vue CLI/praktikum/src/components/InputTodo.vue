<template>
  <div id="input-todo">
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
  name: "TodoList",
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