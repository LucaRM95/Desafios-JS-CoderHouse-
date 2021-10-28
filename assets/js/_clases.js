import { BD_Productos } from './_baseDatos.js';
import { Storage } from './_Storage.js';

class Carrito {
    borrarProducto(tipo) {
        let storage = Storage.traer_storage();
        Storage.guardar_storage("carrito", storage.filter(item => item.tipo !== tipo));
    }

    agregar_producto(id) {
        //Traigo el producto de la db productos
        let producto = BD_Productos.find(item => item.tipo === id);
        //Traigo el carrito de localStorage o un array vacío
        const carrito = Storage.traer_storage();

        if(carrito.length === 0){
            //Agrego el producto al carrito
            carrito.push(producto);
            //Agrego contador de cantidad al primer producto del array
            Object.assign(carrito[0], {cantidad: 1});
            //Guardo el carrito en el localStorage
            Storage.guardar_storage("carrito", carrito);
        }else{
            let busqueda = carrito.findIndex(item => item.tipo === id);
            if(busqueda !== -1){
                //Incremento el contador de cantidad
                carrito[busqueda].cantidad++;
                //Guardo el carrito en el localStorage
                Storage.guardar_storage("carrito", carrito);
            }else{
                //Agrego el producto al carrito
                carrito.push(producto);
                //Agrego contador de cantidad al producto clickado
                Object.assign(producto, {cantidad: 1});
                //Guardo el carrito en el localStorage
                Storage.guardar_storage("carrito", carrito);
            }
        }
    }
}

export {
    Carrito
}