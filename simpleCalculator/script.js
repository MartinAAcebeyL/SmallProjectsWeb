const numbers = document.querySelectorAll('[data-number]');
const operaciones = document.querySelectorAll('[data-operation]');
const auxs = document.querySelectorAll('[data-aux]');
const punto = document.querySelectorAll('[data-punto]');


const showOperations = document.querySelector('.current-result');
const showresult = document.querySelector('.prev-result');
const ver = x => console.log(x);

let a = 0;
let b = 0;
let signo = '+';
let resultados = [];
function typeNumbers(event) {
    const curretNumber = parseInt(event.target.dataset.number);
    showOperations.textContent += curretNumber;
}

function typeOperacion(event) {

    if(showOperations.textContent.length == 0)return;

    signo = event.target.dataset.operation;
    showOperations.textContent += signo;
}

function operar(event) {
    if (showOperations.textContent.length == 0) return;
    const operar = event.target.dataset.aux;
    if(operar == '='){
        a = parseFloat((showOperations.textContent).split(signo)[0]);
        b = parseFloat((showOperations.textContent).split(signo)[1]);
        a = resolver();
        resultados.push(a);
        showOperations.textContent = a;
    }else{
        showOperations.textContent ='';
        showresult.textContent = '';
        a = 0;
        b = 0;
        resultados = [];
    }
}

function resolver() {
    let resultado = 0;
    switch (signo) {
        case '+':
            resultado = a+b;
            break;
        case '-':
            resultado = a - b;
            break;
        case '*':
            resultado = a * b;
            break;
        case '/':
            resultado = a / b;
            break;    
    }
    showresult.textContent = '';
    resultados.forEach(el => showresult.textContent += el+" | ")
    return resultado;
}

numbers.forEach(el =>(
    el.addEventListener('click', typeNumbers)
));

operaciones.forEach(el => (
    el.addEventListener('click', typeOperacion)
));

auxs.forEach(el => (
    el.addEventListener('click', operar)
));

punto.forEach(el => (
    el.addEventListener('click', () => showOperations.textContent += el.dataset.punto)
));
