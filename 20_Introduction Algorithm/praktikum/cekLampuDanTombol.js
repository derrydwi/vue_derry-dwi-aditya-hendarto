function cekLampuDanTombol(number) {
  let lampIsOn = false;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      lampIsOn = !lampIsOn;
    }
  }
  return lampIsOn ? 'Lampu Menyala' : 'Lampu Mati';
}

console.log(cekLampuDanTombol(5));
console.log(cekLampuDanTombol(4));
