/*
    USO DE ARRAYS

Aprender lógica com JS no site "playcode.io"
pode usar a opção Learning ou Start Coding
*/

// PARA PEGAR O EVENTO CLICK DEVEMOS USAR UMA ARROW FUNCTION
document.querySelector('#calcular').addEventListener('click', e => {

    // código para substituir o valor do paragrafo <p> pra vazio (limpar)
    document.querySelector('#nota1').innerHTML = '';

    // recupera o "nota1" do form HTML e armazena no array "notas"
    // tem que usar o "parseInt" para recuperar o elemento como um número, 
    // mesmo que você coloque a caixa de texto como "number" ao recupera-lo 
    // ele ainda virá como string
    let notas = [];
    notas[0] = parseInt(document.querySelector('#nota1').value);

    // recupera o "nota1" do form HTML e armazena na variável "nota1"
    notas[1] = parseInt(document.querySelector('#nota2').value);
    
    // recupera o "nota1" do form HTML e armazena na variável "nota1"
    notas[2] = parseInt(document.querySelector('#nota3').value);
    
    // recupera o "nota1" do form HTML e armazena na variável "nota1"
    notas[3] = parseInt(document.querySelector('#nota4').value);


    // Com fazer a recuperação dos elementos de um array com o "for", 
    // laço de repetição
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    console.log("A soma dos elementos é:", soma);

    console.log(soma);

    let media = soma / 4;

    // Fazendo o cálculo recuperando um a um, sem usar um laçõ o de repetição
    //let media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

    console.log(notas);

    console.log(media);

    document.querySelector('#media').innerHTML = `A média é ${media}`;
})

