import { BD_Tiendas } from '../js/_baseDatos.js';

const shop_cards = () => {

    const section = $('#content_card');
    BD_Tiendas.map(e => {
        section.append(`
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
        `)
    });
}
    
shop_cards();
