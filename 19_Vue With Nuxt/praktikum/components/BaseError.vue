<template>
  <v-container>
    <v-alert type="error"
      ><span class="font-weight-bold">Error Fetching News!</span>
      {{ info }}
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: 'BaseError',
  props: {
    info: {
      type: String,
      default: '',
    },
  },
}
</script>
