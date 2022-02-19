# Jawaban:

### A.

Baris 21,22,23 tidak dapat tampil karena terdapat suatu kondisi yang tidak terpenuhi pada percabangan di baris 21. Dimana percabangan yang ada melakukan pengecekan terhadap variabel terdaftar, apakah bernilai true atau tidak. Namun karena sebelumnya variabel terdaftar yang ada pada baris 4 diinisialisasikan dengan nilai false, artinya kondisi pada percabangan tidak terpenuhi. Sehingga statemtent pada baris 22 tidak dijalankan.

### B.

Deklarasi pada baris 26 menyebabkan error Assignment to constant variable karena memang reassign value tidak dapat dilakukan pada variabel yang dideklarasikan menggunakan const. Mengingat sifat dari const sendiri tidak dapat diubah dan diperuntukkan untuk menampung nilai statis.

### C.

Dengan melakukan komen pada baris ke 26, baris 28 tetap belum dapat dieksekusi. Alasannya karena error yang dihasilkan memang bukan merujuk pada error Assignment to constant variable tadi, melainkan error dengan pesan asal is not defined. Penyebabnya adalah variabel asal yang diinisialisasikan di dalam function perkenalan baris 8 tersebut berada dalam scope function atau local. Sehingga variabel tersebut hanya dapat dikenali dan dipanggil di scope function tersebut saja. Oleh karena itu ketika dipanggil di luar scope function tidak dapat dikenali.
