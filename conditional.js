// // COnditional : program dimana kita menghasilkan dua buah kondisi benar atau salah
// //  Tipe datanya adalah boolean

// // Comprasion operator : <,>,<=,>=,==,===,!=,!==

// console.log(5 > 3)
// console.log(3 < 5)
// // double equal : cukup nilai saja yang sama
// console.log(5 == '5') //true
// // triple equal : tipe data dan nilai harus sama
// console.log(5 === '5') //false


// // Logical operator : &&(AND), ||(OR), !(NOT)

// // AND : hanya TRUE jika data yang dibandingkan semuanya TRUE
// console.log('Logical AND :', 5 > 3 && 5 < 10) // TRUE && TRUE = TRUE
// console.log('Logical AND :', 5 > 3 && 5 < 3) // TRUE && FALSE = FALSE
// console.log('Logical AND :', 3 > 3 && 5 === 5) // FALSE && TRUE = FALSE

// // OR : hanya FALSE jika data yang dibandingkan semuanya FALSE
// console.log('Logical OR :', 3 > 3 || 5 === 5) // FALSE || TRUE = FALSE
// console.log('Logical OR :', 'a' == 'a' || 5 === 5) // TRUE || TRUE = TRUE
// console.log('Logical OR :', 'a' == 2 || "5" === 5) // FALSE || FALSE = FALSE
// console.log('Logical OR :', !('a' == 2 || "5" === 5)) // FALSE || FALSE = FALSE
// console.log('Logical OR :', !Boolean(5) || Boolean(''))

// console.log('Test Logical :', !(!Boolean(null) || (Boolean(0) && 5 > 1)))

// // Truthly = data yang bernilai TRUE
// console.log(Boolean(2))
// console.log(Boolean(1))
// console.log(Boolean('Abdi'))
// console.log(Boolean('undefined'))
// console.log(Boolean(-2))
// console.log(Boolean(true))

// // Falsy = data yang bernilai FALSE
// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(false))

// // IF
// // if(condition)
// // if (5 > 3) {
// //     // program execution
// //     console.log('Nilai pertama lebih dari nilai kedua')
// // }

// // if(condition){}else{}
// if (5 > 10) {
//     // program execution
//     console.log('Nilai pertama lebih dari nilai kedua')
// }else{
//     // program execution
//     console.log('Nilai pertama tidak lebih dari nilai kedua')
// }

// SWITCH_CASE
// switch(parameter){
//     case value :
//         program
//         break
//     case value :
//         program
//         break
//     default :
//         program
// }
let pekerjaan = 'Sopir'

switch (pekerjaan) { // switch disertai parameter data yang mau diperiksa casenya
    case 'Guru': // case value yang akan dibandingkan dengan parameter pada switch
        console.log('Tugasnya mengajar') // program yang akan dijalankan
        break; // untuk menghentikan eksekusi switch case
    case 'Polisi':
        console.log('Tugasnya Nilang')
        break;
    default: // menjalankan program jika tidak ada case yang sesuai dengan parameter
        console.log('Gag tau tugasnya')
}

let alaskaki = 'Sepatu';
let warna = 'Merah'

switch (true) {
    case (alaskaki == 'Sepatu' && warna == 'Merah'):
        console.log('Saya suka sepatu merah')
        break;
    case (alaskaki == 'Sepatu' && warna == 'Biru'):
        console.log('Saya suka sepatu biru')
        break;
    default:
        console.log('Saya gag suka alas kaki')
}