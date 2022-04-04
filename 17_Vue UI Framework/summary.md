# 17 Vue UI Framework

## Resume

Secara garis besar berikut adalah sub topik yang saya pelajari dari materi ini:

1. Pengenalan Rangka Kerja UI
   - Definisi Rangka Kerja UI
   - Cara Kerja Rangka Kerja UI
   - Macam-macam Rangka Kerja UI
2. Vuetify
   - Definisi Vuetify
   - Cara Kerja Vuetify
   - Dokumentasi Komponen Vuetify
   - Menerapkan Vuetify
3. Manajemen Warna Tema
   - Definisi Manajemen Warna Tema
   - Cara Kerja Manajemen Warna Tema
   - Menerapkan Manajemen Warna Tema
4. Gelap Terang
   - Definisi Gelap Terang
   - Cara Kerja Gelap Terang
   - Menerapkan Gelap Terang
5. Reaktivitas dengan Kerangka Kerja UI
   - Definisi Reaktivitas Viewport
   - Cara Kerja Reaktivitas
   - Menerapkan Reaktivitas
6. Extra
   - Tabel
   - Validasi Input
   - Skeleton Loader
   - Dialog

### Pengenalan Rangka Kerja UI

Kumpulan elemen visual (seperti tombol, ikon dll) dan fungsionalitas yang bisa dipakai secara instan. UI Framework membantu kita untuk membuat aplikasi web dengan tampilan yang baik dan terlihat profesional.

Rangka kerja menyediakan komponen siap pakai kemudian kita impor komponen yang kita butuhkan ke dalam aplikasi.

Contoh rangka kerja UI diantaranya adalah:

- Vuetify
- BootstrapVue
- Buefy
- Ant Design Vue
- Vuesax

### Vuetify

Vuetify merupakan library yang memungkinkan kita membuat aplikasi dengan tampilan yang indah walaupun kita bukanlah seorang desainer. Vuetify memiliki lebih dari 80 komponen berbasis Material Design yang mana komponen tersebut dapat membantu kita lebih cepat dalam pengembangan aplikasi.

Vuetify telah menyiapkan komponen siap pakai yang bisa kita gunakan di aplikasi kita.

Dokumentasi dapat diakses melalui halaman resmi Vuetify https://vuetifyjs.com/en.

Untuk mengetahui daftar lengkap, props yang tersedia di masing-masing komponen dapat melalui tautan yang terdapat di bagian API halaman komponen.

### Manajemen Warna Tema

Pengaturan set warna yang dapat kita terapkan terhadap tampilan di aplikasi.

Vuetify menyimpan warna tema bawaan yang bisa kita setel secara manual ketika aplikasi berjalan.

Komponen Vuetify menggunakan warna primary sebagai warna dominannya.

### Gelap Terang

Fitur peralihan warna latar belakang aplikasi dari terang ke gelap atau sebaliknya.

Vuetify memiliki variabel boolean dark dan juga menyimpan warna tema bawaan mode gelap this $vuetify.theme.dark.

### Reaktivitas dengan Kerangka Kerja UI

Perubahan ukuran yang menyesuaikan dengan lebar layar tampilan.

Lebar layar dibagi menjadi beberapa golongan dan setiap komponen dapat ditentukan ukurannya berdasarkan golongan tersebut.

|   Device    | Code |          Type          |        Range        |
| :---------: | :--: | :--------------------: | :-----------------: |
| Extra Small |  xs  |  Small to large phone  |       < 600px       |
|    Small    |  sm  | Small to medium tablet |   600px > < 960px   |
|   Medium    |  md  | Large tablet to laptop | 960px > < 1264px\*  |
|    Large    |  lg  |        Desktop         | 1264px > < 1904px\* |
| Extra Large |  xl  |   4k and ultra-wide    |     > 1904px\*      |

### Extra

#### Tabel

Tabel pada vuetify mempunyai fitur tambahan seperti pagination, filter, serta sort.

#### Validasi Input

Validasi input pada vuetify merupakan komponen input yang memiliki props untuk validasi yang cukup canggih karena mampu menerima array of functions.

#### Skeleton Loader

Membuat skeleton loader pada vuetify menjadi sangat mudah berkat bantuan UI Component v-skeleton-loader.

#### Dialog

Membuat dialog pada vuetify menjadi sangat mudah berkat bantuan UI Component v-dialog.

## Task

### 1. Refactor aplikasi berita pada latihan materi Vue Data menggunakan Vuetify, dengan ketentuan:

- Tambahkan fitur menu pilihan kategori dan pencarian

Berikut kode hasil dari praktikum ini:

#### Note: Mohon untuk membuat file .env terlebih dahulu berisi variabel bernama VUE_APP_TITLE dan VUE_APP_API_KEY untuk menyimpan nama app dan API Key anda.

- App
  - [App.vue](./praktikum/src/App.vue)
- Components
  - [BaseError.vue](./praktikum/src/components/BaseError.vue)
  - [BaseHeading.vue](./praktikum/src/components/BaseHeading.vue)
  - [NewsCard.vue](./praktikum/src/components/NewsCard.vue)
  - [SideMenu.vue](./praktikum/src/components/SideMenu.vue)
  - [TheFooter.vue](./praktikum/src/components/TheFooter.vue)
  - [TheNavbar.vue](./praktikum/src/components/TheNavbar.vue)
- Layout
  - [DefaultLayout.vue](./praktikum/src/layout/DefaultLayout.vue)
- Plugins
  - [vuetify.js](./praktikum/src/plugins/vuetify.js)
- Router
  - [index.js](./praktikum/src/router/index.js)
- Store
  - [index.js](./praktikum/src/store/index.js)
  - [news.js](./praktikum/src/store/news.js)
- Utils
  - [formatter.js](./praktikum/src/utils/formatter.js)
- Views
  - [DetailView.vue](./praktikum/src/views/DetailView.vue)
  - [HomeView.vue](./praktikum/src/views/HomeView.vue)

Output:

![HasilPraktikum.gif](./screenshots/HasilPraktikum.gif)
