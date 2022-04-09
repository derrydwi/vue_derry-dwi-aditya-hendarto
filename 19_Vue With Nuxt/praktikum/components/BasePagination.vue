<template>
  <v-pagination
    :value="page"
    :length="paginationLength"
    class="mt-8 mb-2"
    @input="$emit('change-page', page)"
  ></v-pagination>
</template>

<script>
export default {
  name: 'BasePagination',
  props: {
    page: {
      type: Number,
      default: 1,
    },
    paginationLength: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    changePage(page) {
      this.$emit('change-page', page)
    },
  },
}
</script>
