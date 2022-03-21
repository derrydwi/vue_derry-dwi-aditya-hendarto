<template>
  <div class="todo-list-item">
    <div v-if="todos.length" class="list">
      <div v-for="(todo, index) in todos" :key="todo.id" class="item">
        <div v-if="editMode && editIndex === index" class="todo-edit">
          <div class="index-column">{{ index + 1 }}.</div>
          <input
            v-model="editedTodo"
            @keyup.enter="editTodo(index)"
            type="text"
            class="edit-column"
          />
        </div>
        <div v-else class="todo">{{ index + 1 }}. {{ todo.body }}</div>
        <button @click="$emit('delete-todo', index)" class="action">
          Delete
        </button>
        <button @click="editTodo(index)" class="action">Edit</button>
      </div>
    </div>
    <div v-else class="list-empty">
      <p>Todo masih kosong.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    todos: Array,
  },
  data() {
    return {
      editedTodo: "",
      editMode: false,
      editIndex: 0,
    };
  },
  methods: {
    editTodo(index) {
      this.editMode = !this.editMode;

      // when user clicked different edit button before and after
      if (this.editedTodo && this.editIndex !== index) {
        this.editedTodo = "";
        return;
      }

      this.editIndex = index;

      if (this.editMode) {
        this.editedTodo = this.todos[this.editIndex].body;
      } else {
        this.$emit("edit-todo", this.editIndex, this.editedTodo);
        this.editedTodo = "";
      }
    },
  },
};
</script>

<style scoped>
.item {
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

.list-empty {
  text-align: center;
}
</style>
