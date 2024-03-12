/*
    LAÇOS DE REPETIÇÃO
    FOR - (inicialização; condição de parada; incremento) {}
    i++  =>  i = i + 1

for(let i = 1; i <= 10; i++){
    console.log(i);
}


Aprender lógica com JS no site "playcode.io"
pode usar a opção Learning ou Start Coding
*/

// PARA PEGAR O EVENTO CLICK DEVEMOS USAR UMA ARROW FUNCTION
document.querySelector('#calcular').addEventListener('click', e => {

    // código para substituir o valor do paragrafo <p> pra vazio (limpar)
    document.querySelector('#tabuada').innerHTML = '';

    // recupera o "numero" do form HTML e armazena na variável "numero"
    let numero = document.querySelector('#numero').value;

    let valorTabuada = 0;

    for (let i = 1; i <= 10; i++) {
        valorTabuada = i * numero;
        // mostra no console
        console.log(valorTabuada);
        // mostra no paragrafo, está colocando dentro da tag <p> com id=tabuada (<p>valorTabuada</p>)
        // o "+=" faz ele colocar todos os valores e não sobre escreve
        // para acrescentar a tag "<br>" é necessário usar o template string, uso da crase `${valorTabuada}<br>`
        // não é necessário usar o sinal de concatenação "+"

        //        document.querySelector('#tabuada').innerHTML += `${numero} * ${i} = ${valorTabuada}<br>`;

        // para fazer o laço obdecer um intervalo de tempo entre cada repetição (milisegundos)
        setTimeout(() => {
            document.querySelector('#tabuada').innerHTML += `<br>${numero} * ${i} = ${valorTabuada}`;
        }, i * 1000)
    }

    // código para substituir o valor do form pra vazio (limpar)
    document.querySelector('#numero').value = '';



    // Se colocar somente o "=" ele vai sobrescrever o a tag "<p>", vai limpar
    document.querySelector('#tabuada').innerHTML += `<br><br>`;

    // Mostrar os números pares de 0 a 100 no console
    for (let i = 0; i <= 100; i++)
        if (i % 2 == 0) {
            console.log(i);

            document.querySelector('#tabuada').innerHTML += `${i}  `;

        }


    // Se colocar somente o "=" ele vai sobrescrever o a tag "<p>", vai limpar
    document.querySelector('#tabuada').innerHTML += `<br><br>`;

    // Mostrar os números impares de 0 a 100 no console
    for (let i = 0; i <= 100; i++)
        if (i % 2 != 0) {
            console.log(i);

            document.querySelector('#tabuada').innerHTML += `${i}  `;

        }

    // Se colocar somente o "=" ele vai sobrescrever o a tag "<p>", vai limpar
    document.querySelector('#tabuada').innerHTML += `<br><br>`;

    // Mostrar os números impares de 0 a 100 no console com "While"
    // USAR QUANDO VOCÊ NÃO SABE O NÚMERO DE VEZES QUE USARÁ O LOOPING
    let i = 1;
    while (i <= 100)
        if (i % 2 != 0) {
            console.log(i);

            document.querySelector('#tabuada').innerHTML += `${i}  `;
        }
    i = i + 2;


});




// Esse código faz funcionar o "ENTER" igual ao evento "CLICK"
document.addEventListener('keypress', e => {
    if (e.key == 'Enter') {
        e.preventDefault();
        document.querySelector('#calcular').click();
    }
})

