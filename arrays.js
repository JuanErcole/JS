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











