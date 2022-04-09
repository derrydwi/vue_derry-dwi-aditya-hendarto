<template>
  <v-container>
    <v-alert :type="type" :outlined="outlined" class="font-weight-bold">
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
    outlined: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
  },
}
</script>
