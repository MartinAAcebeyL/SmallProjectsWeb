class Jugador{
    constructor(){
        this.tipo = '';
        this.score = 0;
        this.numero = 0;
    }

    get Numero(){return this.numero}
    get Score(){return this.score}

    set Tipo(tipo){this.tipo = tipo}
    set Score(score){this.score = score}
    set Numero(numero){this.numero = numero}
}
class Juego{
    
    constructor(){
        this.jugador = new Jugador();
        this.jugadorPc = new Jugador();
        this.ganador = '';
    }

    start(){
        this.seleccion_jugador();
        if(this.jugador.Score >= 3|| this.jugadorPc.Score >= 3) this.Ocultar('false');
        this.seleccion_numero();
        this.decision();
    }

    Ocultar(ocultar){
        document.getElementsByName('parImpar').disabled = Boolean(ocultar);
    }

    seleccion_jugador() {
        let tipo = '';
        document.getElementById('par').checked?tipo = "par":tipo = "impar";
        this.jugador.Tipo = tipo;
        if(tipo=='par')
            this.jugadorPc.Tipo = 'impar';
        else
            this.jugadorPc.Tipo = 'par';
        this.Ocultar('true');
    }

    seleccion_numero() {    
        this.jugador.Numero = prompt('De un numero: ');
        this.jugadorPc.Numero = this.getNumeroPc(0, 5);
        console.log(this.jugador.Numero + " "+ this.jugadorPc.Numero);

        document.getElementById('izquierda').innerHTML = this.jugador.Numero;
        document.getElementById('derecha').innerText = this.jugadorPc.Numero;
    }

    decision(){
        let suma = Number(this.jugador.Numero) + Number(this.jugadorPc.Numero);
        let ganador = '--';
        if(suma % 2 == 0 && this.jugador.Tipo == 'par'){
            this.jugador.Score++;
            ganador = 'par';
        }else{
            this.jugadorPc.Score++;
            ganador = 'impar';
        }
        this.mostrar(suma, ganador);
    }

    mostrar(suma, ganador){
        document.getElementById('suma').innerText = suma;
        document.getElementById('ganador').innerText = ganador;

        document.getElementById('jugador1').innerText = this.jugador.Score;
        document.getElementById('jugador2').innerText = this.jugadorPc.Score;

        console.log(this.jugador.Score +" "+this.jugadorPc.Score)
    }

    getNumeroPc(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}

let juego = new Juego();

