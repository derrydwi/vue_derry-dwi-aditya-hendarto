<template>
  <div class="home">
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
import BaseMessage from "@/components/BaseMessage.vue";
import TodoListItem from "@/components/TodoListItem.vue";
import TodoListInput from "@/components/TodoListInput.vue";
import { generateId } from "@/utils/idGenerator";

export default {
  name: "HomeView",
  components: {
    BaseMessage,
    TodoListItem,
    TodoListInput,
  },
  data() {
    return {
      todo: "",
      isEmpty: false,
    };
  },
  computed: {
    todos() {
      return this.$store.getters["todo/getTodos"];
    },
    todosLength() {
      return this.todos.length;
    },
  },
  methods: {
    addTodo() {
      this.isEmpty = !this.todo;
      if (!this.isEmpty) {
        this.$store.dispatch("todo/addTodo", {
          id: generateId(),
          body: this.todo,
          description: "Belum ada deskripsi nih",
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
