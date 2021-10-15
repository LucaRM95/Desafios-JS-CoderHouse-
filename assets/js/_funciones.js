import { BD_Productos, BD_Tiendas } from '../../assets/js/_baseDatos.js';
import { Carrito } from './_clases.js';

let id = 0;

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
    let id = 1;

    BD_Productos.map(e => {
        section.innerHTML += `
            <div id="${e.tipo}" class="blog-card" data-aos="zoom-in">
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
                        <a class="agregar-carrito" style="cursor:pointer" id=${id++}>Agregar al carrito</a>
                    </p>
                </div>
            </div>
        `;
    });
}

const verificar_storage = (modal, storage) => {

    const cont_carrito = document.querySelector("#cont-carrito");
    let i = 1;

    if(storage !== null){
        
        storage.map( e => {
            cont_carrito.textContent = ` ${i++}`;

            return modal.innerHTML += `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${e.foto}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <table>
                                    <tr>
                                        <thead>
                                            <tr>
                                                <td colspan=3><h5 class="card-title">${e.name}</h5></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <th scope="col"><p class="card-text" style="color:black">$${e.precio}</p></th>
                                            <th scope="col" style="width:25%">
                                                <button id="${e.tipo}" class="btn btn-outline-danger delete fas fa-times-circle" style="width: auto;"></button>
                                            </th>
                                        </tbody>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            `
            });
    }else{
        const p = document.createElement('p');
        p.setAttribute("style", "color:black");
        p.textContent = 'No hay productos en tu carrito';
        return modal.appendChild(p);
    }
}

const shopCart = () => {
    const compra = new Carrito();
    const productos = document.querySelectorAll(".agregar-carrito");
    const modal_content = document.querySelector(".modal-body");
    const products_storaged = JSON.parse(localStorage.getItem("carrito"));

    productos.forEach(producto => {
        producto.addEventListener("click", e => {
            
            compra.agregarProducto(e, id);
            id++;
            
        });
    });

    verificar_storage(modal_content, products_storaged);
    delete_products(compra);
    pago_total(products_storaged);
}

const delete_products = (compra) => {
    const del = document.querySelectorAll(".delete");
    
    del.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const delete_card = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

            compra.borrarProducto(e);
            delete_card.remove();
        });
    })
    
}

const pago_total = (products_storaged) => {
    const tb_precio = document.querySelector("#precio_total");
    const comprar = document.querySelector("#comprar");
    let precio_total = 0;

    products_storaged.forEach(element => {
        precio_total += element.precio;
    });
    tb_precio.textContent += ` $${precio_total}`;

    comprar.addEventListener("click", () => {
        const body_cart = document.querySelector('.modal-body');

        alert(
        `
            Compra exitosa! 
            Nos contactaremos vía mail para informarte del envío.
            Muchas gracias por elegir Mala Influencia Ind.
        `);

        body_cart.remove();
        localStorage.clear();
    });
}

export {
    products_cards,
    shop_cards,
    shopCart,
}
