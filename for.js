// Gerar um lasso FOR que imprima no console os valores: 7, 6, 5, 4 e 3 , de forma decrescente.

for( let i = 7; i >= 3; i-- ){
    console.log(i);
};

/* Exibir no console, sem usar númneros:
#
##
###
####
#####
*/

let linha = '';

for(; true; ){
    linha += '#';
    console.log(linha);
        if (linha === '#####'){
            break
        }
}

// Resolução do professor

for (let s = '#'; s != '######'; s += '#'){
    console.log(s)
}