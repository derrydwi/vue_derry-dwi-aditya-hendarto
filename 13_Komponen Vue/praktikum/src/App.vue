<template>
  <div id="app">
    <BaseHeading title="Todo List" />
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
      <BaseMessage message="Todo masih kosong." />
    </div>
    <TodoListInput v-model="todo" @add-todo="addTodo" />
    <BaseMessage
      v-if="isEmpty"
      message="Input todo tidak boleh kosong!"
      class="error-empty"
    />
    <BaseMessage v-if="todosLength > 3" message="Hebat!" />
  </div>
</template>

<script>
import BaseMessage from "@/components/BaseMessage.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import TodoListItem from "@/components/TodoListItem.vue";
import TodoListInput from "@/components/TodoListInput.vue";

export default {
  name: "App",
  components: {
    BaseMessage,
    BaseHeading,
    TodoListItem,
    TodoListInput,
  },
  data() {
    return {
      todo: "",
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
    addTodo() {
      this.isEmpty = !this.todo;
      if (!this.isEmpty) {
        this.todos.push({
          id: Date.now(),
          body: this.todo,
        });
        this.todo = "";
      }
    },
    editTodo(todoId, todoBody) {
      this.todos = this.todos.map((todo) =>
        todo.id === todoId ? { ...todo, body: todoBody } : todo
      );
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
  },
};
</script>

<style scoped>
.error-empty {
  color: red;
}
</style>