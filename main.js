'use strict';

const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
const año = parseInt(prompt("Ingrese su año de nacimiento"));
const nro = parseInt(prompt("Ingrese un número: "));
const añoActual = new Date().getFullYear();

const edad = (añoActual - año);
const nombreCompleto = `${nombre} ${apellido}`;

if(nombre.toLowerCase() == "hola" && apellido.toLowerCase() == "hola"){
    alert("Has ingresado hola en su nombre y apellido!!");
}else if(apellido.toLowerCase() == "hola"){
    alert("Has ingresado hola en su apellido!!");
}else if(nombre.toLowerCase() == "hola"){
    alert("Has ingresado hola en su nombre!!");
}else{
    alert("Su nombre completo es: "+nombreCompleto);
}

if(nro > 1000){
    alert("Su número es mayor a 1000");
}else if(nro >= 10 && nro <= 50){ 
    alert("Su número se encuentra entre 10 y 50");
}

if(edad >= 1 && edad < 103){
    alert(`Su edad es: ${edad}`);
}else{
    alert("Año de nacimiento incorrecto");
}