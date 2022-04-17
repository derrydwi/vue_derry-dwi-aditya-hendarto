<template>
  <div class="prose lg:px-8 max-w-none mx-auto dark:prose-invert h-screen">
    <h1 class="text-center mb-24">Selamat Datang 👋</h1>
    <p>
      Website ini berisikan rangkuman materi serta hasil praktikum selama
      menempuh studi independen di Alterra Academy.
    </p>
    <p>
      Silahkan klik list materi yang tersedia pada sidebar untuk melihat
      detailnya atau
      <NuxtLink
        :to="{
          name: 'slug',
          params: { slug: '2-version-control-and-branch-management' },
        }"
        >lihat materi pertama.</NuxtLink
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'This is a website that contains a summary of the material as well as the results of Vue JS practicum',
        },
      ],
    }
  },
}
</script>
