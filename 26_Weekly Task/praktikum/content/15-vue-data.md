---
id: 15
title: Vue Data
---

# 15 Vue Data

## Resume

Secara garis besar berikut adalah sub topik yang saya pelajari dari materi ini:

1. Data Fetching
   - Definisi Data Fetching
   - Cara Kerja Fetch API Endpoint
   - Fetch Data Dengan Axios
   - Request Queries
2. Penanganan Data Error
   - Definisi Penanganan Data Error
   - Akibat Data Error Yang Tidak Ditangani
   - Cara Kerja Try Catch Finally
   - Cara Promise
3. Validasi Data
   - Definisi Validasi Data
   - Cara Kerja Validasi Data
   - Validasi Pada Form
   - Validasi Dengan Regex
4. Autentikasi
   - Definisi Autentikasi
   - Cara Kerja Autentikasi
   - Menerapkan Autentikasi

### Data Fetching

Pengambilan data oleh program perangkat lunak atau skrip. Setelah diambil, data dipindahkan ke lokasi alternatif atau ditampilkan di layar.

Application Programming Interface atau API yaitu sebuah protokol pada dasarnya menyediakan bahasa dan kontrak untuk bagaimana dua sistem berinteraksi.

Saat API berinteraksi dengan sistem lain, titik kontak dari komunikasi ini dianggap sebagai Endpoint, yang berbentuk link.

Axios adalah sebuah library yang dipakai front-end untuk melakukan HTTP Request kepada link API Endpoint.

Request adalah permohonan pengambilan data.

Sedangkan Request Queries adalah syarat yang menyatakan data seperti apa yang ingin diambil.

```
https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
```

Keterangan:

- pokeapi.co

  Host Endpoint

- /api/v2/pokemon

  Nama/Path Endpoint

- ?limit=20&offset=0

  String Query

Salah satu contoh penggunaan string query pada endpoint adalah untuk pembagian/manajemen halaman

```
https://pokeapi.co/api/v2/pokemon?limit=5&offset=20
```

Keterangan:

- Limit

Batasan maksimal jumlah data yang diambil

- Offset

Index untuk memulai pengambilan data

### Penanganan Data Error

JavaScript adalah bahasa yang memiliki tipe data dinamis. Tidak memberikan kesalahan ketika kompilasi, jadi beberapa kali kita akan mendapatkan runtime-error untuk mengakses variabel atau fungsi yang undefined.

Penanganan data error adalah konsep untuk mencegah terjadinya runtime-error

Try Catch Finally adalah metode penanganan error bawaan dari Javascript.

Objek Promise mewakili penyelesaian (atau kegagalan) akhirnya dari operasi asinkron dan nilai yang dihasilkannya.

Aktivitas berkomunikasi dengan API pada umumnya berbentuk promise

```
fungsiPromise().then(res => {}).catch(err => {});
```

Keterangan:

- fungsiPromise()

  Nama fungsi

- .then(res => {})

  Handler jika fungsi sukses

- .catch(err => {})

  Handler jika fungsi gagal

### Validasi Data

Adalah konsep untuk melakukan pengecekan terhadap data apakah sudah sesuai dengan kriteria atau belum, terutama pada input pengguna.

Fungsi validasi menerima nilai yang ingin dicek kemudian mengembalikan nilai keabsahan/validity berupa nilai boolean (true/false).

Tipe validasi ini sangat kustom, biasa menggunakan fungsi dengan if atau switch.

Tag form pada HTML5 memiliki fungsi bawaan untuk validasi input pengguna

HTML5 juga menyediakan validasi yang lebih mutakhir, seperti email.

Regex adalah singkatan dari Regular Expression. Regex merupakan sebuah teks (string) yang mendefinisikan sebuah pola pencarian sehingga dapat membantu kita untuk melakukan matching (pencocokan) dan locate (pencarian).

```javascript
const regularExpression = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g

console.log(regularExpression.test('Pass1234')) // true
console.log(regularExpression.test('pass1234')) // false
console.log(regularExpression.test('PASS1234')) // false
console.log(regularExpression.test('PassPass')) // false
console.log(regularExpression.test('Pass123')) // false
```

### Autentikasi

Suatu proses yang menjadi tindakan atau pembuktian (validasi) terhadap identitas pengguna ketika ingin memasuki dan mengakses sistem tertentu.

Pengguna A mengirimkan kredensial yang biasanya berupa kombinasi username dan password, jika cocok maka server akan mengirim akses token di mana token tersebut adalah pembuktian mutlak kalau pengguna A adalah pengguna A bukan pengguna B, C atau yang lain.

Authentication yakni proses konfirmasi pengguna sesuai dengan siapa yang dia claim. Sedangkan Authorization adalah pengaturan perizinan terhadap tindakan yang dapat dilakukan pengguna.

Pengguna A mengirimkan kredensial yang biasanya berupa kombinasi username dan password, jika cocok maka server akan mengirim akses token di mana token tersebut adalah pembuktian mutlak kalau pengguna A adalah pengguna A bukan pengguna B, C atau yang lain.

## Task

### 1. Buatlah sebuah aplikasi berita dengan bantuan https://newsapi.org, dengan ketentuan:

- Jenis berita tidak ditentukan, bebas saja memilih kategori apapun untuk ditampilkan.
- Usahakan untuk sebaik mungkin menggunakan ilmu yang telah didapat di materi-materi sebelumnya, seperti media queries, persisted state, dll.
- Jika salah satu berita ditekan, maka akan mengarah ke detail berita, di mana terdapat konten.
- Tampilan tidak harus sama persis namun usahakan rapi
- Data yang disajikan harus diambil dari API
- Gunakan store untuk menampung detail berita

Berikut kode hasil dari praktikum ini:

#### Note: Mohon untuk membuat file .env terlebih dahulu berisi variabel bernama VUE_APP_API_KEY untuk menyimpan API Key anda.

- App
  - [App.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/15_Vue%20Data/praktikum/src/App.vue)
- Components
  - [BaseHeading.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/15_Vue%20Data/praktikum/src/components/BaseHeading.vue)
  - [NewsCard.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/15_Vue%20Data/praktikum/src/components/NewsCard.vue)
  - [TheFooter.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/15_Vue%20Data/praktikum/src/components/TheFooter.vue)
  - [TheNavbar.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/15_Vue%20Data/praktikum/src/components/TheNavbar.vue)
- Layout
  - [DefaultLayout.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/15_Vue%20Data/praktikum/src/layout/DefaultLayout.vue)
- Router
  - [index.js](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/15_Vue%20Data/praktikum/src/router/index.js)
- Store
  - [index.js](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/15_Vue%20Data/praktikum/src/store/index.js)
  - [news.js](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/15_Vue%20Data/praktikum/src/store/news.js)
- Views
  - [DetailView.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/15_Vue%20Data/praktikum/src/views/DetailView.vue)
  - [HomeView.vue](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/15_Vue%20Data/praktikum/src/views/HomeView.vue)

Output:

![HasilPraktikum.gif](/15-vue-data/HasilPraktikum.gif)
