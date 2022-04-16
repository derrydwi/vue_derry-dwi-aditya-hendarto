---
id: 18
title: Work Together With Product - Backend and Devops
---

# 18 Work Together With Product - Backend and Devops

## Resume

Secara garis besar berikut adalah sub topik yang saya pelajari dari materi ini:

1. Tim Produk
   - Siapa tim produk
   - Artefak tim produk
   - Tools yang dipakai
2. Tim Backend
   - Siapa tim backend
   - Artefak tim backend
   - Tools yang dipakai
3. Tim Devops
   - Siapa tim devops
   - Tools yang dipakai
   - Melakukan deployment

## Task

### Tim Produk

Tim pengembangan produk adalah sekelompok orang yang mengawasi proses desain produk baru.
Setiap anggota tim berkolaborasi dengan yang lain untuk membuat dan menerapkan strategi.

Product Management (PM) merupakan manajemen produk melibatkan penciptaan visi, pengembangan strategi, dan penerapan rencana untuk produk/fitur baru.

User experience (UX) Profesional UX memantau bagaimana pengguna berinteraksi dengan produk dengan membuat draf produk, melakukan penelitian, dan menguji kegunaan.

User Interface (UI) membangun antarmuka dengan fokus pada gaya dan interaktivitas. Tujuan perancang Ul adalah untuk membuat antarmuka yang menurut pengguna mudah digunakan dan menyenangkan secara estetika.

Artefak Tim Produk terdiri dari Product Management (PM) dalam bentuk Product Requirements Document, serta User Interface (UI) dalam bentuk desain tampilan.

Tools yang dipakai diantaranya adalah:

- Figma
- Zeplin
- Adobe XD

### Tim Backend

Pengembangan Back-end mengacu pada pengembangan sisi server. Ini berfokus pada database, scripting dan arsitektur situs web.

Kode yang ditulis oleh pengembang back-end membantu browser untuk berkomunikasi dengan informasi database.

Artefak Tim Backend terdiri dari API Endpoint dan Dokumentasi API.

Tool yang Dipakai diantaranya adalah:

- Swaggerhub
- Postman

### Tim Devops

Tim yang bertujuan untuk mempersingkat siklus hidup pengembangan sistem dan menyediakan pengiriman berkelanjutan dengan kualitas perangkat lunak yang tinggi. Atau singkatnya tim Devops bertugas membantu proses deployment.

Tool yang Dipakai diantaranya adalah sebagai berikut:

- Tanpa perkakas

  Langsung menghubungkan kode dengan server host

- Docker

  Perkakas untuk mengisolasi dan menyeragamkan versi dependensi sebagai sebuah kontainer

- Travis Cl/Github Actions

  Perkakas integrasi kontinyu yang secara otomatis menjalankan serangkaian tes/prosedur sebelum deployment

Untuk melakukan deployment aplikasi berjenis Server-Side Rendering (SSR) umumnya menggunakan Netlify. Sedangkan untuk melakukan deployment aplikasi berjenis Server-Side Rendering (SSR) umumnya menggunakan Heroku.

### 1. Deploy aplikasi berita pada latihan materi Vue UI Framework menggunakan Netlify atau Heroku, dengan ketentuan:

- Pastikan nama halaman tidak random dan halaman tidak rusak ketika dimuat ulang

Berikut kode hasil dari praktikum ini:

- App
  - [App.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/App.vue)
- Components
  - [BaseError.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/components/BaseError.vue)
  - [BaseHeading.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/components/BaseHeading.vue)
  - [NewsCard.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/components/NewsCard.vue)
  - [SideMenu.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/components/SideMenu.vue)
  - [TheFooter.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/components/TheFooter.vue)
  - [TheNavbar.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/components/TheNavbar.vue)
- Layout
  - [DefaultLayout.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/layout/DefaultLayout.vue)
- Plugins
  - [vuetify.js](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/plugins/vuetify.js)
- Router
  - [index.js](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/router/index.js)
- Store
  - [index.js](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/store/index.js)
  - [news.js](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/store/news.js)
- Utils
  - [formatter.js](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/utils/formatter.js)
- Views
  - [DetailView.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/views/DetailView.vue)
  - [HomeView.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/18_Work%20Together%20With%20Product%20-%20Backend%20and%20Devops/praktikum/src/views/HomeView.vue)

Berikut hasil deploy dari praktikum ini:

- Deploy hasil praktikum materi Vue UI Framework

  ![netlify-newsapps-vuetify.png](/18-work-together-with-product-backen-dan-devops/netlify-newsapps-vuetify.png)

  https://newsapps-vuetify.ga

#### (Note) Tambahan

- Deploy hasil praktikum materi Vue Data

  ![netlify-newsapps.png](/18-work-together-with-product-backen-dan-devops/netlify-newsapps.png)

  https://newsapps.ga

Output:

![HasilPraktikum.gif](/18-work-together-with-product-backen-dan-devops/HasilPraktikum.gif)
