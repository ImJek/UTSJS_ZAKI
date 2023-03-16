class jenishewan {
    constructor(anggora, kaki , harga){
        this.jeniskucing = anggora;
        this.kaki = kaki;
        this.harga = harga;
    }
    panggilkan(){
        return " panggilkan si " + this.jeniskucing + " buat dia cucui piring "
    }
}

var kucingjeki = new jenishewan ('kucing dapur, 4 ,500000')
console.log(kucingjeki.jeniskucing);
console.log(kucingjeki.kaki);
console.log(kucingjeki.harga);

console.log(kucingjeki.panggilkan())