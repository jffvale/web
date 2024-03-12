// O código abaixo está mudando a cor de todo HTML, mas poderia mudar
// só o BODY ou outro elemento, basta seleciona-lo.
document.querySelector('#vermelho').addEventListener('click', e => {    
    cinza();
    document.querySelector('html').style.backgroundColor = 'red';
    document.querySelector('#vermelho').style.backgroundColor = 'red';
});

document.querySelector('#verde').addEventListener('click', e => { 
    cinza();
    // mudando a cor do fundo HTML, antes de mudar o BODY
    document.querySelector('html').style.backgroundColor = '#8798a8';
    
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('#verde').style.backgroundColor = 'green';
});

document.querySelector('#azul').addEventListener('click', e => { 
    cinza();
    document.querySelector('div').style.backgroundColor = 'blue';
    document.querySelector('#azul').style.backgroundColor = 'blue';
});

document.querySelector('#amarelo').addEventListener('click', e => { 
    cinza();
    document.querySelector('html').style.backgroundColor = 'yellow';
    document.querySelector('#amarelo').style.backgroundColor = 'yellow';
    document.querySelector('#amarelo').style.color = 'black';
});

document.querySelector('#padrao').addEventListener('click', e => { 
    padrao();
});

function cinza(){
    document.querySelector('#vermelho').style.backgroundColor = '#273747';
    document.querySelector('#verde').style.backgroundColor = '#273747';
    document.querySelector('#azul').style.backgroundColor = '#273747';
    document.querySelector('#amarelo').style.backgroundColor = '#273747';
    document.querySelector('#amarelo').style.color = 'white';
}

function padrao(){
    document.querySelector('html').style.backgroundColor = '#8798a8';
    document.querySelector('div').style.backgroundColor = 'rgba(255,255,255,.8)';    
    document.querySelector('body').style.backgroundColor = '#8798a8';
    cinza();
}
