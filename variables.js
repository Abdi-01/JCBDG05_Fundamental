/*
Variable : tempat untuk menyimpan sebuah data
Terdiri dari :
- Keyword : var (Redeclare, Reassign), let(Non-Redeclare, Reassign), const(Non-Redeclare, Non-Reassign)
*/
var usia // deklarasi variable
usia = 10; // reassign variable

let alamat //deklarasi
// let alamat ❌ can't redeclare
alamat = "Lamongan, Jawa Timur"

const NoKTP = 1213123123
// const NoKTP = 32132132 ❌ can't redeclare
// NoKTP = 346456546 ❌ can't reassign

let kendaraan
let profesi = 'Programmer'

console.log('Hello Purwadhika', 'Abdi', usia, alamat, 'No KTP :', NoKTP);

// Data penualan barang
// Aturan variable
// Harus diawali dengan huruf
// ❌ let 2barang = "Pocari Sweat"
let barang1 = "Pocari Sweat"

// Tidak boleh menggunakan spasi
// ❌ let harga barang = 30000
// ❌ let harga-barang = 30000
let hargabarang = 30000
let harga_barang = 30000
let hargaBarang = 30000

// Boleh diawali underline atau dollar
let _jumlah = 20
let $jumlah = 30

console.log('Cek variable :', barang1, hargaBarang, harga_barang, hargabarang, _jumlah, $jumlah)

/*
Contoh penamaan variable yang sering dijumpai :
- penamaan fungsi pada tombol : onBtnNamaFungsi
- penamaan fungsi pada onChange : handleNamaFungsi
- penamaan fungsi membua tamoilan : renderNamaFungsi atau printNamaFungsi
*/
// Without variable
console.log('Jl. Sukolilo, Surabaya, Jawa Timur')
console.log('Jl. Sukolilo, Surabaya, Jawa Timur')
console.log('Jl. Sukolilo, Surabaya, Jawa Timur')

// With variable
let address = 'Jl. Sukolilo, Surabaya, Jawa Timur'

console.log('1', address)
console.log('2', address)
console.log('3', address)

// Data Type
// String
let tokoSepatu = 'Toko Sepatu'
let tokoBaju = "Toko Baju"
let tokoKendaraan = `Toko Kendaraan`
let noHp = `089078687687`

console.log(typeof (tokoSepatu), typeof (noHp)) // string

// Number
// Integer
let umur = 20 //number
let berat = 60.8 //number

console.log(typeof (umur), typeof (berat)) // number

// Boolean
let benar = true
let salah = false
let lebihDari = 5 > 10


console.log(typeof (benar), typeof (lebihDari))
// Truthly
console.log(Boolean(2))
console.log(Boolean(1))
console.log(Boolean('Abdi'))
console.log(Boolean('undefined'))
console.log(Boolean(-2))
console.log(Boolean(true))

// Falsy
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))