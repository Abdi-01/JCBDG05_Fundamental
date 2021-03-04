// Loop statement : script JS yang digunakan untuk membuat perulangan 
/* 
While

syntax : 
while (condition) {
    // program
}
*/

let count = 10
// while dan statement conditionnya
while (count >= 0) {
    // program yang ingin dijalnkan berulang
    console.log(count)
    count--
}

/*
Do...While

syntax :
do{
    // programnya
}while(condition)
*/

let value = 0
do {
    console.log('Value', value)
    value++
} while (value <= 10)

/*
For loop

syntax :
for(statement 1; statement 2; statement 3){
    block program
}
statement 1 : nilai awal yang digunakan untuk menjalankan looping
statement 2 : condition yang dibuat untuk mengecek apakah program dijalankan
statement 3 : berisi increment atau decrement untuk memanipulasi nilai statement 1
*/
// let i
// for (i = 1; i <= 10; i++) {
//     if(i > 4 && i%2==0){
//         continue
//     }
//     console.log('for', i)
// }
// Persegi
str = ''
// Loop 1
for (let i = 0; i < 5; i++) {
    // Loop 2 membuat shape horizontal
    for (let j = 0; j < 5; j++) {
        str = str + '* ' // * * * * *
    }
    str = str + '\n' // * * * * * \n
}
// * * * * * \n * * * * * \n * * * * * \n * * * * * \n * * * * * \n
console.log(str)

// Segitiga
str = ''
// Loop 1 : untuk membuat baris
for (let i = 0; i < 5; i++) {
    // Loop 2 membuat * horizontal
    for (let j = 0; j <= i; j++) {
        str = str + '* ' // * * * * *
    }
    str = str + '\n' // * * * * * \n
}
// * \n * * \n * * * \n * * * * \n
console.log(str)

// Tugas 1 : Buat segitiga rata kanan
// Tugas 2 : Buat segitiga rate kiri dengan mencetak angka ganjil
// Tugas 3 : Buat segitiga piramid
