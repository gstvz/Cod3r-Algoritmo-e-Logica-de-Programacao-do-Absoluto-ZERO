/* Exibir um conceito de acordo com a nota do aluno
A = Entre 9 e 10
B = Entre 7 e 8,9
C = Entre 5 e 6,9
D = Entre 4,5 e 4,9
F = Abaixo de 4,5
*/

const nota = 9.9;

if (nota >= 9 && nota <= 10){
    console.log('A');
};

if (nota >= 7 && nota <= 8.9){
    console.log('B');
};

if (nota >= 5 && nota <= 6.9){
    console.log('C');
};

if (nota >= 4.5 && nota <= 4.9){
    console.log('D');
};

if (nota < 4.5){
    console.log('F');
};

