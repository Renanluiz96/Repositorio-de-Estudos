let carros = [ 
   'BMW',
   'Ferrari',
   'Mercedes'
]
let x  = 1
console.log('1. ' + carros[x])

carros[1] = 'Audi'
console.log(carros)

carros.push('Volvo')
console.log(carros)

console.log(carros.length)