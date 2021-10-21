import { BD_Productos } from './_baseDatos.js'; 

class Carrito{


    agregarProducto(e){
        if(e.target.classList.contains("agregar-carrito")){
            const producto = e.target.parentElement.parentElement.parentElement;

            BD_Productos.find( p => {
                if( p.tipo === producto.id){
                    let save_products = [];

                    if(localStorage.length === 0 && save_products.length === 0){
                        save_products.push(p);
                        localStorage.setItem("carrito", JSON.stringify(save_products));
                    }else{
                        save_products = JSON.parse(localStorage.getItem('carrito'));
                        save_products.push(p);
                        localStorage.setItem("carrito", JSON.stringify(save_products));
                    }
                }
            })
        }
    }

    borrarProducto(e){
        const storage = JSON.parse(localStorage.getItem("carrito"));
        const del = storage.findIndex(item => item.tipo === e.target.id);
        
        storage.splice(del, 1);
        localStorage.setItem("carrito", JSON.stringify(storage));
    }
}

export {
    Carrito
}