<template>
  <v-container>
    <v-alert v-if="info.news" type="error"
      ><span class="font-weight-bold">Error Fetching News!</span>
      {{ info.news }}
    </v-alert>
    <v-alert v-if="info.sources" type="error"
      ><span class="font-weight-bold">Error Fetching Sources!</span>
      {{ info.sources }}
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: "BaseError",
  props: {
    info: Object,
  },
};
</script>

<style>
</style>