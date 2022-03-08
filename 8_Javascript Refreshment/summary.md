# 8 Javascript Refreshment

## Resume

Berikut adalah beberapa poin yang saya pelajari dari materi ini:
1. Pendahuluan Javascript
2. Declaration, scoping, dan hoisting
3. Perbandingan karakteristik var, let, dan const
4. Primitive & Object
5. Jenis tipe data
6. Destructuring
7. Spread
8. Method-method dalam javascript
9. Control flow
10. Function
11. Synchronous & Asynchronous
12. Callback
13. Promise
14. Asynchronous & Await
15. Class
16. Document Object Model (DOM)

### Pendahuluan Javascript

Javascript adalah suatu bahasa pemrograman yang bersifat high-level, scripting, untyped dan interpreted.

### Declaration, scoping, dan hoisting

- Declaration adalah suatu proses pembuatan variabel baru.
- Scoping adalah ruang lingkup variabel, fungsi, atau suatu objek dapat diakses.
- Hoisting adalah kondisi dimana variabel atau fungsi dapat diakses sebelum dideklarasikan.

### Perbandingan karakteristik var, let, dan const

Var memperbolehkan redeclaration, sedangkan pada let dan const tidak diperbolehkan. Var dan let memperbolehkan reassignment, sedangkan pada const tidak diperbolehkan.

  | Declaration | Redeclaration | Reassignment | Hoisting | Global Scope | Function Scope | Block Scope
:---: | :---: | :---: | :---: | :---: | :---: | :---: | :---:
Var | ✔ | ✔ | ✔ | ✔ | ✔ | ❌ | ✔
Let | ✔ | ❌ | ✔ | ❌ | ✔ | ❌ | ❌
Const | ❌ | ❌ | ❌ | ❌ | ✔ | ❌ | ❌

### Primitive & Object

- Primitives merupakan unit pemrosesan terkecil dan elemen paling sederhana dalam bahasa pemrograman. Primitif bersifat dapat meneruskan suatu nilai. Contoh: String, boolean, number, bigint, dll.
- Objects adalah unit yang menampung properti dan fungsi atau method. Objects disebut juga sebagai collection atau reference type. Contoh: Object, array, function, date, set, map, dll.

### Destructuring

Destructuring merupakan suatu ekspersi pada javascript yang berfungsi untuk menyalin nilai dari array atau properti dari object ke dalam suatu variabel baru.

### Spread

Spread yaitu salah satu syntax atau operator dalam javascript yang dapat digunakan untuk membagi elemen array atau properti pada objek, sehingga elemen array dapat ditambahkan ataupun dimasukan ke dalam suatu array baru.

### Method-method dalam javascript

- Concat, menggabungkan dua atau lebih array untuk dapat dikembalikan lagi dalam bentuk yang sudah digabung.
- Map, mengembalikan array baru dengan menjalankan fungsi atau statement untuk setiap elemen pada array.
- Foreach, menjalankan fungsi atau statement untuk setiap elemen array.
- Slice, memilih sebagian elemen dari array untuk dikembalikan lagi dalam array baru.
- Filter, mengembalikan array baru berisi elemen array yang sudah lolos seleksi kondisi.
- Reduce, melakukan operasi pada setiap elemen array ke dalam nilai tunggal.

### Control flow

- Pengulangan. Contoh: for, while, do while.
- Pengkondisian. Contoh: if else, switch case, block, try catch, break, continue, throw.

### Function

Function dalam javascript ditujukan untuk menampung serangkaian komputasi atau prosedur yang digunakan berkali-kali. Bentuk-bentuk fungsi dalam javascript umumnya terdapat 3 jenis yaitu declaration function, expression function, dan arrow function.

### Synchronous & Asynchronous

- Synchronous merupakan eksekusi kode yang dijalankan satu persatu sesuai urutan penulisannya.
- Asynchronous adalah eksekusi kode yang tidak selalu dijalankan berdasarkan urutan penulisannya, melainkan berdasarkan waktu proses.

### Class

Class dapat diibaratkan sebagai prototype dari suatu object yang akan dibuat.
Beberapa terminologi umum yang berkaitan dengan class adalah sebagai berikut:
- Constructor, yaitu suatu method yang selalu dijalankan saat pertama kali menginisialisasikan object.
- Method, merupakan fungsi yang terdapat dalam suatu class.
- Attributes, adalah sekumpulan variabel yang dimiliki oleh suatu object pada class.
- Extend, ditujukan untuk membuat class child dari class parent, yang akan artinya mewarisi seluruh atribut dan method dari class parent.

### Document Object Model (DOM)

