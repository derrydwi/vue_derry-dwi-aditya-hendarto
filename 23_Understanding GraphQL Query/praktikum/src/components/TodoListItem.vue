<template>
  <div class="todo list">
    <div v-if="editMode" class="todo-edit">
      <input v-model="editedTodo" type="text" class="edit-column" />
    </div>
    <div v-else class="content">
      <h3>{{ todoItem.body }}</h3>
    </div>
    <ApolloMutation
      :mutation="require('../graphql/deleteTodo.gql')"
      :variables="{
        id: todoItem.id,
      }"
      class="content"
    >
      <template v-slot="{ mutate, loading, error }">
        <i
          class="far fa-times-circle fa-2x"
          :style="[loading ? { color: 'grey' } : { color: 'red' }]"
          @click="mutate()"
        ></i>
        <p v-if="error">An error occurred: {{ error }}</p>
      </template>
    </ApolloMutation>
    <ApolloMutation
      :mutation="require('../graphql/updateTodo.gql')"
      :variables="{
        id: todoItem.id,
        body: editedTodo,
      }"
      @done="changeEditMode"
      class="content"
    >
      <template v-slot="{ mutate, loading, error }">
        <i
          class="far fa-edit fa-2x"
          :style="[loading ? { color: 'grey' } : { color: 'red' }]"
          @click="editMode ? mutate() : changeEditMode()"
        ></i>
        <p v-if="error">An error occurred: {{ error }}</p>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    index: Number,
    todoItem: Object,
  },
  data() {
    return {
      editedTodo: "",
      editMode: false,
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
  },
};
</script>

<style scoped>
.todo {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: rgb(180, 199, 211);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
}

input {
  display: block;
  margin: auto;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  outline: none;
  font-size: 1.3em;
  padding: 15px 0;
  text-align: center;
}

h3 {
  margin: 0px;
  padding: 0px;
}

.list {
  list-style-type: none;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 0;
  background-color: rgb(216, 216, 216);
}

.content {
  flex: 1;
}

i {
  cursor: pointer;
  color: red;
}
</style>
