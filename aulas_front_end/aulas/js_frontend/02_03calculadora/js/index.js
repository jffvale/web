// Linha 2 - Adiciona no botão calcular o evento de "click"
document.querySelector('#calcular').addEventListener('click', e => {
    let numero1 = document.querySelector('#valor1').value;
    let numero2 = document.querySelector('#valor2').value;
    let operador = document.querySelector('#operador').value;

    let total = calcular(numero1, numero2, operador);

    // Esse resultado só aparece no console "console.log(total);"

    document.querySelector('#resultado').innerHTML = total;
    // para colocar texto e variável use a crase "  `Resultado: ${total}`  ",
    // o "innerHTML" vai alterar o elemento selecionado dentro do HTML.
    
});

/*   FUNÇÃO COMUM
// Utilizando parâmetros numa função comum, o nome da variável não precisa ser o mesmo
function calcular(numero1,numero2, operador){
    // O "eval()" faz a conversão para número e assim conseguir fazer a operação,
    // é um jeito de conseguir usar a variável.
    // Observar que o simbolo usado abaixo é a "crase" e não "aspas"
    return eval(`${numero1} ${operador} ${numero2}`);
} */

// ARROW FUNTION é uma função
let calcular = (numero1,numero2, operador) => {
    return eval(`${numero1} ${operador} ${numero2}`);
}