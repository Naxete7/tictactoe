//Preparamos el juego para que al pulsar el boton salgan las fichas
document.querySelectorAll('.botonp').forEach(
    (btnp, i) => btnp.addEventListener('click', (e) => btnPulsado(e, i)))

let tirada = 0
let tablero = [];
let X = 'url(../img/dragon-ball-goku-png-photos-818491-1.png)'
let O = 'url(../img/royal-blue-vegeta-4464151.png)'


const btnPulsado = (e, pos) => {
        tirada++;
        const btn = e.target;
        //if la posicion esta vacia me deja, sino no hace nada
        if (boton = [""]) {
            const imagen = tirada % 2 ? X : O
            btn.style.backgroundImage = imagen;
            tablero[pos] = imagen;


            //si hay 3 fichas de cada jugador, ya puedes hacer click
            // if (X = < 3)
            // if (O = < 3)
            //si es diferente de null, y diferente del otro jugador, si puedes pulsar 
            // if (X = !null && = !O)) {

        };
        if (ganador()) window.location.href = "ganador.html";

    }
    // else {}







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
const humanJ1 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[0].human;
const humanJ2 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[0].human2;


function verhumanJ1() {
    document.write(humanJ1);
}

let mensaje = tirada % 2 ? humanJ1 : humanJ2