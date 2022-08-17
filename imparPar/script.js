class Jugador{
    constructor(){
        this.tipo = '';
        this.score = 0;
        this.numero = 0;
    }

    get Numero(){return this.numero}
    get Score(){return this.score}
    get Tipo(){return this.tipo}

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
        if(this.jugador.Tipo == ''){
            this.seleccion_jugador();
            this.Ocultar(true);
        }else{
            if(this.jugador.Score >= 3 || this.jugadorPc.Score >= 3){
                if(this.jugador.Score >= 3){
                    alert("Ganador jugador " + this.jugador.Tipo);
                }else{
                    alert("Ganador jugador " + this.jugadorPc.Tipo);
                }
                let jugar = prompt('Quiere jugar de nuevo?[s/n]:')
                if(jugar == 's'){
                    this.Ocultar(false);
                    this.Reiniciar();
                    this.jugador = new Jugador();
                    this.jugadorPc = new Jugador();
                }
            }else{
                this.seleccion_numero();
                this.decision();
            }
        }
    }

    //para ocultar los radio button
    Ocultar(ocultar){
        document.getElementById('par').disabled = Boolean(ocultar);
        document.getElementById('impar').disabled = Boolean(ocultar);
    }

    //selecciona tipo de jugador -> Par o impar, para los 2 jugadores
    seleccion_jugador() {
        let tipo = '';
        document.getElementById('par').checked?tipo = "par":tipo = "impar";
        this.jugador.Tipo = tipo;
        document.getElementById('tipoJugador').innerText = "Selecciono: " + this.jugador.Tipo.toLocaleUpperCase();

        if(tipo=='par')
            this.jugadorPc.Tipo = 'impar';
        else
            this.jugadorPc.Tipo = 'par';
    }

    //seleccion de numero del 0 - 5
    seleccion_numero() {    
        this.jugador.Numero = prompt('De un numero: ');
        this.jugadorPc.Numero = this.getNumeroPc(0, 5);

        document.getElementById('izquierda').innerHTML = this.jugador.Numero;
        document.getElementById('derecha').innerText = this.jugadorPc.Numero;
    }

    //toma de descion para saber quien suma puntos
    decision(){
        let suma = Number(this.jugador.Numero) + Number(this.jugadorPc.Numero);
        let ganador = '';
        if(suma % 2 == 0){
            if(this.jugador.Tipo == 'par')
                this.jugador.Score++;
            else
                this.jugadorPc.Score++;
            ganador = 'par';
        }else{
            if(this.jugador.Tipo == 'impar')
                this.jugador.Score++;
            else
                this.jugadorPc.Score++;
            ganador = 'impar';
        }
        this.mostrar(suma, ganador);
    }

    //para modificar varias partes del DOM
    mostrar(suma, ganador){
        document.getElementById('suma').innerText = "La suma es: "+suma;
        document.getElementById('ganador').innerText = "Ganador: "+ganador;

        document.getElementById('jugador1').innerText = this.jugador.Score;
        document.getElementById('jugador2').innerText = this.jugadorPc.Score;
    }

    //
    Reiniciar(){
        document.getElementById('tipoJugador').innerText = '';

        document.getElementById('izquierda').innerHTML = '';
        document.getElementById('derecha').innerText = '';

        document.getElementById('suma').innerText = '';
        document.getElementById('ganador').innerText = '';

        document.getElementById('jugador1').innerText = 0;
        document.getElementById('jugador2').innerText = 0;
    }

    getNumeroPc(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}

//instacia
let juego = new Juego();