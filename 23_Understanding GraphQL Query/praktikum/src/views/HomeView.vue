<template>
  <div class="home">
    <div v-if="todosLength">
      <label for="users">Pilih User: </label>
      <select name="users" id="users" v-model="currentUser">
        <option v-for="user in users" :key="user.id" :value="user.id">
          {{ user.nama }}
        </option>
      </select>
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
      currentUser: 1,
    };
  },
  computed: {
    users() {
      return this.$store.getters["todo/getUsers"];
    },
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
          body: this.todo,
          description: "Belum ada deskripsi nih",
          id_user: this.currentUser,
        });
        this.todo = "";
      }
    },
    editTodo(todoId, todoBody) {
      this.$store.dispatch("todo/editTodo", {
        id: todoId,
        body: todoBody,
      });
    },
    deleteTodo(todoId) {
      this.$store.dispatch("todo/deleteTodo", { id: todoId });
    },
  },
  mounted() {
    this.$store.dispatch("todo/fetchUsers");
    this.$store.dispatch("todo/fetchTodos", this.currentUser);
  },
  watch: {
    currentUser(value) {
      this.$store.dispatch("todo/fetchTodos", value);
    },
  },
};
</script>
