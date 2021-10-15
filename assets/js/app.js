'use strict';

import {products_cards, shopCart, shop_cards } from '../../assets/js/_funciones.js';
//import { logear_Registrar } from '../js/_funciones.js';
const title = document.querySelector("title").text;

//logeo en página web
//logear_Registrar();

if(title === 'MI Indumentaria - Productos'){
    products_cards();
    shopCart();
}else if(title === 'MI Indumentaria- Tiendas'){
    shop_cards();
}
