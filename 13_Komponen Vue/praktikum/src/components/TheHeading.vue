<template>
  <div class="heading-title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "TheHeading",
  props: {
    title: String,
  },
};
</script>