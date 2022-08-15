var jugador;
function seleccion_jugador() {    
    document.getElementById('par').checked?jugador = "par":jugador = "impar"
    document.getElementById('suma').textContent = jugador; 
}

function pedir_numero() {
    let numero = prompt('De un numero');
    
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function numeroMaquina() {
    let numero_robotica = getRandomIntInclusive(0, 5);
    alert(numero_robotica);
}