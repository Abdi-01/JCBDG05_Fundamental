let count = 10

console.log(`${count} + 5 =`, count + 5)
console.log(count - 5)
console.log(count * 5)
console.log(count / 5)
console.log(count % 5)

console.log(count + 10 + '5')

// increment
// count = count + 1
count++
count++

// decrement
// count = count - 1
count--
count--
console.log(count)

// increment shorthand
// count = count + 5
count -= 8
console.log(count)

// Math Method
// Nilai pi
const PI = Math.PI
console.log(PI)
console.log(Math.abs(-20.6)) // absolute positif
console.log(-Math.abs(20.6)) // absolute negatif
console.log(Math.pow(8, 0.5)) // pemangkatan angka
console.log(Math.sqrt(16)) // akar pangkat 2
console.log(Math.cbrt(8)) // akar pangkat 3

// Pembulatan angka
console.log(Math.round(4.6)) // dibulatkan ke nilai terdekat
console.log(Math.round(4.1))
console.log(Math.floor(5.9)) // selalu dibulatkan kebawah
console.log(Math.ceil(5.9)) // selalu dibulatkan keatas

// Nilai minimum dan Maximum
console.log(Math.min(0, -2, 5))
console.log(Math.max(0, -2, 5))

console.log(Math.random() * 10)

// Parsing data String dan Number
// String to Int
console.log(parseInt("345.48"))
console.log(parseInt("A"))
// String to Float
console.log(parseFloat("345.48"))
console.log(parseFloat("A"))
// INT/Float to String
let nilai = 85000
console.log(nilai.toString())
console.log(toString())
console.log(nilai.toLocaleString())

// mengecek sebuah data berupa angka atau tidak
console.log(isNaN(10))
console.log(isNaN("AA"))