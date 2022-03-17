<template>
  <div id="app">
    <ListTodo :todos="todos" />
    <InputTodo @addTodo="addTodo" />
    <MessageTodo :todosLength="todosLength" :isEmpty="isEmpty" />
  </div>
</template>

<script>
import ListTodo from "@/components/ListTodo.vue";
import InputTodo from "@/components/InputTodo.vue";
import MessageTodo from "@/components/MessageTodo.vue";

export default {
  name: "App",
  components: {
    ListTodo,
    InputTodo,
    MessageTodo,
  },
  data() {
    return {
      todos: [],
      isEmpty: false,
    };
  },
  computed: {
    todosLength() {
      return this.todos.length;
    },
  },
  methods: {
    addTodo(todo) {
      this.isEmpty = !todo;
      if (!this.isEmpty) {
        this.todos.push(todo);
      }
    },
  },
};
</script>