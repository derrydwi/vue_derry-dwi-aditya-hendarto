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

// Sisa bagi
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
  test('Luas Persegi dua bilangan positif', () => {
    expect(luasPersegi(2, 4)).toBe(8);
  });
  test('Luas Persegi dua bilangan negatif', () => {
    expect(luasPersegi(-10, -2)).toBe(20);
  });
  test('Luas Persegi bilangan positif dan negatif', () => {
    expect(luasPersegi(22, -4)).toBe(-88);
  });
});

// Luas Lingkaran
describe('Melakukan Perhitungan Luas Lingkaran', () => {
  test('Luas Lingkaran dengan phi 22/7', () => {
    expect(luasLingkaran(22 / 7, 8)).toBe(201.14285714285714);
  });
  test('Luas Lingkaran dengan phi 3.14', () => {
    expect(luasLingkaran(3.14, 17)).toBe(907.46);
  });
  test('Luas Lingkaran dengan phi 22/7', () => {
    expect(luasLingkaran(22 / 7, 16)).toBe(804.5714285714286);
  });
});

// Luas Kubus
describe('Melakukan Perhitungan Luas Kubus', () => {
  test('Luas Kubus pertama', () => {
    expect(luasKubus(2, 4, 6)).toBe(96);
  });
  test('Luas Kubus kedua', () => {
    expect(luasKubus(10, 2, 4)).toBe(160);
  });
  test('Luas Kubus ketiga', () => {
    expect(luasKubus(22, 8, 4)).toBe(1408);
  });
});

// Volume Kubus
describe('Melakukan Perhitungan Volume Kubus', () => {
  test('Volume Kubus pertama', () => {
    expect(volumeKubus(2, 4, 6)).toBe(48);
  });
  test('Volume Kubus kedua', () => {
    expect(volumeKubus(10, 2, 4)).toBe(80);
  });
  test('Volume Kubus ketiga', () => {
    expect(volumeKubus(22, 8, 4)).toBe(704);
  });
});
