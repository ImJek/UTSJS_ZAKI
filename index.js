class jenishewan {
    constructor(anggora, kaki , harga, warna){
        this.jeniskucing = anggora;
        this.kaki = kaki;
        this.harga = harga;
        this.warna = warna;
    }
    panggilkan(){
        return " panggilkan si " + this.jeniskucing + " buat dia cucui piring "
    }
}

var kucingjeki = new jenishewan ('kucing dapur, 4 ,500000, putih hitam')

console.log(kucingjeki.jeniskucing);
console.log(kucingjeki.kaki);
console.log(kucingjeki.harga);
console.log(kucingjeki.warna);

console.log(kucingjeki.panggilkan())