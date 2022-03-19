<template>
  <div class="content-text">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "TheContent",
  props: {
    text: String,
  },
};
</script>