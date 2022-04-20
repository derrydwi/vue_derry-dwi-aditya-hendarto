<template>
  <div>
    <h1>My Todo List</h1>
    <ApolloQuery :query="require('../graphql/getUser.gql')">
      <template v-slot="{ result: { error, data } }">
        <div v-if="error" class="error apollo">An error occurred</div>
        <div v-else-if="data" class="result apollo">
          <label for="users">Pilih User: </label>
          <select name="users" id="users" v-model="currentUser">
            <option
              v-for="user in data.kampus_merdeka_user"
              :key="user.id"
              :value="user.id"
            >
              {{ user.nama }}
            </option>
          </select>
        </div>
        <div v-else class="no-result apollo">Loading...</div>
      </template>
    </ApolloQuery>
    <ApolloMutation
      :mutation="require('../graphql/addTodo.gql')"
      :variables="{
        body: newTodo,
        description: 'Belum ada deskripsi nih',
        id_user: currentUser,
      }"
      @done="newTodo = ''"
      class="todo-form"
    >
      <template v-slot="{ mutate, loading, error }">
        <form @submit.prevent="onSubmit">
          <input v-model="newTodo" name="todo" placeholder="todo-name" />
          <button :disabled="loading" @click="mutate()">Add New Todo</button>
        </form>
        <p v-if="error">An error occurred: {{ error }}</p>
      </template>
    </ApolloMutation>
    <ApolloQuery
      :query="require('../graphql/getTodo.gql')"
      :variables="{ _eq: currentUser }"
      class="todo-list"
    >
      <template v-slot="{ result: { error, data } }">
        <div v-if="error" class="error apollo">An error occurred</div>
        <div v-else-if="data" class="result apollo">
          <TodoListItem
            v-for="(todoItem, index) in data.kampus_merdeka_todolist"
            :key="index"
            :index="index"
            :todo-item="todoItem"
          />
        </div>
        <div v-else class="no-result apollo">Loading...</div>
      </template>
      <ApolloSubscribeToMore
        :document="require('../graphql/subscriptionTodo.gql')"
        :updateQuery="onNewTodo"
      />
    </ApolloQuery>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem.vue";

export default {
  name: "TodoView",
  components: {
    TodoListItem,
  },
  data() {
    return {
      newTodo: "",
      currentUser: 1,
    };
  },
  methods: {
    onNewTodo(prev, { subscriptionData }) {
      return {
        kampus_merdeka_todolist:
          subscriptionData.data.kampus_merdeka_todolist.filter(
            (todo) => todo.id_user === this.currentUser
          ),
      };
    },
  },
};
</script>

<style  scoped>
body {
  padding-top: 1em;
  padding-bottom: 1em;
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

.todo-form {
  margin: 30px 0;
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
</style>

