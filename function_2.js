// Criar uma função que recebe "nota" como parameter, e retorna o "conceito";

function exibirConceito(nota){
    switch(nota){
        case 10:
            return 'A+';            
        case 9:
            return 'A';
        case 8:
            return 'B+';
        case 7:
            return 'B';
        case 6:
            return 'C+'; 
        case 5:
            return 'C';
        case 4:
            return 'D+';
        case 3:
            return 'D';
        case 2:
            return 'E+';
        case 1:
            return 'E';
        case 0:
            return 'F';
    }
}

console.log(exibirConceito(10));

/* Calcular a média do aluno, usando as duas maiores notas
Mostrar o status
Aprovado = >= 7;
Recuperação = >= 4 & < 7;
Reprovado = < 4;
*/

const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function calcularMenorNota(n1, n2){
    return n1 <= n2 ? n1 : n2;
}

function calcularMedia(n1, n2, n3){
    const menorNota = calcularMenorNota(nota1, calcularMenorNota(nota2, nota3));    

    if (menorNota === n1){
        return (n2 + n3) / 2;
    } else if (menorNota === n2){
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}

function verificarStatus(media){    
    if (media >= 7){
        return 'foi aprovado!'
    } else if (media <= 4 && media < 7){
        return 'ficou de recuperação.'
    } else {
        return 'foi reprovado.'
    }
}

const media = calcularMedia(nota1, nota2, nota3);
const status = verificarStatus(media);
console.log(`Você ${status} Com média ${media}.`);