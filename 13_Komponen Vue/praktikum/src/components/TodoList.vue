<template>
  <div id="todo-list">
    <div v-if="todos.length" class="list">
      <div v-for="(todo, index) in todos" :key="todo.id" class="item">
        <div v-if="editMode && editIndex === index" class="todo-edit">
          <div class="index-column">{{ index + 1 }}.</div>
          <input
            v-model="todo.body"
            @keyup.enter="editTodo(index)"
            type="text"
            class="edit-column"
          />
        </div>
        <div v-else class="todo">{{ index + 1 }}. {{ todo.body }}</div>
        <button @click="deleteTodo(index)" class="action">Delete</button>
        <button @click="editTodo(index)" class="action">Edit</button>
      </div>
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
      <button @click="addTodo" class="input-button">Tambahkan</button>
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
      editMode: false,
      editIndex: "",
    };
  },
  methods: {
    addTodo: function () {
      this.isEmpty = !this.todo;
      if (!this.isEmpty) {
        this.todos.push({
          id: Date.now(),
          body: this.todo,
        });
        this.todo = "";
      }
    },
    editTodo: function (index) {
      this.editMode = !this.editMode;
      this.editIndex = index;
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.item,
.input {
  display: flex;
  margin: 20px 0;
}

.todo,
.input-field {
  width: 80%;
}

.action {
  width: 10%;
  margin: 0 10px;
}

.input-button {
  width: 20%;
  margin: 0 20px;
}

.todo-edit {
  display: flex;
  width: 80%;
}

.index-column {
  width: 5%;
}

.edit-column {
  width: 95%;
}

.list-empty {
  text-align: center;
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
