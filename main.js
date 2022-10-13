document.querySelectorAll('.botonp').forEach(
    (btnp, i) => btnp.addEventListener('click', (e) => btnPulsado(e, i)))

let tirada = 0
let tablero = [];
// let player1 = 0;
// let player2 = 0;


const btnPulsado = (e, pos) => {
    tirada++;
    const btn = e.target;
    const imagen = tirada % 2 ? 'url(../img/dragon-ball-goku-png-photos-818491-1.png)' : 'url(../img/royal-blue-vegeta-4464151.png)'
    btn.style.backgroundImage = imagen;
    tablero[pos] = imagen;

    if (ganador()) window.location.href = "ganador.html";
};




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
const guardarDatos = () => {
    listaJugadores = [{
                nombre: namePlayer1.value,
                tipo: jugador1.value
            },
            {
                nombre: namePlayer2.value,
                tipo: human2.value

            }
        ]
        // tipojugador = [{

    //     tipo: human1.value,
    //     tipo: cpu1.value,
    //     tipo: human2.value,
    //     tipo: cpu2.value
    // }]
    //guardamos datos en sessionStorage
    // sessionStorage.setItem('LISTA_JUGADORES', JSON.stringify(listaJugadores));
};
//recuperamos datos del sessionStorage
// let jug1Data = JSON.parse(sessionStorage.getItem('playerX'))
// let jug2Data = JSON.parse(sessionStorage.getItem('playerO'))




// let casillas = Array.from(document.getElementsByClassName("rectangulo"));

// let interruptor = true;

// casillas.map((casilla, /*index*/ ) => {
//             casilla.addEventListener("click", () => {
//                         let img = document.getElementById('goku');
//                         img.style.display = 'block'
//                         if (img == img.style.display('block')) {
//                             img.display = 'block';

//                         };


// casillas.map((casilla, /*index*/ ) => {
//     casilla.addEventListener("click", () => {
//         if (casilla.innerHTML == "") {
//             casilla.innerHTML = (interruptor) ? 'x' : 'O';
//             interruptor = !interruptor;

//             if (ganador()) alert("Enhorabuena!");

//         };
//     });
// });

// let jugador1 = document.getElementById(namePlayer1)
// let jugador2 = document.getElementById(namePLayer2)



// let player1 = { nombre: jugador1.value } //tipo: jugador1.value}
// let player2 = { nombre: jugador2.value } //tipo: jugadpr2.value }
// let player = {}


// sessionStorage.setItem('playerX', JSON.stringify(player1))
// sessionStorage.setItem('playerO', JSON.stringify(player2))