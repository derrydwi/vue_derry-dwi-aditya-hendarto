class Kendaraan {
  constructor(totalRoda, kecepatanPerJam) {
    this.totalRoda = totalRoda;
    this.kecepatanPerJam = kecepatanPerJam;
  }
}

class Mobil extends Kendaraan {
  constructor(totalRoda, kecepatanPerJam) {
    super(totalRoda, kecepatanPerJam);
  }
  tambahKecepatan(kecepatanBaru) {
    this.kecepatanPerJam += kecepatanBaru;
  }
  status() {
    return `Mobil ini memiliki total roda ${this.totalRoda} dan kecepatan ${this.kecepatanPerJam} km/jam`;
  }
}

const mobilCepat = new Mobil(4, 0);
mobilCepat.tambahKecepatan(100);
console.log(mobilCepat.status());

const mobilLamban = new Mobil(4, 0);
mobilLamban.tambahKecepatan(20);
console.log(mobilLamban.status());
