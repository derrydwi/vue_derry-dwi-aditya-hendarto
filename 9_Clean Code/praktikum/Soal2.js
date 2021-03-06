class Kendaraan {
  constructor(totalRoda, kecepatanPerJam) {
    this.totalRoda = totalRoda;
    this.kecepatanPerJam = kecepatanPerJam;
  }
}

class Mobil extends Kendaraan {
  tambahKecepatan(kecepatanBaru) {
    this.kecepatanPerJam += kecepatanBaru;
  }

  status() {
    return `Mobil ini memiliki total roda ${this.totalRoda} dan kecepatan ${this.kecepatanPerJam} km/jam`;
  }
}

const mobilCepat = new Mobil(4, 0);
mobilCepat.tambahKecepatan(100);
console.log('Mobil Cepat:', mobilCepat.status());

const mobilLamban = new Mobil(4, 0);
mobilLamban.tambahKecepatan(20);
console.log('Mobil Lamban:', mobilLamban.status());
