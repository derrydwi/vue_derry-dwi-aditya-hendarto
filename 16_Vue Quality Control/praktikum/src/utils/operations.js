export const penjumlahan = (variabelSatu, variabelDua) => {
  return variabelSatu + variabelDua;
};

export const pengurangan = (variabelSatu, variabelDua) => {
  return variabelSatu - variabelDua;
};

export const pembagian = (variabelSatu, variabelDua) => {
  return variabelSatu / variabelDua;
};

export const perkalian = (variabelSatu, variabelDua) => {
  return variabelSatu * variabelDua;
};

export const rataRata = (
  variabelSatu,
  variabelDua,
  variabelTiga,
  variabelEmpat,
  variabelLima
) => {
  return (
    (variabelSatu + variabelDua + variabelTiga + variabelEmpat + variabelLima) /
    5
  );
};

export const sisaBagi = (variabelSatu, variabelDua) => {
  return variabelSatu % variabelDua;
};

export const luasPersegi = (panjang, lebar) => {
  return panjang * lebar;
};

export const luasLingkaran = (PHI, jariJari) => {
  return PHI * jariJari ** 2;
};

export const luasKubus = (JUMLAH_SISI, panjang, lebar) => {
  return JUMLAH_SISI * panjang * lebar;
};

export const volumeKubus = (panjang, lebar, tinggi) => {
  return panjang * lebar * tinggi;
};
