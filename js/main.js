document.querySelectorAll('.botonp').forEach(
    (btnp, i) => btnp.addEventListener('click', (e) => btnPulsado(e, i)))

let tirada = 0
let tablero = [];
let playerX = 'url(../img/dragon-ball-goku-png-photos-818491-1.png)'
let playerO = 'url(../img/royal-blue-vegeta-4464151.png)'
    // let contPlayerX = 0
    // let contPlayerO = 0
    //Guardamos datos de los jugadores en la sessionStorage
const optionHumanJ1 = document.getElementById('human1');
const optionHumanJ2 = document.getElementById('human2');


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



function cpu() {
    If(humanJ1 = false); {

        cpuRandom

    };
}



// If(humanJ1 = false); {
//     humanJ2 = true

// };

const cpuRandom = () => {
        const random = Math.round(Math.random() * 8)
        return casillas[random]
    }
    //Preparamos el juego para que al pulsar el boton salgan las fichas

const btnPulsado = (e, pos) => {
    tirada++;
    const btn = e.target;
    //if la posicion esta vacia me deja, sino no hace nada
    if (tablero.pos = [""]) {
        const imagen = tirada % 2 ? playerX : playerO
        btn.style.backgroundImage = imagen;
        tablero[pos] = imagen;
        //Cada jugador puede tener como maximo 3 fichas en el tablero
        turno()

        // if (X = < 3)
        playerX <= 3
        playerO <= 3
            // if (O = < 3)


        //si es diferente de null, y diferente del otro jugador, si puedes pulsar
        // if (X = !null && = !O)) {
    };
    if (ganador()) window.location.href = "ganador.html";

}

//Comprobamos si hay ganador
const ganador = () => {
    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
        return true;
    } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
        return true;
    } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) {
        return true;
    } else if (tablero[30] == tablero[3] && tablero[0] == tablero[6] && tablero[0]) {
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



//Volvemos a guardar los datos en el sessionStorage, para que salgan en el cuadro del ganador

const ganadorHumanJ1 = document.getElementById('human1');
const ganadorHumanJ2 = document.getElementById('human2');

const datosganador = () => {
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


let nameganador1 = JSON.parse(sessionStorage.getItem("LISTA_GANADORES"))[0].name
let nameganador2 = JSON.parse(sessionStorage.getItem("LISTA_GANADORES"))[1].name

let cuadroganador = document.getElementById("cuadroganador")
    // if (ganador = playerX) {
cuadroganador.innerHTML = ("El ganador es " + nameganador1)
    // } else(winner.innerHTML = "El ganador es: " + nameganador2);