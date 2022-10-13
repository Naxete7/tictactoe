let player1Mark = 'x'
let player1MarkImg = './img/dragon-ball-goku-png-photos-818491.png'
let player2Mark = 'o'
let player2MarkImg = './img/royal-blue-vegeta-4464151.png'
let playerMark = player1Mark
let board = document.getElementById('gameBoard')
let player1 = { nombre: 'jugadorA', tipo: 'cpu' }
let player2 = { nombre: 'jugadorB', tipo: 'humano' }
let player = {}


const boxClick = (box) => {
    if (box.innerHTML == "") {
        if (playerMark == player1Mark) {
            console.log(`url('${player1MarkImg}')`)
            box.style.backgroundImage = `url('${player1MarkImg}')`;

            player = player1;
            playerMark = player2Mark;
            checkWinner(2, 5, 6)
        } else {
            box.style.backgroundImage = `url('${player2MarkImg}')`;
            player = player2;
            playerMark = player1Mark;
            checkWinner(0, 1, 2)
        }

    }
}





//Capturamos en un array todos los elementos.
// let casillas = Array.from(document.getElementsByClassName("rectangulo"));

// //Hemos usado map porque nos permite tratar a cada elemento 
// //del array casillas como un objeto (propiedades + metodos);
// let interruptor = true;

// casillas.map((casilla, /*index*/ ) => {
//     casilla.addEventListener("click", () => {
//         if (casilla.innerHTML == "") {
//             casilla.innerHTML = (interruptor) ? "X" : "O";
//             interruptor = !interruptor;

//             //Comprobamos en otra funcion si hay un ganador.......

//         };
//     });
// });