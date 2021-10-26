import { BD_Tiendas } from '../../assets/js/_baseDatos.js';
import { Interfaz } from './_Interfaz.js';

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

const pago_total = (products_storaged) => {
    const comprar = document.querySelector("#comprar");
    const tb_precio = document.querySelector("#precio-total");
    let precio_total = 0;

    comprar.classList.remove("disabled");
    
    products_storaged.forEach(element => {
        precio_total += element.precio * element.cantidad;
    });
    tb_precio.textContent = `Total: $${precio_total}`;

    comprar.addEventListener("click", () => {
        window.location = "../../sections/pago.html";
        Interfaz.actualizar_carrito();
    });
}

export {
    shop_cards,
    pago_total
}