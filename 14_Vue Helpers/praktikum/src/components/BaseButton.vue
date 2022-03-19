<template>
  <div class="button">
    <button @click="clicked">{{ text }}</button>
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
    clicked() {
      if (this.text === "Kembali") {
        this.$router.back();
      } else if (this.text === "Ubah Deskripsi") {
        this.$emit(this.action);
      }
    },
  },
};
</script>