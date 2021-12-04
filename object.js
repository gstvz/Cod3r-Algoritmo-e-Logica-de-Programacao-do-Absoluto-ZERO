// Criar um objeto DATA, com atributo dia/mes/ano, com método EXIBIR, para retornar uma string dom o dia/mes/ano

const data = {
    dia: 08,
    mes: 04,
    ano: 2021,
    exibir(){
        return `Hoje é: ${data.dia}/${data.mes}/${data.ano}`;
    }
}

console.log(data.exibir());
