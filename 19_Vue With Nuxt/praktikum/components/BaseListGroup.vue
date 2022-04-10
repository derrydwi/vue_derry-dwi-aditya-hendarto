<template>
  <v-list-group :prepend-icon="icon" no-action>
    <template #activator>
      <v-list-item-title class="text-capitalize">{{ text }}</v-list-item-title>
    </template>
    <v-list-item
      v-for="(item, index) in list"
      :key="index"
      @click="
        $router.push({
          name: 'menu-type',
          params: {
            menu: text,
            ...(text === 'category' && { type: item }),
            ...(text === 'source' && { type: item.id }),
          },
        })
      "
    >
      <v-list-item-title
        class="text-capitalize"
        v-text="text === 'category' ? item : item.name"
      ></v-list-item-title>
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {
  name: 'BaseListGroup',
  props: {
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
