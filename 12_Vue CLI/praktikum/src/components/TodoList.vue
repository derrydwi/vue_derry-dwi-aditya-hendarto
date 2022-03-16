<template>
  <div id="todo-list">
    <div v-if="todos.length" class="list">
      <ol>
        <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
      </ol>
    </div>
    <div v-else class="list-empty">
      <p>Todo masih kosong.</p>
    </div>
    <div class="input">
      <input
        v-model="todo"
        @keyup.enter="addTodo"
        type="text"
        class="input-field"
      />
      <button @click="addTodo">Tambahkan</button>
    </div>
    <div class="message">
      <p v-if="isEmpty" class="error-empty">Input todo tidak boleh kosong!</p>
      <p v-if="todos.length >= 4">Hebat!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todo: "",
      todos: [],
      isEmpty: false,
    };
  },
  methods: {
    validation: function () {
      this.todo ? (this.isEmpty = false) : (this.isEmpty = true);
    },
    addTodo: function () {
      this.validation();
      if (!this.isEmpty) {
        this.todos.push(this.todo);
        this.todo = "";
      }
    },
  },
};
</script>

<style scoped>
ol {
  padding-left: 16px;
}

li {
  margin-bottom: 10px;
}

.input-field {
  margin-right: 4px;
}

.message {
  font-weight: bold;
}

.error-empty {
  color: red;
}
</style>
