<template>
  <div class="todo-list-input">
    <!-- <ApolloMutation
      :mutation="require('../graphql/insert_kampus_merdeka_todolist_one.gql')"
      :variables="{
        object: {
          body: 'ccc',
          description: 'cc',
        },
      }"
    >
      <template v-slot="{ mutate, loading, error }">
        <button :disabled="loading" @click="mutate()">Click me</button>
        <p v-if="error">An error occurred: {{ error }}</p>
      </template>
    </ApolloMutation> -->
    <input
      :value="value"
      @input="inputHandler($event.target.value)"
      @keyup.enter="doEmit"
      type="text"
      class="input-field"
    />
    <button @click="doEmit" class="input-button">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "TodoListInput",
  props: {
    action: String,
    text: String,
    value: String,
  },
  methods: {
    doEmit() {
      this.$emit(this.action);
    },
    inputHandler(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
.todo-list-input {
  display: flex;
}

.input-field {
  width: 80%;
}

.input-button {
  width: 20%;
  margin: 0 20px;
}
</style>
