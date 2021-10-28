export class Orden {
    static cargar_orden = () => {
        const storage = JSON.parse(localStorage.getItem("carrito"));
        let IVA = 0; 
        let precio_IVA = 0;
        let total = 0;
        const envio = 750;

        storage.map( e => {
            total += (e.precio * e.cantidad);
            IVA = total*0.21 
            precio_IVA = total + IVA;

            $("#order-content").append(`
                <table class='order-table'>
                    <tbody>
                        <tr>
                        <td><img src='${e.foto}' style="width: 100%;"></img>
                        </td>
                        <td>
                            <br> <span class='thin'>${e.name}</span>
                            <br> ${e.subtitle}<br> <span class='thin small'> Cantidad: ${e.cantidad}<br><br></span>
                        </td>
                
                        </tr>
                        <tr>
                        <td>
                            <div class='price'>$${e.precio * e.cantidad}</div>
                        </td>
                        </tr>
                    </tbody>
                </table>
            `);
            $("#total-price").html(`
                <div class='total'>
                    <span style='float:left;'>
                        <div class='thin dense'>IVA 21%</div>
                        <div class='thin dense'>Envío</div>
                        TOTAL
                    </span>
                    <span style='float:right; text-align:right;'>
                        <div class='thin dense'>$${IVA}</div>
                        <div class='thin dense'>$${envio}</div>
                        $${Math.round(precio_IVA+envio)}
                    </span>
                </div>
            `)
        })
    }
}