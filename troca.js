// Alterar o valor das variáveis a e b, para uma ter o valor da outra.

let a = 7
let b = 94

let temp = a; // variável temporária, para guardar o valor original de A
a = b;
b = temp;

console.log(`O valor de a é: ${a}`);
console.log(`O valor de b é: ${b}`);

// Forma mais prática.

let c = 7
let d = 94;

[c, d] = [d, c]
console.log(`O valor de c é: ${c}`);
console.log(`O valor de d é: ${d}`);