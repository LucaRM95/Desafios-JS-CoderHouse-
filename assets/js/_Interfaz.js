import { Storage } from "./_Storage.js";
import { BD_Productos } from './_baseDatos.js';
import { pago_total } from "./_funciones.js";

export class Interfaz {
    static actualizar_carrito() {
        const btn_comprar = document.querySelector("#comprar");
        //traigo el sumador del pago total
        const pago = document.querySelector("#precio-total");
        //traigo el contador de productos
        const cont_carrito = document.querySelector("#cont-carrito");
        //Traigo el carrito del DOM
        const modal = document.querySelector(".modal-body");
        //Vacío el carrito del DOM
        modal.innerHTML = '';
        //Traigo los productos del localStorage
        const carrito = Storage.traer_storage();
        //Si no hay productos imprimí en el DOM que el carrito está vacío
        if (carrito.length === 0) {
            const p = document.createElement('p'); //Perfecto que uses el create antes que el innerHTML
            p.setAttribute("style", "color:black"); //Sería mejor tener una clase para esto, y hacerle el classList.add()
            p.textContent = 'No hay productos en tu carrito';
            modal.appendChild(p);
            cont_carrito.textContent = '';
            pago.textContent = `Total: $0`;
            btn_comprar.classList.add("disabled");
        } else {
            cont_carrito.textContent = ` ${carrito.length}`;
            btn_comprar.classList.remove("disabled");
            //Si hay productos agregalos al DOM
            pago_total(carrito);
            carrito.forEach(product => {
                //if(product.tipo)
                modal.innerHTML += `
                  <div class="card mb-3" style="max-width: 540px;">
                      <div class="row g-0">
                          <div class="col-md-4">
                              <img src="${product.foto}" class="img-fluid rounded-start" alt="...">
                          </div>
                          <div class="col-md-8">
                              <div class="card-body">
                                  <table>
                                      <tr>
                                          <thead>
                                              <tr>
                                                  <td colspan=3><h5 class="card-title">${product.name}</h5></td>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <th><p class="card-text" style="color:black">$${product.precio}</p></th>
                                              <th style="display: flex; justify-content: center;">
                                                <input id="cantidad" type="text" value="${product.cantidad}" style="width: 30%" disabled readonly/>
                                              </th>
                                              <th style="width:25%">
                                                <button id="${product.tipo}" class="btn btn-outline-danger delete fas fa-times-circle" style="width: auto;"></button>
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
        }

    }
    static mostrar_productos() {
            const section = document.querySelector(".grid-products");
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
                            <a class="agregar-carrito" style="cursor:pointer" id=${e.tipo}>Agregar al carrito</a>
                        </p>
                    </div>
                </div>
            `;
        });
    }
}