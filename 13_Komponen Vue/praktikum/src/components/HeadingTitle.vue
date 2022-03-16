<template>
  <div id="heading-title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "HeadingTitle",
  props: {
    title: String,
  },
};
</script>