DOM adalah Application Programming Interface (API) pada HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object.

## Task

### 1A. Ambillah index ke 2 dalam array di baris 5 dan tampilkan dalam console

Berikut kode hasil dari praktikum ini:

[soal_1a.js](./praktikum/soal_1a.js)

Output:

![OutputSoal1a.png](./screenshots/OutputSoal1a.png)

### 1B. Ubah kode diatas sehingga dapat menampilkan baris 22 di dalam console

Berikut kode hasil dari praktikum ini:

[soal_1b.js](./praktikum/soal_1b.js)

Output:

![OutputSoal1b.png](./screenshots/OutputSoal1b.png)

### 1C. Lakukan pemanggilan untuk function perkenalan pada baris 31

Berikut kode hasil dari praktikum ini:

[soal_1c.js](./praktikum/soal_1c.js)

Output:

![OutputSoal1c.png](./screenshots/OutputSoal1c.png)

### 1D. Kalian bebas mengubah kode di atas sehingga menampilkan output pada console seperti pada gambar di bawah

Berikut kode hasil dari praktikum ini:

[soal_1d.js](./praktikum/soal_1d.js)

Output:

![OutputSoal1d.png](./screenshots/OutputSoal1d.png)

### 2A. jelaskan kenapa baris 21,22,23 tidak dapat tampil?

Jawab:
Baris 21,22,23 tidak dapat tampil karena terdapat suatu kondisi yang tidak terpenuhi pada percabangan di baris 21. Dimana percabangan yang ada melakukan pengecekan terhadap variabel terdaftar, apakah bernilai true atau tidak. Namun karena sebelumnya variabel terdaftar yang ada pada baris 4 diinisialisasikan dengan nilai false, artinya kondisi pada percabangan tidak terpenuhi. Sehingga statemtent pada baris 22 tidak dijalankan.

### 2B. jelaskan kenapa deklarasi pada baris 26 menyebabkan error?

Jawab:
Deklarasi pada baris 26 menyebabkan error Assignment to constant variable karena memang reassign value tidak dapat dilakukan pada variabel yang dideklarasikan menggunakan const. Mengingat sifat dari const sendiri tidak dapat diubah dan diperuntukkan untuk menampung nilai statis.

### 2C. Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat di eksekusi? jelaskan.

Jawab:
Dengan melakukan komen pada baris ke 26, baris 28 tetap belum dapat dieksekusi. Alasannya karena error yang dihasilkan memang bukan merujuk pada error Assignment to constant variable tadi, melainkan error dengan pesan asal is not defined. Penyebabnya adalah variabel asal yang diinisialisasikan di dalam function perkenalan baris 8 tersebut berada dalam scope function atau local. Sehingga variabel tersebut hanya dapat dikenali dan dipanggil di scope function tersebut saja. Oleh karena itu ketika dipanggil di luar scope function tidak dapat dikenali.

### 3. Lakukan desctucturing pada kode di bawah sehingga Budi Tersimpan dalam variable bernama a, Sita tersimpan dalam variabel bernama b, dan Ayutersimpan dalam variable bernama c.

Berikut kode hasil dari praktikum ini:

[soal_3.js](./praktikum/soal_3.js)

Output:

![OutputSoal3.png](./screenshots/OutputSoal3.png)

### 4. Kalian memiliki sebuah variabel berikut (let bdays = ['10-17','05-19','20-19']). Ubahlah tanda (-) dalam variabel tersebut menjadi (/) sehingga output yang akan keluar dalam console menjadi [ '10/17', '05/19', '20/19' ]

Berikut kode hasil dari praktikum ini:

[soal_4.js](./praktikum/soal_4.js)

Output:

![OutputSoal4.png](./screenshots/OutputSoal4.png)

### 5. Kalian memiliki variabel berikut (let value = [1,2,3,4,5,6]). Kalikan setiap value dalam array tersebut dengan dua. Sehingga, ketika dipanggil variable value mengeluarkan output berupa [ 2, 4, 6, 8, 10, 12 ]

Berikut kode hasil dari praktikum ini:

[soal_5.js](./praktikum/soal_5.js)

Output:

![OutputSoal5.png](./screenshots/OutputSoal5.png)

### 6. Kalian memiliki variabel berikut (let arr = [1.5, 2.56,5.1, 12.33]) Bulatkan ke atas variable tersebut sehingga output yang dihasilkan adalah [ 2, 3, 5, 12 ]

Berikut kode hasil dari praktikum ini:

[soal_6.js](./praktikum/soal_6.js)

Output:

![OutputSoal6.png](./screenshots/OutputSoal6.png)
