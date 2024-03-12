document.querySelector('#calcular').addEventListener('click', e => {
    let salarioBase = document.querySelector('#salario').value;

    let salarioReajustado = 0;

    if (salarioBase < 500) {
        salarioReajustado = salarioBase * 1.15;
    } else if (salarioBase <= 1000) {
        salarioReajustado = salarioBase * 1.10;
    } else {
        salarioReajustado = salarioBase * 1.05;
    }

    document.querySelector('#salario-reajustado').innerHTML = `Novo Salário = ${salarioReajustado}`;

    console.log(salarioBase);
    console.log(salarioReajustado);
});

// Esse código faz funcionar o "ENTER" igual ao evento "CLICK"
document.addEventListener('keypress', e => {
    if(e.key == 'Enter'){
        e.preventDefault();
        document.querySelector('#calcular').click();
    }
})

/*
    LAÇOS DE REPETIÇÃO
    FOR - (inicialização; condição de parada; incremento) {}
    i++  =>  i = i + 1

for(i = 1; i <= 10; i++){
    console.log(i);
}

*/