'use strict';

import { shop_cards } from '../js/_funciones.js';
import { Interfaz } from './_Interfaz.js';
import { Carrito } from './_clases.js';

const title = document.querySelector("title").text;

if (title === 'MI Indumentaria - Productos') {
    Interfaz.mostrar_productos();
    Interfaz.actualizar_carrito();
    const carrito = new Carrito();
    //Evito cargar la memoria con muchos listener. Agrego uno a toda la grilla y controla todos los botones agregar carrito
    document.querySelector(".grid-products").addEventListener("click", (e) => {
        if (e.target.classList.contains('agregar-carrito')) {
            carrito.agregar_producto(e.target.id);
            Interfaz.actualizar_carrito();
            //shopCart();
        }
    });
    //Evito cargar la memoria con muchos listener. Agrego uno al body y controla todos los botones para borrar
    document.querySelector(".modal-body").addEventListener("click", (e) => {
        if (e.target.classList.contains('delete')) {
            carrito.borrarProducto(e.target.id);
            Interfaz.actualizar_carrito();
        }
    });

} else if (title === 'MI Indumentaria- Tiendas') {
    shop_cards();
}