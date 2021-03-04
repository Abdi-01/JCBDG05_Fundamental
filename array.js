/* ARRAY
    1. Array : merupakan wadah yang berisi sekumpulan data dengan tipe yg sama ataupun berbeda. Dan setiap datanya mempunyai index
    2. Memperudah pengelolaan dalam penelusuran 
    3. Managemen memori
    4. Variabel jamak yg mempunyai elemen dgn mengacu nama yg sama dan dibedakan index
    5. Indexnya bertipe data integer
    6. Array bertipe object
    7. Elemen array boleh bertipe beda 
    8. Method array (method : func pda object)
        a. length : menghitung jumlah banyak data didalam array
        b. Join(separator, defaultnya ","/bisa kosong) : menggabungkan semua isi array menjadi sebuah string
        c. Push() : digunakan utk menambah item baru diakhir array
        d. Pop() : menghapus item terakhir
        e. unshift() : menambahkan elemen baru di awal array
        f. Shift() : menghapus elemen pertama
        g. reverse : membalikkan urutan data
        h. splice(indexAwal, Mau dihapus berapa,elementBaru1...) : delete, insert data, replace
*/


// Syntax : 
var produk = ['Apel', 'Jeruk']
// console.log(produk[1])
produk[2] = 'Mangga'
// menambahkan data dengan menginputkan index
produk[6] = 'Semangka'
console.table(produk)
console.log(produk[4])
console.log(produk.length)
produk[0] = 'Manggis'
console.table(produk)

// Join
console.log(produk.join(''))

// Push : digunakan utk menambah item baru diakhir array
produk.push('Buah Naga', 'Srikaya')
console.table(produk)
produk.pop() // menghapus data terkahir
console.table(produk)

var arr = ['manusia', ['makan', ['nasi', ['tempe', 'ayam', 'tahu']], ['minum', ['Teh', 'Kopi']]], 90000]
console.table(arr)
console.log(arr[0], arr[1][0], arr[1][1][0], 'lauknya', arr[1][1][1][1], arr[1][2][0], 'nya', arr[1][2][1][0])

// unshift
produk.unshift('Durian', 'Nangka')
console.table(produk)
produk.shift()
produk.shift()
console.table(produk)

// Reverse
console.table(produk.reverse())

// Splice("start_index","amount","new data")
let produkNew = ['Sepatu', 'Sandal', 'Pakaian']
// delete
// console.table(produkNew)
// produkNew.splice(1, 2)
// console.table(produkNew)

// insert
console.table(produkNew)
produkNew.splice(1, 0, 'Celana', 'Jaket')
console.table(produkNew)

// replace
produkNew.splice(2, 1, 'Topi')
console.table(produkNew)

produkNew[0] = 'Pesawat'
console.table(produkNew)

// includes
console.log(produkNew.includes("Celana"))

// indexOf
console.log(produkNew.indexOf("Celana"))

// sort
// descending
produkNew.sort().reverse()
console.table(produkNew)
let x = [0, 2, 12, 10, 8, 6]
// ascending angka
x.sort(function (a, b) { return a - b })
console.table(x)

// descending angka
x.sort(function (a, b) { return b - a })
console.table(x)

// concat : menggabung dua buah array
console.table(produkNew.concat(produk))
console.table([...produkNew, ...produk])

// duplicate
const nama = ['Budi', 'Adi', 'Asep']
let tempNama = [...nama] //distructer
tempNama.push('Alex')
console.table(nama)
console.table(tempNama)

let str = ''

for (let i = 0; i < produkNew.length; i++) {
    str += produkNew[i] + '\n'
    // str += `Siswa ke-${i + 1} namanya ${tempNama[i]}\n`
}

console.log(str)

let produkBuah = [
    ['Apel', 20, 30000],
    ['Jeruk', 15, 15000],
    ['Mangga', 10, 20000],
]

let namaProduk = ['jeruk', 'apel', 'mangga']
let hargaProduk = [30000, 15000, 20000]

// for (let i = 0; i < produkBuah.length; i++) {
//     console.log(produkBuah[i].indexOf('Jeruk'))
// }

console.log(produkBuah.indexOf(['Apel']))
