<template>
  <div class="home">
    <TheHeading title="Todo List" />
    <TodoListItem
      :todos="todos"
      @editTodo="editTodo"
      @deleteTodo="deleteTodo"
    />
    <TodoListInput action="add-todo" text="Tambahkan" @add-todo="addTodo" />
    <TodoListMessage :todosLength="todosLength" :isEmpty="isEmpty" />
  </div>
</template>

<script>
import TheHeading from "@/components/TheHeading.vue";
import TodoListItem from "@/components/TodoListItem.vue";
import TodoListInput from "@/components/TodoListInput.vue";
import TodoListMessage from "@/components/TodoListMessage.vue";

export default {
  name: "HomeView",
  components: {
    TheHeading,
    TodoListItem,
    TodoListInput,
    TodoListMessage,
  },
  data() {
    return {
      todos: this.$store.state.todo.todos,
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
        this.$store.dispatch("todo/saveTodo", {
          id: Date.now(),
          body: todo,
          description: "Belum ada deskripsi nih",
        });
      }
    },
    editTodo(index, todo) {
      this.$store.dispatch("todo/editTodo", { index: index, todo: todo });
    },
    deleteTodo(index) {
      this.$store.dispatch("todo/deleteTodo", index);
    },
  },
};
</script>