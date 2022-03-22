<template>
  <div class="button">
    <button @click="doEmit">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    action: String,
    text: String,
  },
  methods: {
    doEmit() {
      this.$emit(this.action);
    },
  },
};
</script>
