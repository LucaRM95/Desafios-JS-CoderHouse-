export class FinalizarCompra {
    static finalizar(){
        
        const numero = $("#card-number").val();
        const titular = $("#titular-name").val();
        const expiracion = $("#expire").val();
        const CVC = $("#CVC").val();

        if(numero !== "" && titular !== "" && expiracion !== "" && CVC !== ""){
            alert(`
                Compra realizada con exito!!
                Muchas gracias por comprar en Mala Influencia.
            `)
            
            window.location = "../../sections/productos.html";
            localStorage.clear();
            
        }else{
            return alert("Los campos no pueden estar vacíos!!")
        }
    }
}