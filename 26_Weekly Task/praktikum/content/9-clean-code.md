---
id: 9
title: Clean Code
---

# 9 Clean Code

## Resume

Berikut adalah beberapa poin yang saya pelajari dari materi ini:

1. Definisi Clean Code
2. Alasan Penerapan Clean Code
3. Karakteristik Clean Code
4. KISS
5. DRY
6. Refactoring

### Definisi Clean Code

Clean code merupakan suatu istilah yang mewakili kode yang mudah dibaca, dipahami, dan diubah oleh programmer.

### Alasan Penerapan Clean Code

Secara umum clean code dibutuhkan untuk menunjang 3 hal diantaranya adalah work collaboration, feature development, serta faster development.

### Karakteristik Clean Code

- Penamaan mudah dipahami
- Mudah dieja dan dicari
- Singkat namun mendeskripsikan konteks
- Konsisten dalam penulisan
- Hindari penambahan konteks yang tidak diperlukan
- Berikan komentar secukupnya secara singkat, padat, dan jelas
- Gunakan konvensi style guide seperti airbnb atau google
- Terapkan best practice formatting pada kode

### KISS

KISS atau Keep It So Simple merupakan istilah yang merujuk pada pembuatan fungsi yang menerapkan separation of concern yang baik. Artinya fungsi harus bersifat spesifik untuk melakukan tugas tertentu saja.

### DRY

DRY atau Don't Repeat Yourself merupakan istilah yang merujuk pada pembuatan kode yang meminimalisir duplikasi. Sehingga kode yang dipanggil berulang kali dapat dimasukkan ke dalam suatu fungsi.

### Refactoring

Refactoring merupakan proses restrukturasi kode yang dibuat, umumnya dilakukan untuk mengubah struktur internalnya guna mencapai KISS dan DRY. Tekniknya diantaranya adalah membuat abstraksi, memecah kode menjadi fungsi atau class, memperbaiki penamaan dan lokasi kode, serta mendeteksi kode yang terdapat duplikasi.

## Task

### 1. Kode berikut ini dituliskan tanpa mengikuti kebiasaan-kebiasaan penulisan yang disarankan. Berapa banyak kekurangan dalam penulisan kode tersebut? Bagian mana saja terjadi kekurangan tersebut? Tuliskan alasan dari tiap kekurangan tersebut!

Berdasarkan hasil analisis yang saya lakukan, terdapat 6 temuan kekurangan dari kode tersebut.

Bagian yang terdapat kekurangan tersebut terletak pada masing-masing point berikut:

1. Tidak mematuhi aturan penulisan yang baik pada masing-masing class, method.
2. Dalam javascript deklarasi atribut pada class User tidak dilakukan seperti itu.
3. Pada class User tidak menggunakan object dalam argumen di constructornya.
4. Pada class UserService, deklarasi atribut tidak dilakukan layaknya `user[] users = [];`
5. Pada class UserService method getAllUsers, mendeklarasikan method tidak perlu menuliskan `user[]`, dan untuk returnnya perlu ditambahkan syntax this, sehingga menjadi `this.users`;
6. Pada class UserService method getUserById, mendeklarasikan method tidak perlu menuliskan user, untuk returnnya perlu ditambahkan syntax this, dan memanggil method filter penulisannya tidak seperti itu, melainkan menggunakan arrow function dan menambahkan seleksi kondisinya, sehingga menjadi `return this.users.filter((user) => user.id === userId)[0];`
7. Pada class UserService, tidak tersedia method untuk menambahkan user kedalam array users.

Alasan dari masing-masing kekurangan diantaranya adalah:

1. Penulisan class, method, ataupun variabel seharusnya mengikuti best practice style guide pada JS. Dimana nama class, method, dan variabel wajib menggunakan aturan penulisan camel case. Dan khusus untuk penulisan nama class perlu diawali dengan huruf kapital. Sebagai contoh berikut aturan penulisan yang seharusnya diterapkan:

   ```javascript
   class User {
     constructor({ id, username, password }) {
       this.id = id
       this.username = username
       this.password = password
     }
   }

   class UserService {
     // ...
     getAllUsers() {
       return this.users
     }
     // ...
   }
   ```

2. Di JS, deklarasi atribut pada class User dilakukan pada constructurnya. Sehingga seharusnya seperti ini.

   ```javascript
   class User {
     constructor({ id, username, password }) {
       this.id = id
       this.username = username
       this.password = password
     }
   }
   ```

3. Pada class User terdapat 3 atribut, yang artinya constructor akan memiliki 3 argumen, maka perlu digunakan object untuk memenuhi karakteristik clean code function arguments (2 or fewer ideally). Sehingga seharusnya seperti ini.

   ```javascript
   class User {
     constructor({ id, username, password }) {
       this.id = id
       this.username = username
       this.password = password
     }
   }

   class UserService {
     // ...
     // create user object, push to users array, and return the object
     addUser({ id, username, password }) {
       const user = new User({ id, username, password })
       this.users.push(user)
       return user
     }
     // ...
   }

   const userService = new UserService()
   userService.addUser({ id: 1, username: 'Jhon', password: '123' })
   ```

4. Di JS, deklarasi atribut pada class UserService dilakukan pada constructurnya. Sehingga seharusnya seperti ini.

   ```javascript
   class UserService {
     constructor() {
       this.users = []
     }
     // ...
   }
   ```

5. Pada class UserService deklarasi method getAllUsers, seharusnya seperti ini.

   ```javascript
   class UserService {
     // ...
     getAllUsers() {
       return this.users
     }
     // ...
   }
   ```

6. Pada class UserService deklarasi method getUserById, seharusnya seperti ini. Tujuan disisipkannya `[0]` supaya hanya mengembalikan elemen pertama saja dari array, mengingat id bersifat unique.

   ```javascript
   class UserService {
     // ...
     getUserById(userId) {
       return this.users.filter((user) => user.id === userId)[0]
     }
   }
   ```

7. Pada class UserService seharusnya terdapat suatu method yang isinya terdiri dari statement untuk menambahkan user baru kedalam array users berdasarkan blueprint yang sesuai dengan class User. Sehingga seharusnya seperti ini.

   ```javascript
   class UserService {
     // ...
     // create user object, push to users array, and return the object
     addUser({ id, username, password }) {
       const user = new User({ id, username, password })
       this.users.push(user)
       return user
     }
     // ...
   }
   ```

Berikut kode dari hasil praktikum 1:

[Soal1.js](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/9_Clean%20Code/praktikum/Soal1.js)

Output:

![OutputSoal1.png](/9-clean-code/OutputSoal1.png)

### 2. Kode berikut ini dituliskan tanpa mengikuti kebiasaan-kebiasaan penulisan yang disarankan. Ubahlah penulisan kode berikut menjadi lebih terbaca dan rapi!

Berikut kode dari hasil praktikum 2:

[Soal2.js](https://github.com/derrydwi/vue_derry-dwi-aditya-hendarto/blob/master/9_Clean%20Code/praktikum/Soal2.js)

Output:

![OutputSoal2.png](/9-clean-code/OutputSoal2.png)
