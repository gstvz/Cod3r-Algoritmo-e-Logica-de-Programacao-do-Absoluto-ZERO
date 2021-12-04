// Área de uma circunferência = PI * raio * raio.

let raio = 10;
const pi = 3.141592;

let areaA = pi * raio * raio
console.log(`areaA = ${areaA.toFixed(2)}`)

// Com Math.

let areaB = Math.PI * Math.pow(raio, 2)
console.log(`areaB = ${areaB.toFixed(2)}`)