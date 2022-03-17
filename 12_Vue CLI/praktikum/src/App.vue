<template>
  <div id="app">
    <TodoListItem :todos="todos" />
    <TodoListInput @addTodo="addTodo" />
    <TodoListMessage :todosLength="todosLength" :isEmpty="isEmpty" />
  </div>
</template>

<script>
import TodoListItem from "./components/TodoListItem.vue";
import TodoListInput from "./components/TodoListInput.vue";
import TodoListMessage from "./components/TodoListMessage.vue";

export default {
  name: "App",
  components: {
    TodoListItem,
    TodoListInput,
    TodoListMessage,
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