/*
Object : penampung data seperti array tetapi datanya tidak berurutan seperti index

let obj = {
    nama_prototype : isidatanya,
    nama_prototype : "String",
    nama_prototype : number,
    nama_prototype : boolean,
    nama_prototype : [array],
    nama_method : function(params){block code}
}

cara memanggil datanya ditandai dengan "."
example : nama_variable.nama_prototype
*/

// Syntax object literla
let Budi = ["Budi", "Prass", 24, 'Artisc'] // jika menggunakan array
let Abdi = { firstName: "Abdi", lastName: 'Alghifar', age: 25, job: 'Coder' }

console.table(Budi)
console.table(Abdi)

// Syntax object 'new' keyword
let Andrew = new Object()

Andrew.firstName = 'Andrew'
Andrew.lastName = 'Walter'
Andrew.age = 30
Andrew.job = 'Mentor'

console.log(Andrew)

let Ade = {}
Ade.firstName = 'Ade'
Ade.lastName = 'Maulana'

let cart = [
    {
        nama: 'Andrew',
        alamat: 'Surabaya',
        pesanan: [['Apel', 5], ['Melon', 10]]
    },
    {
        nama: 'Andrew',
        alamat: 'Surabaya',
        pesanan: [['Apel', 5], ['Mangga', 10]]
    }
]

console.table(cart)

// Class : blueprint/cetakan yang nantinya akan menghasilkan data objek



class Manusia {
    constructor(_nama, _gender, _tglLahir, _usia) {
        this.nama = _nama
        this.gender = _gender
        this.tglLahir = _tglLahir
        this.usia = _usia
    }
}

let manusia = [
    { nama: 'Abdi', gender: 'L', tglLahir: '20 Januari', usia: 25 }
]

console.log(manusia)

manusia.push(new Manusia('Aldo', 'L', '17 April', 25))
console.log(manusia[1].nama)