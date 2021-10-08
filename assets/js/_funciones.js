'use strict';

import { BD_Productos, BD_Tiendas } from '../../assets/js/_baseDatos.js';

const shop_cards = () => {

    const section = document.querySelector(".contact_section__item--bg");

    BD_Tiendas.map(e => {
        section.innerHTML += `
            <div class="shop-iframe">
                <div class="shop-iframe__text">
                    <p>${e.name}</p>
                    <p>${e.address}</p>
                    <p>${e.location}</p>
                    <p>${e.phone}</p>
                    
                    ${e.open_hour.map(i => `<p>${i}</p>`)}
                </div>

                <iframe src="${e.map_location}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>

            <p>―</p>
        `
    });
}

const products_cards = () => {

    const section = document.querySelector(".grid-products");

    BD_Productos.map(e => {
        section.innerHTML += `
            <div class="blog-card" data-aos="zoom-in">
            <div class="meta">
                <div class="photo" style="background-image: url(${e.foto});"></div>
                <ul class="details">
                <li class="price">Precio desde: $${e.precio}</li>
                <li class="size">Talles: ${e.talles}</li>
                <li class="tags">
                    <ul>
                        ${e.tags.map(i => `<li><a href="#">${i}</a></li>`)}
                    </ul>
                </li>
                </ul>
            </div>
            <div class="description">
                <h1>${e.title}</h1>
                <h2>${e.subtitle}</h2>
                <p>${e.description}</p>
                <p class="read-more">
                <a href="#">Comprar ya</a>
                </p>
            </div>
            </div>
        `;
    });
}

export {
    products_cards,
    shop_cards
}
