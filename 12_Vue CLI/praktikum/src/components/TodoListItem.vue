<template>
  <div id="todo-list-item">
    <div v-if="todos.length" class="list">
      <ol>
        <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
      </ol>
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
};
</script>

<style scoped>
ol {
  padding-left: 16px;
}

li {
  margin-bottom: 10px;
}
</style>
