
export const PrecioDolar = (BD_Productos) => {
    const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
    let blue = 0;
    
    $.get(url, (res, req) => {
        if(req === "success"){
            res.forEach( element => {
                if(element.casa.nombre === "Dolar Blue"){
                    blue = parseInt(element.casa.venta);
                    BD_Productos.map( e => {
                        e.precio *= blue;
                    })
                }
            })
        }
    })

    return BD_Productos;
}

