<template>
  <div>
    <div v-if="todos.length > 0">
      <div v-for="(todo, index) in todos" :key="todo.id" class="item">
        <div v-if="editMode && editIndex === index" class="todo-edit">
          <div class="index-column">{{ index + 1 }}.</div>
          <input
            type="text"
            class="edit-column"
            v-model="todo.body"
            @keyup.enter="editTodo(todo)"
          />
        </div>
        <div v-else class="todo">{{ index + 1 }}. {{ todo.body }}</div>
        <button class="action" @click="deleteTodo(index)">Delete</button>
        <button class="action" @click="editTodo(index)">Edit</button>
      </div>
    </div>
    <div v-else class="empty-todo">Todo masih kosong.</div>
    <div class="input">
      <input
        type="text"
        class="input-field"
        v-model="todo"
        @keyup.enter="addTodo(todo)"
      />
      <button class="input-button" @click="addTodo(todo)">Tambahkan</button>
    </div>
    <p v-if="isEmpty">Input todo tidak boleh kosong!</p>
    <p v-if="todos.length >= 4">Hebat!</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const todo = ref("");
const todos = ref([]);
const isEmpty = ref(false);
const editMode = ref(false);
const editIndex = ref("");

const addTodo = () => {
  isEmpty.value = !todo.value;
  if (todo.value) {
    todos.value.push({
      id: Date.now(),
      body: todo.value,
    });
    todo.value = "";
  }
};

const editTodo = (index) => {
  editMode.value = !editMode.value;
  editIndex.value = index;
};

const deleteTodo = (index) => {
  todos.value.splice(index, 1);
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

.empty-todo {
  text-align: center;
}
</style>