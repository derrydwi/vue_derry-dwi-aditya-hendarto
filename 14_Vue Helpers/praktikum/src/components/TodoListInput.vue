<template>
  <div class="todo-list-input">
    <input
      v-model="todo"
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
  data() {
    return {
      todo: "",
    };
  },
  props: {
    action: String,
    description: String,
    text: String,
  },
  methods: {
    doEmit() {
      this.$emit(this.action, this.todo);
      this.todo = "";
    },
  },
  mounted() {
    this.$nextTick(function () {
      if (this.description) {
        if (this.description === "Belum ada deskripsi nih") {
          this.todo = "";
        } else {
          this.todo = this.description;
        }
      }
    });
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