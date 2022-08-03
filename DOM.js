const titulo = document.querySelector('h1');
console.log(titulo);


console.log(titulo.innerText); // Si en el CSS tiene "visibility: hidden;" no va a traer el texto
console.log(titulo.textContent); // En cambio con este si.
console.log(titulo.innerHTML); //te trae y tambien te trae el html

const img = document.querySelector('img');

img.src = 'perfil.PNG';

/* ---------------------------------------------------- */

//Aca puedo ver todos los estilos que puedo manipular
console.log(titulo); 

titulo.style.color = 'red'; // con este string le cambio el valor al color del texto

titulo.style.fontFamily = 'cursive'; // con este string le cambio el valor a la fuente del texto

/* ----------------------------------------------------- */
// En lugar de trabajar de en la forma anterior, es mejor agregar y quitar clases.

img.classList.add('clase-de-prueba', 'otraClase');

img.classList.remove('clase-de-prueba');

/* ----------------------------------------------------------- */

//traversing de DOM








