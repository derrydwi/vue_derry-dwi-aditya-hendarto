<template>
  <div class="home">
    <BaseHeading text="Todo List" />
    <div v-if="todosLength">
      <TodoListItem
        v-for="(todoItem, index) in todos"
        :key="index"
        :index="index"
        :todo-item="todoItem"
        @edit-todo="editTodo"
        @delete-todo="deleteTodo"
      />
    </div>
    <div v-else>
      <BaseMessage text="Todo masih kosong." />
    </div>
    <TodoListInput
      v-model="todo"
      action="add-todo"
      text="Tambahkan"
      @add-todo="addTodo"
    />
    <BaseMessage
      v-if="isEmpty"
      text="Input todo tidak boleh kosong!"
      styles="message error-empty"
    />
    <BaseMessage v-if="todosLength > 3" text="Hebat!" styles="message" />
  </div>
</template>

<script>
import BaseHeading from "@/components/BaseHeading.vue";
import BaseMessage from "@/components/BaseMessage.vue";
import TodoListItem from "@/components/TodoListItem.vue";
import TodoListInput from "@/components/TodoListInput.vue";

export default {
  name: "HomeView",
  components: {
    BaseHeading,
    BaseMessage,
    TodoListItem,
    TodoListInput,
  },
  data() {
    return {
      todo: "",
      isEmpty: false,
      emptyDescription: "Belum ada deskripsi nih",
    };
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
    todosLength() {
      return this.todos.length;
    },
  },
  methods: {
    addTodo() {
      this.isEmpty = !this.todo;
      if (!this.isEmpty) {
        this.$store.dispatch("todo/saveTodo", {
          id: Date.now(),
          body: this.todo,
          description: this.emptyDescription,
        });
        this.todo = "";
      }
    },
    editTodo(todoId, todoBody) {
      this.$store.dispatch("todo/editTodo", { id: todoId, body: todoBody });
    },
    deleteTodo(todoId) {
      this.$store.dispatch("todo/deleteTodo", todoId);
    },
  },
};
</script>
