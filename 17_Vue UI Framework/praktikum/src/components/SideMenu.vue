<template>
  <v-navigation-drawer app v-model="drawer">
    <v-list-subheader class="ms-4 mt-4">SOURCES</v-list-subheader>
    <v-list>
      <v-list-item
        v-for="(source, index) in sources"
        :key="index"
        :value="source"
        active-color="primary"
        @click="$emit('selectSource', source.id)"
      >
        <v-list-item-title v-text="source.name" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

defineEmits(["selectSource"]);

const props = defineProps(["apiKey", "drawer"]);
const sources = ref([]);

const loadSources = async () => {
  await axios
    .get(`https://newsapi.org/v2/sources?language=en&apiKey=${props.apiKey}`)
    .then((response) => {
      sources.value = response.data.sources;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

onMounted(() => loadSources());
</script>
