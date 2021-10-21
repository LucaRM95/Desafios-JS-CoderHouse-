import { BD_Productos } from '../../assets/js/_baseDatos.js';
import { Carrito } from './_clases.js';

let empty = false;

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

const verificar_storage = (storage, modal={}) => {
    const cont_carrito = document.querySelector("#cont-carrito");
    let i = 1;
    
    if(storage !== null && storage !== undefined){
        empty = Object.entries(storage).length === 0;
    }

    if(storage !== null && storage !== undefined && empty === false){
        


        storage.map( e => {
            cont_carrito.textContent = ` ${i++}`;

            modal.innerHTML += `
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
            `;
        });

        const btn_comprar = document.querySelector("#comprar");

        if(btn_comprar.classList.contains("disabled")){
            console.log(btn_comprar.classList.remove("disabled"))
        }
    }else{
        const btn_comprar = document.querySelector("#comprar");
        const modal_body = document.querySelector(".modal-body");
        btn_comprar.classList.add("disabled");
        
        if(empty){
            localStorage.clear();
        }

        const p = document.createElement('p');
        p.setAttribute("style", "color:black");
        p.textContent = 'No hay productos en tu carrito';
        return modal_body.appendChild(p);
    }
}

const shopCart = () => {
    const compra = new Carrito();
    const productos = document.querySelectorAll(".agregar-carrito");
    const modal_content = document.querySelector(".modal-body");
    let products_storaged = JSON.parse(localStorage.getItem("carrito"));

    productos.forEach(producto => {
        producto.addEventListener("click", e => {
            modal_content.replaceChildren()
            compra.agregarProducto(e);
            const products = JSON.parse(localStorage.getItem("carrito"));
            
            verificar_storage(products, modal_content);
            pago_total(products);
            delete_products(compra);
        });
    });
    
    verificar_storage(products_storaged, modal_content);
    pago_total(products_storaged);
    delete_products(compra);
}

const delete_products = (compra) => {
    const del = document.querySelectorAll(".delete");
    const cont_carrito = document.querySelector("#cont-carrito");
    let storage;
    let i = -1;
    
    del.forEach(btn => {
        i++;
        btn.addEventListener("click", (e) => {
            const delete_card = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

            compra.borrarProducto(e);
            delete_card.remove();
            cont_carrito.textContent = ` ${ i--}`;
            storage = JSON.parse(localStorage.getItem("carrito"));
            verificar_storage(storage);
            pago_total(storage);
        });
    })   
}

const pago_total = (products_storaged) => {
    const cont_carrito = document.querySelector("#cont-carrito");
    const tb_precio = document.querySelector("#precio_total");
    const comprar = document.querySelector("#comprar");
    let precio_total = 0;

    if (products_storaged === null){
        tb_precio.textContent = `Total: $${precio_total}`;
    }else{
        products_storaged.forEach(element => {
            precio_total += element.precio;
        });
        tb_precio.textContent = `Total: $${precio_total}`;
    
        comprar.addEventListener("click", () => {
            const storage = [];
            const cards_cart = document.querySelectorAll(".card.mb-3");
            cards_cart.forEach( e => {
                e.remove();
            })
            verificar_storage(storage);
            cont_carrito.textContent = "";
            tb_precio.textContent = `Total: $0`;

            alert(
            `
                Compra exitosa! 
                Nos contactaremos vía mail para informarte del envío.
                Muchas gracias por elegir Mala Influencia Ind.
            `);
        });  
    }
}

export {
    products_cards,
    shopCart,
    pago_total
}
