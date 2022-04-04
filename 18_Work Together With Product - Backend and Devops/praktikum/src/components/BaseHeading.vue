<template>
  <h1
    class="
      text-center text-capitalize
      font-weight-bold
      text-h5 text-md-h4
      mt-4
      mb-8
    "
  >
    {{ text }}
  </h1>
</template>

<script>
export default {
  name: "BaseHeading",
  props: {
    text: String,
  },
};
</script>
