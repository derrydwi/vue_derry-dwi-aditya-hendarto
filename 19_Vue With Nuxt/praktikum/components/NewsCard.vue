<template>
  <v-flex>
    <v-card class="mx-auto my-3" width="800">
      <div class="card-nav" @click="$emit('save-detail', index, news.title)">
        <v-img
          max-height="350"
          lazy-src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          :src="news.urlToImage"
          :alt="news.title"
          cover
        />
        <v-card-text class="mb-0 pb-0">{{ date }}</v-card-text>
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
            <v-col cols="6" md="4" class="text-left text-md-left">
              <v-chip>{{ news.source.name }}</v-chip>
            </v-col>
            <v-col cols="6" md="4" class="text-right text-md-center my-auto">
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
            <v-col cols="12" md="4" class="text-center text-md-right">
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
  </v-flex>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    news: {
      type: Object,
      default() {
        return {}
      },
    },
    index: {
      type: Number,
      default: 0,
    },
    date: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      icons: [
        'mdi-reddit',
        'mdi-twitter',
        'mdi-facebook',
        'mdi-google-plus',
        'mdi-linkedin',
      ],
    }
  },
}
</script>

<style scoped>
.card-nav {
  cursor: pointer;
}
</style>
