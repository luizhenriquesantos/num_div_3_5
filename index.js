function somaDiv(num){ // função recebe o parâmetro passado diretamente.
    
    let total = 0 // contador inicializado em zero.

    for (i = 0; i < num; i++ ) { // estrutura que faz a iteração.
        if ( i % 3 == 0 ||  i % 5 == 0){ // condição que verifica se os numeros são divisiveis.
            total += i;
        }

    }
    return total;
}



const numero = somaDiv(10); // variável (numero) que guarda o valor que a função retorna, chamando a função e passando o valor como parâmetro.
console.log(numero);
