<template>
  <div id="app">
    <TheHeading title="Todo List" />
    <TodoListItem
      :todos="todos"
      @edit-todo="editTodo"
      @delete-todo="deleteTodo"
    />
    <TodoListInput @add-todo="addTodo" />
    <TodoListMessage :todos-length="todosLength" :is-empty="isEmpty" />
  </div>
</template>

<script>
import TheHeading from "@/components/TheHeading.vue";
import TodoListItem from "@/components/TodoListItem.vue";
import TodoListInput from "@/components/TodoListInput.vue";
import TodoListMessage from "@/components/TodoListMessage.vue";

export default {
  name: "App",
  components: {
    TheHeading,
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
        this.todos.push({
          id: Date.now(),
          body: todo,
        });
      }
    },
    editTodo(index, todo) {
      this.todos[index].body = todo;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>