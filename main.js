let turno = 0
const tablero = [];

const btnPulsado = (e, pos) => {
    turno++;
    const btn = e.target;
    const imagen = turno % 2 ? 'url(../img/metal-lines-stripes-light-shiny-silver.jpg)' : 'url(../img/A-Abecedario-letras-grandes-imprimir-mayúsculas.jpg)'
    btn.style.backgroundImage = imagen
    tablero[pos] = imagen;
}



document.querySelectorAll('button').forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i)))