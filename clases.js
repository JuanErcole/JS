/* const juan = {
    nombre: 'Juan',
    edad: '27',
    imprimir (){
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años.`) 
        // Para hacer una referencia al mismo objeto, se utila la palabra reservada this
    }
}

const rocio ={
    nombre: 'Rocio',
    edad: '27',
    imprimir (){
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años.`) 
        // Para hacer una referencia al mismo objeto, se utila la palabra reservada this
    }
}

//Desde el ES6 se pueden crear objetos del mismo tipado, que tengan la misma herencia, para crear instancias mas facil

//UpperCamelCase, es un indicativo para decirme que esto va a ser una funcion que crea una nueva instancia, aunque no es obligatorio el Upp
// Para crear una instancia de esto, se debe hacer con la palabra reservada new
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años.`) 
        // Para hacer una referencia al mismo objeto, se utila la palabra reservada this
    };
}

const miguel = new Persona('Miguel', 37); */

/*==================================================================================================================================== */
/*==================================================================================================================================== */
/*==================================================================================================================================== */

//El objetivo de class es que podamos tener propiedades y metodos que sean comunes en todas las instancias de Persona 

class Persona{
    //se recomienda poner las propiedades antes que el constructor, se ponen de muchas maneras. una es asi
    nombre;
    apellido;
    edad;
                        //con = le asigno valor por defecto           
    constructor(nombre = 'Sin nombre', apellido = 'sin apellido', edad = 'Un millon de años'){
        //constructor es un metodo que se va a ejeutar en el momento en que se crea una nueva instancia de persona
        console.log('Hola!')
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const tanos = new Persona('tanitos', 'del espacio', '136'); 
const hulk = new Persona(); 
const ironMan = new Persona('Tony', 'Stark', 45)

console.log(hulk);
console.log(tanos);
console.log(ironMan);

/* ------------------------------------------------------------------------------------------------------------ */
//Metodos  --  Funciones que se ejecuntan dentor del contexto de la clase

class PersonaDos{
    nombre;
    apellido;
    edad;
    equipoActual;
    meta2022;
    seleccion;

    constructor(nombre = 'Sin nombre', apellido = 'sin apellido', edad = '0', equipoActual = 'Ninguno', meta2022 = 'ninguna', seleccion = 'No juega'){
        this.nombre = nombre;
        this.edad = edad;
        this.apellido = apellido;
        this.equipoActual = equipoActual;
        this.meta2022 = meta2022;
        this.seleccion = seleccion;
    }

    quienSoy(){
        console.log(`Buenas noches, yo soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años y soy jugador profesional de futbol en el ${this.equipoActual}.`)
    }

    metas(){
        this.quienSoy();
        console.log(`Mi meta este año es ${this.meta2022}`)
    }

} 

const messi = new PersonaDos('Lionel', 'Messi', '35', 'PSG', 'ganar el mundial');
const lewa = new PersonaDos('Roberto', 'Lewandoski', '37', 'Barcelona', 'ganar la champions');
console.log(messi.metas());
console.log(lewa.metas());















