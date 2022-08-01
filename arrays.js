/* let nombre = 'juan';
let edad = 27;
let masculino = true;

console.log(typeof nombre); //typeof para saber eñl tipo de dato
console.log(typeof edad);
console.log(typeof masculino ); */

// ARREGLOS ------------------------------------------------------------------------------- 1

//const arr = new Array(13);
//const arr = [];
//console.log(arr); 
 
let VideoJuegos = ['Mario car', 'CoD', 'God of War'];
console.log(VideoJuegos[0]);
console.log({VideoJuegos});

let juguetes = [
    "Iron Man",
    "Capitan America",
    "Thor",
    "Black Panther",
    "Grut",
    "Hulk",
]; 

console.log({juguetes});

/* let juguetes = [
    "Iron Man",
    "Capitan America",
    "Thor",
    "Black Panther",
    "Grut",
    "Hulk",
    ["Goku", "Vegeta", "Freezer", "Cell", "Majin Boo"]
]; */

/* console.log({juguetes});
console.log(juguetes[5]);
console.log(juguetes[6][4]); */

// ARREGLOS ------------------------------------------------------------------------------------------------------ 2

let juegos = ["Zelda", "Pokemon", "Brawl Stars", "Candy Crush"];
juegos.pop(1);     // =========> .pop(3) elimina el ultimo elemento del array 
juegos.push("Clash of Clan", "jim 2", "FIFA 2022");     // =========> .push("") agrega un elemento al ultimo del arreglo 
juegos.unshift("Bomberman"); // .unshift Agrega un elemnto al principio del array
juegos.splice(0, 2);
// console.log("Este arreglo tiene un largo de: " + juegos.length + " posiciones");

let primerJuego = juegos[0];
let segundoJuego = juegos[0 + 1];
let ultimoJuego = juegos[juegos.length - 1];

//console.log(primerJuego, segundoJuego, ultimoJuego);


//console.log(juegos[0]);

juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento, indice,arr});
});

let posicionBS = juegos.indexOf("Brawl Stars");

//console.log(posicionBS); // CaseSensitive

/*-----------------array methods---------------- */
/*-----------------array methods---------------- */
/*-----------------array methods---------------- */ 

const personajes = ['Naruto', 'Kakashi', 'Iruka', 'Sasuke', 'Tsunade', 'Orochimaru', 'Jiraiya'];

//  .includes --> revisa si un valor existe en un arreglo (solo en arreglos que solo tengan indices)
// este metodo retorna un valor asi que hay que crear una variable
let resultado = personajes.includes('Kakashi');
console.log(resultado);

let resultadoDos = personajes.includes('Sakura');
console.log(resultadoDos);
 
// .some --> revisa si hay un valor en un arreglo de objetos

const carrito = [
    {nombre: 'PS5', precio: 700},
    {nombre: 'XBOX S', precio: 690},
    {nombre: 'PS4', precio: 400},
    {nombre: 'XBOX ONE', precio: 350}
]
 
//recordar que los arrowF al recibir un solo parametro se pueden eliminar los parentesis 
// "(parametro)=>" queda "parametro =>"  ---  Al ser una sola linea de codigo puedo eliminar las llaves tmb
// no hace falta el "return" porque los arrowF lo dan por explicito
const stock = carrito.some( producto => producto.nombre === 'PS5');
console.log(stock);

//tambien puedo usar los arrowF en arreglos tradicionales, que sean solo de indices
const tsunade = personajes.some(personaje => personaje === 'Tsunade');
console.log(tsunade);

const kiba = personajes.some(personaje => personaje === 'Kiba');
console.log(kiba);


// findIndex --> busca el indice de un valor -- funciona tambien en arreglos de objetos.

const sasuke = personajes.findIndex(personaje => personaje === 'Sasuke');
console.log(sasuke); // me va a mostrar 3 porque sasuke esta en la posicion 3, es el 4to elemento.
//recordemos que la primera posicion es la posicion 0 --- 'Naruto'= 0, 'Kakashi'= 1, 'Iruka'= 2, 'Sasuke'= 3 


const ps4 = carrito.findIndex(producto => producto.nombre === 'PS4');
console.log(ps4);


// .reduce  -.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-



//con un foreach
const carritoDeCompras = [
    {nombre: 'Mayonesa hellmans', precio: 700},
    {nombre: 'BBQ hellmans', precio: 690},
    {nombre: 'Cerveza Corona', precio: 400},
    {nombre: 'Philip Morris', precio: 350}
]

/* let total = 0;

carritoDeCompras.forEach(productos => total += productos.precio);
console.log(total); */

//con un .reduce

let TotalPagar = carritoDeCompras.reduce((total, producto)=> total + producto.precio, 0);
console.log(TotalPagar);


// .filter -.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// Una caracteristica de filter es que te crea un arreglo nuevo con la condicion que estes revisando 

const carritoDeCompra = [
    {nombre: 'Mayonesa hellmans', precio: 700},
    {nombre: 'BBQ hellmans', precio: 700},
    {nombre: 'Cerveza Corona', precio: 400},
    {nombre: 'Alfajor', precio: 130},
    {nombre: 'Pepsi', precio: 230},
    {nombre: 'Philip Morris', precio: 350}
]

let resultado1;


resultado1 = carritoDeCompra.filter(producto => producto.precio < 500);
resultado1 = carritoDeCompra.filter(producto => producto.precio > 500);
resultado1 = carritoDeCompra.filter(producto => producto.nombre  === 'Pepsi');
resultado1 = carritoDeCompra.filter(producto => producto.nombre !== 'Pepsi');
console.log(resultado1);


// .find -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

//El .find te crea un nuevo arreglo basado en la condicion que estas revisando
// Siempre retorna el primero que encuenta 

const product = carritoDeCompra.find( producto => producto.nombre === 'Cerveza Corona');
const product2 = carritoDeCompra.find( producto => producto.precio === 700);
console.log(product);
console.log(product2);

/* ------------------ every ------------------------ */

//todos los elemnetos de un arreglo deben cumplir esa condicion para que nos devuelva un true

const preciosBajos = carritoDeCompra.every( productos => productos.precio < 800);
const preciosAltos = carritoDeCompra.every( productos => productos.precio > 800);
console.log(preciosAltos);

/* .concat ------------------------------------------------ */

const dias = ['lunes', 'martes', 'miercoles'];
const diasDos = ['jueves', 'viernes'];
const diasTres= ['sabado', 'domingo'];

const semana = dias.concat(diasTres, diasDos); //Es impoortabte el orden en la declaracion
console.log(semana);

//Otra forma de hacerlo es con el spread operator
//Tambien importa el orden

// ...dias crea una copia de dia en el nuevo arreglo
const resultado2 = [...dias, ...diasDos, ...diasTres];
console.log(resultado2)  





