<template>
  <div class="todo-list-item">
    <div class="list">
      <div v-if="editMode" class="todo-edit">
        <div class="index-column">{{ index + 1 }}.</div>
        <input
          v-model="editedTodo"
          @keyup.enter="editTodo(todo.id)"
          type="text"
          class="edit-column"
        />
      </div>
      <div v-else class="todo">{{ index + 1 }}. {{ todo.body }}</div>
      <button @click="$emit('delete-todo', todo.id)" class="action">
        Delete
      </button>
      <button
        @click="editMode ? editTodo(todo.id) : changeEditMode()"
        class="action"
      >
        Edit
      </button>
    </div>
    <BaseMessage
      v-if="isEmpty"
      message="Input edit todo tidak boleh kosong!"
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
    todo: Object,
  },
  data() {
    return {
      editedTodo: "",
      editMode: false,
      isEmpty: false,
    };
  },
  mounted() {
    this.editedTodo = this.todo.body;
  },
  methods: {
    changeEditMode() {
      this.editMode = !this.editMode;
    },
    editTodo(todoId) {
      this.isEmpty = !this.editedTodo;
      if (!this.isEmpty) {
        this.$emit("edit-todo", todoId, this.editedTodo);
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
