<template>
  <h1 class="text-center text-capitalize my-4">{{ text }}</h1>
</template>

<script>
export default {
  name: "BaseHeading",
  props: {
    text: String,
  },
};
</script>
