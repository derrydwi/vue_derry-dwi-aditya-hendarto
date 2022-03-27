<template>
  <div class="py-10 mx-2 md:mx-10">
    <h1
      class="
        text-2xl
        md:text-3xl
        font-bold
        text-center
        dark:text-white
        capitalize
      "
    >
      {{ text }}
    </h1>
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