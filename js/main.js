//falta limitar a 3 fichas por jugador. Poner nombre de ganador. CPU
// validar si playerX tiene 3 fichas, no dejar poner mas




document.querySelectorAll('.botonp').forEach(
    (btnp, i) => btnp.addEventListener('click', (e) => btnPulsado(e, i)))



let tirada = 0
let tablero = [];
let playerX = 'url(../img/dragon-ball-goku-png-photos-818491-1.png)'
let playerO = 'url(../img/royal-blue-vegeta-4464151.png)'

let contPlayerX = 3
let contPlayerO = 3

//Guardamos datos de los jugadores en la sessionStorage
const optionHumanJ1 = document.getElementById('human1');
const optionHumanJ2 = document.getElementById('human2');
// class Player {
//     constructor(nombre, tipo, mark) {
//         this.nombre = nombre;
//         this.tipo = tipo;
//         this.turnos = 3;
//         this.mark = mark
//     }
// };


const guardarDatos = () => {
    playersList = [{
            name: namePlayer1.value,
            human: optionHumanJ1.checked
        },
        {
            name: namePlayer2.value,
            human: optionHumanJ2.checked
        }
    ]
    sessionStorage.setItem('LISTA_JUGADORES', JSON.stringify(playersList));
};
//recuperamos datos del sessionStorage
let humanJ1 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[0].human;
let humanJ2 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[1].human;


let name1 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[0].name
let name2 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[1].name

//introducimos los datos en el cuadro de diálogo de la partida

let cuadro = document.getElementById("dialogo")

function turno() {

    if (tirada % 2) {
        cuadro.innerHTML = "Turno para " + name1
    } else {
        cuadro.innerHTML = "Turno para " + name2
    }
};

// const fichasX = () => {

//     if (contPlayerX < 3) { return true } else { return false }
// };

// const fichasO = () => {

//     if (contPlayerO < 3) { return true } else { return false }

// };





//Preparamos el juego para que al pulsar el boton salgan las fichas



const btnPulsado = (e, pos) => {
    if (playerX) { contPlayerX--; };
    contPlayerO--;
    // if (tablero[pos] == `div.rectangulo.celda${pos}`) {
    if (tablero[pos] == undefined) {
        turno()
        tirada++;
        const btn = e.target;
        //if la posicion esta vacia me deja, sino no hace nada
        // console.log(tablero[pos] == undefined);
        const imagen = tirada % 2 ? playerX : playerO
        btn.style.backgroundImage = imagen;
        tablero[pos] = imagen;
        // console.log(contPlayerX);
        // console.log(contPlayerX);
        // };
        if (ganador()) window.location.href = "ganador.html";

    };
}

//Comprobamos si hay ganador
const ganador = () => {
    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
        return true;
    } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
        return true;
    } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) {
        return true;
    } else if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]) {
        return true;
    } else if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]) {
        return true;
    } else if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]) {
        return true;
    } else if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]) {
        return true;
    } else if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]) {
        return true;
    } else {
        return false;
    }

};


//volvemos a guardar en sessionStorage para que salga en el cuadro de ganador

const winnernHumanJ1 = document.getElementById('human1');
const winnerHumanJ2 = document.getElementById('human2');


const winner = () => {
    playersList = [{
            name: namePlayer1.value,
            human: optionHumanJ1.checked
        },
        {
            name: namePlayer2.value,
            human: optionHumanJ2.checked
        }
    ]
    sessionStorage.setItem('LISTA_GANADORES', JSON.stringify(playersList));
};
//recuperamos datos del sessionStorage
let winnerJ1 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[0].name;
let winnerJ2 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[1].name;


//Funcion de ganador para que aparezca el nombre del ganador en el cuadro


let cuadroGanador = document.getElementById("cuadroganador")

function win() {
    if (ganador = humanJ1) {
        cuadroGanador.innerHTML = "Ha ganado la partida " + name1
    } else {
        cuadroGanador.innerHTML = "Ha ganado la partida" + name2
    }
};