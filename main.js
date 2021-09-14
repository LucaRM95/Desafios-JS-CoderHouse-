'use strict';

const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
const año = parseInt(prompt("Ingrese su año de nacimiento"));
const añoActual = new Date().getFullYear();

const edad = (añoActual - año);
const nombreCompleto = `${nombre} ${apellido}`;

alert("Su nombre completo es: "+nombreCompleto);
alert("Su edad es: "+edad);