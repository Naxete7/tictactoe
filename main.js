let turno = 0
const tablero = [];




const btnPulsado = (e, pos) => {
    turno++;
    const btn = e.target;
    const imagen = turno % 2 ? 'url(../img/dragon-ball-goku-png-photos-818491.png)' : 'url(../img/royal-blue-vegeta-446415.png)'
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

}


// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8]

// array.map(ganador) => {

// }



// const ganador = () => {

//     switch (ganador) {
//         case "(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0])":

//         case "(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3])":

//         case "(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6])":

//         case "(tablero[30] == tablero[3] && tablero[0] == tablero[6] && tablero[0])":

//         case "(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1])":

//         case "(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2])":

//         case "(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0])":

//         case "(tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2])":

//             return alert("enhorabuena");

//     }
// }