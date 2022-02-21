<template>
  <div>
    <ol>
      <li v-for="todo in todos" :key="todo">{{ todo }}</li>
    </ol>
    <p>{{ errorMessage }}</p>
    <input type="text" v-model="todo" @keyup.enter="addTodo(todo)" />
    <button @click="addTodo(todo)" type="submit">Tambahkan</button>
    <p v-if="todos.length >= 4">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const todo = ref("");
const todos = ref([]);
const message = ref("Hebat!");
const errorMessage = ref("");

const addTodo = (activity) => {
  if (!activity) {
    errorMessage.value = "Input todo tidak boleh kosong!";
  } else {
    todos.value.push(activity);
    todo.value = "";
    errorMessage.value = "";
  }
};
</script>

<style>
</style>