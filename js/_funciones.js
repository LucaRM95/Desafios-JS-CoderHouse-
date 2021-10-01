'use strict';

import { Usuarios } from './_clases.js';
import { BD_Productos, BD_Usuarios } from './_baseDatos.js';

let pago_Total = 0;
//Funciones
//función loguear y registrar
const logear_Registrar = () => {
    let rta = "";

    do{
        rta = prompt('Quiere logearse o registrarse?(log/reg/salir)');
    }while(rta.toLowerCase() != 'log' && rta.toLowerCase() != 'reg' && rta.toLowerCase() != 'salir');

    
    switch (rta.toLowerCase()) {
        //log in
        case 'log': 
            validar_Datos();
            break;
        //registro
        case 'reg':
            let user_name = prompt("Ingrese su nombre: ");
            let user_lastName = prompt("Ingrese su apellido: ");
            let user_nick = prompt("Ingrese nombre de usuario");
            let user_pass = prompt("Ingrese su contraseña");
            
            while(user_nick === '' || user_pass === ''){
                alert('La contraseña y/o usuario no pueden estar vacíos!!');
                user_name = prompt("Ingrese su nombre: ");
                user_lastName = prompt("Ingrese su apellido: ");
                user_nick = prompt("Ingrese nombre de usuario");
                user_pass = prompt("Ingrese su contraseña");
            }

            const userLog = new Usuarios(user_name, user_lastName, user_nick, user_pass); 
            BD_Usuarios.push(userLog);

            alert(`Gracias por registrarte en MI Indumentaria!`);
            
            validar_Datos();
            break;
    }
}

//función validar usuario y contraseña
const validar_Datos = () => {

    ordenar(BD_Usuarios);

    BD_Usuarios.map(e => console.log(e));

    let log_User = prompt('Ingrese su nombre de usuario');
    let log_Pass = prompt('Ingrese su contraseña');
    let cont = 1;

    let find_user = search_user(log_User, log_Pass);

    while(find_user === undefined && cont < 3){
        alert('Contraseña y/o usuario incorrecto, intente de nuevo');

        cont++;

        log_User = prompt('Ingrese su nombre de usuario');
        log_Pass = prompt('Ingrese su contraseña');

        find_user = search_user(log_User, log_Pass);
    }
    
    if(cont >= 3){
        alert("Has llegado al limite de intentos, prueba más tarde");
    }else{
        let rta = "";

        alert(`Hola ${log_User}, bienvenido!!
            1) Editar datos de usuario.
            2) Comprar productos.
            3) Salir
        `);

        do{
            rta = parseInt(prompt("¿Que desea hacer?"));
        }while(rta != 1 && rta != 2 && rta != 3);

        while(rta != 3){
            switch(rta){
                case 1: 
                    edit_user(find_user);
                    break;
                case 2: 
                    carrito();
                    break;
            }

            alert(`Hola ${log_User}, bienvenido!!
                1) Editar datos de usuario.
                2) Comprar productos.
                3) Salir
            `);
            do{
                rta = parseInt(prompt("¿Que desea hacer?"));
            }while(rta != 1 && rta != 2 && rta != 3);
        }
    } 
}

//Función ordenar arrays de objetos
const ordenar = arr => {

    arr.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }else if(a.name > b.name){
            return 1;
        }
        
        return 0;
    });
    
    

}

//Funcion buscar usuario
const search_user = (log_User, log_Pass) => {
    const find_user = BD_Usuarios.find( e => {
        if(e.user_name === log_User && e.pass === log_Pass){
            return e;
        }
    });

    return find_user;
}

//función editar usuario
const edit_user = user_Log => {
    let change_name = prompt("Ingrese nombre nuevo: ");
    let change_lastName = prompt("Ingrese apellidos nuevos: ");
    let change_user = prompt("Ingrese nuevo nombre de usuario: ");
    let change_pass = prompt("Ingrese nueva contraseña: ");

    user_Log.name = change_name;
    user_Log.last_name = change_lastName;
    user_Log.user_name = change_user;
    user_Log.pass = change_pass;
    
    alert(`
        Se han aplicado los cambios en tus datos!

        Nombre: ${user_Log.name}
        Apellidos: ${user_Log.last_name}
        Nombre de usuario: ${user_Log.user_name}
        Contraseña: ${user_Log.pass}
    `);

    console.log(user_Log);
}

//función carrito
const carrito = () => {
    let rpta = "";
    let seguir_comprando = "";

    do{
        rpta = prompt("¿Desea comprar algún producto? (si/no)");
    }while(rpta.toLowerCase() !== 'si' && rpta.toLowerCase() !== 'no');

    while(rpta.toLowerCase() === 'si'){
        let eleccion = "";
        
        alert(`
            Los productos en stock son: 
            Indumentaria personalizadas (IP) - $1450
            Indumentaria de MI (IMI) - $1150
            Indumentaria de desarrolladores (ID) - $1250
            Indumentaria cartoons (IC) - $1250
            Indumentaria (E) - $950
        `);

        do{
            eleccion = prompt("¿Que producto desea comprar?");
        }while( eleccion.toUpperCase() !== 'IP' && eleccion.toUpperCase() !== 'IMI' && eleccion.toUpperCase() !== 'ID' && eleccion.toUpperCase() !== 'IC' && eleccion.toUpperCase() !== 'E');

        pago_Total = pago_Total + Comprar(eleccion);

        do{
            rpta = prompt("¿Desea seguir comprando? (si/no)");
            seguir_comprando = rpta.toLowerCase();
        }while(rpta.toLowerCase() !== 'si' && rpta.toLowerCase() !== 'no');    
    }

    if(seguir_comprando === 'no'){
        let finalizar_Compra = "";

        do{
            finalizar_Compra = prompt(`¿Desea abonar el total de ${pago_Total}?`);
        }while(finalizar_Compra.toLowerCase() !== 'si' && finalizar_Compra.toLowerCase() !== 'no');

        if(finalizar_Compra === 'si'){
            alert('Gracias por comprar en MI Indumentaria, lo esperamos pronto!');
        }else{
            alert('Guardaremos sus productos para una futura compra!');
        }
    }
}

//Función compra
const Comprar = compra => {

    let precio_Total = 0;
    BD_Productos.map( e => {
        if( e.tipo === compra.toUpperCase()){
            precio_Total += calcular_Precio(e.precio);
        }
    });

    return precio_Total;
}

//Función calcular precio total
const calcular_Precio = precio => {
    console.log("precio en funcion calcular precio");
    console.log(precio);

    const total_IVA = calcular_IVA(precio);
    let precio_Total = 0;

    precio_Total = precio_Total + total_IVA;
    
    return precio_Total;
} 

//Función calcular el IVA del precio
const calcular_IVA = precio => {
    console.log("precio en funcion calcular IVA");
    console.log(precio);

    const precio_IVA = precio + (precio*0.21);

    return precio_IVA;
}

export { carrito, logear_Registrar };