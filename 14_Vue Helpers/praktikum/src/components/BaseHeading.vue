<template>
  <div class="heading">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "BaseHeading",
  props: {
    text: String,
  },
};
</script>
