// DESAFIO FIZZ BUZZ

//3 6 9 12... fizz
//5 10 15 20... buzz
// 15 30 45... fizz buzz

for (let i = 1; i < 100; i++){
    
    /* if( i % 15 === 0){
        console.log(`${i} FIZZBUZ !!!`);
    } else if(i % 3 === 0){
        console.log(`${i} FIZZ !!!`);
    }else if(i % 5 === 0){
        console.log(`${i} BUZZ`);
    } */
}

/*=================== while ===========================*/

/* let i = 0; //inicializo el while

while(i < 100){ //Condicion

    if( i % 15 === 0){
        console.log(`${i} FIZZBUZ !!!`);
    } else if(i % 3 === 0){
        console.log(`${i} FIZZ !!!`);
    }else if(i % 5 === 0){
        console.log(`${i} BUZZ`);
    }

    i++;
} */

// DO WHILE... El "do while" se ejecuta una vez si o si antes de revisar la condicion, sea que se cumpla o no

// al igual que el while, se inicializa-

let i = 0; //inicio... Si inicializo en 10, no se cumple la condicion, pèro se ejecuta una vez si o si.

do {

    console.log(`${i}`);
    i++;
} while(i < 10) //condicion

// FOR EACH y MAP (son metodos de arreglo)
// Se van a ejecutar una vez por cada elemento que tenga el array

const tareas = ['Hacer andar el BOT', 'Facturar', 'distribucion a CDRs', 'Reporte de tiempos Andreani', 'Reporte de tiempos IPE']

//Como el for each es un metodo la sintaxis es nombreDelArreglo.forEach(()=>{})
tareas.forEach((tarea, index) =>{

    console.log(tarea, index);
    console.log(`La tarea Nº ${index +1} del dia es ${tarea.low}`);
})

const carrito = [
    {nombre: 'PS5', precio: 700},
    {nombre: 'XBOX S', precio: 690},
    {nombre: 'PS4', precio: 400},
    {nombre: 'XBOX ONE', precio: 350}
]

//Como es una arrowF, puedo sacarle los parentesis al parametro, tambien puedo eliminar las llaves que encierran el bloque, siempre y cuando sea solo una linea la que vaya a retornar
carrito.forEach( producto => console.log(producto));

// La unica diferencia con con el ".map", es que este ultimo te crea una instancia del arreglo, ej:
const nuevoCarrito = carrito.map( producto => producto);

console.log(nuevoCarrito);

//for of -----------------------

const compras = [
    {nombre: 'Salsa', precio: 723},
    {nombre: 'Milanesas', precio: 693},
    {nombre: 'Cervezas', precio: 400},
    {nombre: 'Papas fritas', precio: 252}
]

const criptomonedas = ['BTC', 'DOT', 'ETH', 'BNB', 'VET'];

//el for of es mas simple que el each y el for comun, ya que la sintaxis es corta, se asigna una variable para cada producto del arreglo
// se lee "let compra de compras"(cada compra del arreglo compras)
for(let compra of compras){
    console.log(compra);
}

//otro ej.
for(let cripto of criptomonedas){
    console.log(cripto);
}

/*============== for in ======================== */

//La diferencia entre for of Y for in, es que esta ultima itera sobre objetos, mientras for of es un iterador de arreglos

const anime = {
    nombre: 'Naruto',
    year: 2000, 
    productora: 'Lapi Japones'
};
 
for(let propiedad in anime){

    //console.log(propiedad);
    //console.log(`${anime[propiedad]}`)
}
 
// Otra forma de iterar objetos es la siguiente
for(let [llave, valor] of Object.entries(anime)){
    console.log(llave ,valor);
}














