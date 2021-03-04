/*Day 07 : Function
    1. Function : sub-program atau sebuah fungsi yang berada didalam sebuah program untuk menuntaskan suatu proses. Dan dapat dipanggil berulang"
    2. Untuk memakai function, function harus dibuat terlebih dahulu
    3. Function bersifat reusability, atau dapat digunakan berulang-ulang
    4. Function juga bersifat modular
    5. Built-in function bawaan javascript
    6. User-defined function yg kita buat sendiri
        a. Menggunakan keyword function
        b. Nama bebas
        c. Parameter/argumen
            i. Disimpan didalam()
            ii. Boleh ada atau tidak
            iii. Jika > 1, harus dikasih pemisah ","
        d. Body function dibungkus { }
        e. Boleh mengembalikan nilai / return  boleh tidak
    7. Declarative function --> function namaFunc(param1,param2){console.log(param1+param2) }
Function expression --> var namaFunc = function(param1,param2){console.log(param1+param2) }*/

// declarative function
// function penjumlahan(n1, n2) {
//     let hasil = n1 + n2
//     console.log(hasil)
// }

// penjumlahan(100, 200)

function pengurangan(n1, n2) {
    let hasil = n1 - n2
    // console.log(hasil)
    return hasil
}

console.log(pengurangan(100, 200) * -2)

//Pseudocode
/*1. Membuat data produk, stock dan harganya
2. Menu utama : tambah, beli, cek barang
3. If menu yg dipilih tambah
4.      melakukan penambahan produk(nama,qty,harga)
5. else if menu beli
6.      memilih produk
7.      produk by pilihan-1= index produk
8.      memasukkan jumlah barang yg dibeli
9.      if pengecekan apakah stocknya tersedia
10.     else kembali ke baris 8
*/

let barang = [
    ['Sepatu', 20, 120000],
    ['Sandal', 10, 12000],
    ['Celana', 25, 150000],
    ['Jaket', 5, 220000],
    ['Topi', 50, 80000],
]
// fungsi versi 1
// function expression
var printProduk = function () {
    let list = ''
    for (let i = 0; i < barang.length; i++) {
        if (barang[i][1] > 10) {
            list += `${i + 1}. ` + barang[i].join(' ') + '\n'
        }
    }
    return list
}

console.log(printProduk())

let buah = [
    ['Apel', 20, 120000],
    ['Jeruk', 10, 12000],
    ['Mangga', 25, 150000],
    ['Manggis', 5, 220000],
    ['Melon', 50, 80000],
]

// fungsi versi 2
function print(param) {
    let list = ''
    for (let i = 0; i < param.length; i++) {
        list += `${i + 1}. ${param[i].join(' ')} \n`
    }
    return list
}

console.log(print(buah))

// arrow function
printArrow = (param) => {
    let list = ''
    for (let i = 0; i < param.length; i++) {
        list += `${i + 1}. ${param[i].join(' ')} \n`
    }
    return list
}


// forEach
// Kapan menggunakan forEach : ketika kita inging memproses data(cnth: array) yang akan disimpan divaribale global
// Seperti ketika ingin mencari total belanja, ketika ingin membuat list
let siswa = [
    ['Abdi', 'Kelas D', 'TKJ'],
    ['Ade', 'Kelas B', 'IPS'],
    ['Budi', 'Kelas C', 'IPA'],
    ['Bima', 'Kelas A', 'MM'],
]

let listData = ''
siswa.forEach((value, index) => {
    listData += value[0] + '\n'
})

console.log(listData)

let numb = [1, 2, 3, 4, 5]

for (let i = 0; i < numb.length; i++) {
    console.log('numb[i]', numb[i], 'index', i)
}


let dataJumlah = numb.forEach((value, index) => {
    return value += 2
})

console.log(dataJumlah)

let kali = numb.map((value) => {
    return value += 5
})

console.log(kali)


// console.log(namaFungsi(dataNumb))

let numb2D = [
    [1, 2, 4],
    [3, 5, 2],
    [4, 3, 2],
]
// Map
// let dataKali = numb2D.map((item, i) => {
//     return item.map(val => val *= 2)
// })

// console.log(dataKali)

let numb2 = [2, 6, 3, 7, 9, 11]

let ganjil = numb2.filter((value, index) => { return value % 2 == 1 })

console.log(ganjil)

// Dudplikasi map

function duplicateMap(arr, cb) {
    let newArr = [] // penampung array baru
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i])) // menambahakan data ke array baru
    }
    return newArr // mengoutputkan array baru
}

console.log(duplicateMap([4, 6, 7, 5], (value) => value *= 10))
