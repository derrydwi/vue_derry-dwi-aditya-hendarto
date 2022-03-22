<template>
  <div class="todo-list-item">
    <div class="list">
      <div v-if="editMode" class="todo-edit">
        <div class="index-column">{{ index + 1 }}.</div>
        <input
          v-model="editedTodo"
          @keyup.enter="editTodo"
          type="text"
          class="edit-column"
        />
      </div>
      <div v-else class="todo">
        <router-link
          :to="{ name: 'detail', params: { id: index } }"
          class="todo-link"
          >{{ index + 1 }}. {{ todoItem.body }}</router-link
        >
      </div>
      <button @click="deleteTodo" class="action">Delete</button>
      <button @click="editHandler" class="action">Edit</button>
    </div>
    <BaseMessage
      v-if="isEmpty"
      text="Input edit todo tidak boleh kosong!"
      class="error-empty"
    />
  </div>
</template>

<script>
import BaseMessage from "@/components/BaseMessage.vue";

export default {
  name: "TodoListItem",
  components: {
    BaseMessage,
  },
  props: {
    index: Number,
    todoItem: Object,
  },
  data() {
    return {
      editedTodo: "",
      editMode: false,
      isEmpty: false,
    };
  },
  mounted() {
    this.editedTodo = this.todoItem.body;
  },
  watch: {
    todoItem(value) {
      this.editedTodo = value.body;
    },
  },
  methods: {
    changeEditMode() {
      this.editMode = !this.editMode;
    },
    deleteTodo() {
      this.$emit("delete-todo", this.todoItem.id);
    },
    editHandler() {
      this.editMode ? this.editTodo() : this.changeEditMode();
    },
    editTodo() {
      this.isEmpty = !this.editedTodo;
      if (!this.isEmpty) {
        this.$emit("edit-todo", this.todoItem.id, this.editedTodo);
        this.changeEditMode();
      }
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  margin: 20px 0;
}

.todo {
  width: 80%;
}

.todo-link {
  display: block;
  text-decoration: none;
  color: black;
}

.action {
  width: 10%;
  margin: 0 10px;
}

.todo-edit {
  display: flex;
  width: 80%;
}

.index-column {
  width: 2%;
}

.edit-column {
  width: 98%;
}

.error-empty {
  color: red;
}
</style>
