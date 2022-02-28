<template>
  <v-flex>
    <div v-if="articles.length">
      <div v-for="article in articles" :key="article.title">
        <v-card class="mx-auto my-4" max-width="800">
          <v-img height="350px" :src="article.urlToImage" cover />
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-text>{{ article.description }}</v-card-text>
          <v-card-actions>
            <v-chip>{{ article.source.name }}</v-chip>
            <v-spacer />
            <v-btn v-for="icon in icons" :key="icon" :icon="icon" />
            <v-spacer />
            <v-btn
              small
              replace
              color="primary"
              :href="article.url"
              target="_blank"
              >Read More</v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <div v-else>
      <div class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
          class="mx-auto my-4"
        ></v-progress-circular>
      </div>
    </div>
  </v-flex>
</template>

<script setup>
defineProps(["articles"]);
const icons = [
  "mdi-reddit",
  "mdi-twitter",
  "mdi-facebook",
  "mdi-google-plus",
  "mdi-linkedin",
];
</script>
