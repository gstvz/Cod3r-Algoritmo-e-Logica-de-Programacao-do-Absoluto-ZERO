// Criar uma calculadora usando o operador ternário.

const a = 8;
const b = 4;
const operacao = '+';

const resultado = operacao === '+' ? a + b : operacao === '-' ? a - b : operacao === '*' ? a * b : operacao === '/' ? a / b : 'Operação inválida';
console.log(resultado);