let turno = 0
const tablero = [];

const btnPulsado = (e, pos) => {
    turno++;
    const btn = e.target;
    const imagen = turno % 2 ? 'url(../img/dragon-ball-goku-png-photos-818491.png)' : 'url(../img/royal-blue-vegeta-446415.png)'
    btn.style.backgroundImage = imagen
    tablero[pos] = imagen;
}



document.querySelectorAll('button').forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i)))