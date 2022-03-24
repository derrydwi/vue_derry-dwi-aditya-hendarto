<template>
  <div>
    <BaseHeading text="Todo List" styles="center" />
    <router-view />
  </div>
</template>

<script>
import BaseHeading from "@/components/BaseHeading.vue";

export default {
  name: "DefaultLayout",
  components: {
    BaseHeading,
  },
};
</script>
