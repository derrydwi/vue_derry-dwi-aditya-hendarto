const cekBilanganPrima = (number) => {
  if (isNaN(number)) {
    return 'input harus berupa angka';
  } else if (number < 2 || number > 50) {
    return 'input harus berada di antara 2 s/d 50';
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return `${number} bukan bilangan prima`;
    }
  }
  return `${number} bilangan prima`;
};

console.log(cekBilanganPrima(3));
console.log(cekBilanganPrima(7));
console.log(cekBilanganPrima(10));
