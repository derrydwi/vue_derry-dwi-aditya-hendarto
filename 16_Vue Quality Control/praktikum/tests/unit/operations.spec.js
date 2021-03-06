import {
  penjumlahan,
  pengurangan,
  pembagian,
  perkalian,
  rataRata,
  sisaBagi,
  luasPersegi,
  luasLingkaran,
  luasKubus,
  volumeKubus,
} from '@/utils/operations.js';

// Penjumlahan
describe('Melakukan Penjumlahan', () => {
  test('Penjumlahan dua bilangan positif', () => {
    expect(penjumlahan(2, 4)).toBe(6);
  });
  test('Penjumlahan dua bilangan negatif', () => {
    expect(penjumlahan(-10, -2)).toBe(-12);
  });
  test('Penjumlahan dua bilangan non numerik', () => {
    expect(penjumlahan('1', '0')).toBe('10');
  });
});

// Pengurangan
describe('Melakukan Pengurangan', () => {
  test('Pengurangan dua bilangan positif', () => {
    expect(pengurangan(2, 4)).toBe(-2);
  });
  test('Pengurangan dua bilangan negatif', () => {
    expect(pengurangan(-10, -2)).toBe(-8);
  });
  test('Pengurangan bilangan positif dan negatif', () => {
    expect(pengurangan(22, -6)).toBe(28);
  });
});

// Pembagian
describe('Melakukan Pembagian', () => {
  test('Pembagian dua bilangan positif', () => {
    expect(pembagian(2, 4)).toBe(0.5);
  });
  test('Pembagian dua bilangan negatif', () => {
    expect(pembagian(-10, -2)).toBe(5);
  });
  test('Pembagian bilangan positif dan negatif', () => {
    expect(pembagian(22, -4)).toBe(-5.5);
  });
});

// Perkalian
describe('Melakukan Perkalian', () => {
  test('Perkalian dua bilangan positif', () => {
    expect(perkalian(2, 4)).toBe(8);
  });
  test('Perkalian dua bilangan negatif', () => {
    expect(perkalian(-10, -2)).toBe(20);
  });
  test('Perkalian bilangan positif dan negatif', () => {
    expect(perkalian(22, -4)).toBe(-88);
  });
});

// Rata-rata
describe('Melakukan Perhitungan Rata-rata', () => {
  test('Rata-rata lima bilangan positif', () => {
    expect(rataRata(2, 4, 6, 8, 10)).toBe(6);
  });
  test('Rata-rata lima bilangan negatif', () => {
    expect(rataRata(-10, -2, -4, -19, -28)).toBe(-12.6);
  });
  test('Rata-rata tiga bilangan positif dan dua bilangan negatif', () => {
    expect(rataRata(22, 8, 2, -4, -9)).toBe(3.8);
  });
});

// Sisa Bagi
describe('Melakukan Perhitungan Sisa bagi', () => {
  test('Sisa bagi dua bilangan positif', () => {
    expect(sisaBagi(2, 4)).toBe(2);
  });
  test('Sisa bagi dua bilangan negatif', () => {
    expect(sisaBagi(-13, -2)).toBe(-1);
  });
  test('Sisa bagi bilangan positif dan negatif', () => {
    expect(sisaBagi(22, -4)).toBe(2);
  });
});

// Luas Persegi
describe('Melakukan Perhitungan Luas Persegi', () => {
  test('Luas Persegi pertama', () => {
    expect(luasPersegi(2, 2)).toBe(4);
  });
  test('Luas Persegi kedua', () => {
    expect(luasPersegi(10, 10)).toBe(100);
  });
  test('Luas Persegi ketiga', () => {
    expect(luasPersegi(22, 22)).toBe(484);
  });
});

// Luas Lingkaran
describe('Melakukan Perhitungan Luas Lingkaran', () => {
  test('Luas Lingkaran pertama', () => {
    expect(luasLingkaran(3.14, 7)).toBe(153.86);
  });
  test('Luas Lingkaran kedua', () => {
    expect(luasLingkaran(3.14, 17)).toBe(907.46);
  });
  test('Luas Lingkaran ketiga', () => {
    expect(luasLingkaran(3.14, 12)).toBe(452.16);
  });
});

// Luas Kubus
describe('Melakukan Perhitungan Luas Kubus', () => {
  test('Luas Kubus pertama', () => {
    expect(luasKubus(6, 8, 8)).toBe(384);
  });
  test('Luas Kubus kedua', () => {
    expect(luasKubus(6, 3, 3)).toBe(54);
  });
  test('Luas Kubus ketiga', () => {
    expect(luasKubus(6, 7, 7)).toBe(294);
  });
});

// Volume Kubus
describe('Melakukan Perhitungan Volume Kubus', () => {
  test('Volume Kubus pertama', () => {
    expect(volumeKubus(8, 8, 8)).toBe(512);
  });
  test('Volume Kubus kedua', () => {
    expect(volumeKubus(12, 12, 12)).toBe(1728);
  });
  test('Volume Kubus ketiga', () => {
    expect(volumeKubus(9, 9, 9)).toBe(729);
  });
});
