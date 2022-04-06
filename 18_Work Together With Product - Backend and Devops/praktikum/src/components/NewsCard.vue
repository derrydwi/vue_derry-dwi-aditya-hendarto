<template>
  <v-flex v-if="newsList.length">
    <v-card
      v-for="(news, index) in newsList"
      :key="index"
      class="mx-auto my-3"
      width="800"
    >
      <div @click="saveDetail(index, news.title)" style="cursor: pointer">
        <v-img
          max-height="350"
          lazy-src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          :src="news.urlToImage"
          cover
        />
        <v-card-text class="mb-0 pb-0">{{
          dateTime(news.publishedAt)
        }}</v-card-text>
        <v-container fill-height fluid>
          <p class="headline my-0 py-0">{{ news.title }}</p>
        </v-container>
        <v-card-text class="my-0 py-0">
          <p>{{ news.description }}</p>
          <p>{{ news.author }}</p>
        </v-card-text>
      </div>
      <v-card-actions class="my-0 py-0 px-4">
        <v-container class="px-0">
          <v-row>
            <v-col cols="6" md="4" class="text-start text-md-start">
              <v-chip>{{ news.source.name }}</v-chip>
            </v-col>
            <v-col cols="6" md="4" class="text-end text-md-center my-auto">
              <v-btn
                v-for="icon in icons"
                :key="icon"
                icon
                small
                class="mx-sm-2"
              >
                <v-icon>{{ icon }}</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="4" class="text-center text-md-end">
              <v-btn
                :block="$vuetify.breakpoint.smAndDown"
                :href="news.url"
                target="_blank"
                color="primary"
                ><v-icon class="mr-2">mdi-eye-outline</v-icon>Read More</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
    <v-row justify="center" class="mt-8 mb-2">
      <v-btn @click="$emit('load-more')">
        <v-progress-circular
          v-if="isLoading"
          indeterminate
          size="24"
          class="mr-2"
        />
        <v-icon v-else class="mr-2">mdi-arrow-down</v-icon>Load More</v-btn
      >
    </v-row>
  </v-flex>
  <v-card v-else height="70vh" elevation="0" outlined color="transparent">
    <v-layout align-center fill-height>
      <v-progress-circular
        indeterminate
        color="primary"
        class="mx-auto"
      ></v-progress-circular>
    </v-layout>
  </v-card>
</template>

<script>
import { generateSlug, generateDateTime } from "@/utils/formatter";

export default {
  name: "NewsCard",
  props: {
    newsList: Array,
  },
  data() {
    return {
      icons: [
        "mdi-reddit",
        "mdi-twitter",
        "mdi-facebook",
        "mdi-google-plus",
        "mdi-linkedin",
      ],
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters["news/getIsLoading"];
    },
  },
  methods: {
    saveDetail(index, title) {
      this.$emit("save-detail", index);
      this.$router.push({
        name: "detail",
        params: {
          slug: generateSlug(title),
        },
      });
    },
    dateTime(date) {
      return generateDateTime(date);
    },
  },
};
</script>
