<template>
  <div id="app">
    <HeadingTitle title="Todo List" />
    <TodoList />
  </div>
</template>

<script>
import HeadingTitle from "./components/HeadingTitle.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    HeadingTitle,
    TodoList,
  },
};
</script>