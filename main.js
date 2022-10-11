let turno = 0
const tablero = [];




const btnPulsado = (e, pos) => {
    turno++;
    const btn = e.target;
    const imagen = turno % 2 ? 'url(../img/dragon-ball-goku-png-photos-818491-1.png)' : 'url(../img/royal-blue-vegeta-4464151.png)'
    btn.style.backgroundImage = imagen
    tablero[pos] = imagen;
    if (ganador()) alert("Enhorabuena!");
};

document.querySelectorAll('.botonp').forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i)))

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


const guardarDatos = () => {
    listaJugadores = [{
            nombre: namePlayer1.value,
            tipo: human1.value
        },
        {
            nombre: namePlayer2.value,
            tipo: cpu1.value
        }
    ]
    tipojugador = [{

        tipo: human1.value,
        tipo: cpu1.value,
        tipo: human2.value,
        tipo: cpu2.value
    }]

    sessionStorage.setItem('LISTA_JUGADORES', JSON.stringify(listaJugadores));
};








// {
//     $("#btnganador").click(); {

//         window.location.href = "./html/ganador.html";

//     };






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
//             casilla.innerHTML = (interruptor) ? 'url(../img/dragon-ball-goku-png-photos-818491-1.png)' : 'O';
//             interruptor = !interruptor;

//             if (ganador()) alert("Enhorabuena!");

//         };
//     });
// });