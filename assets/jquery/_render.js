
export class Orden {
    static cargar_orden = () => {
        const storage = JSON.parse(localStorage.getItem("carrito"));
        const envio = 750;
        
        storage.map( e => {
            const IVA = (e.precio * e.cantidad)* 0.21;
            const precio_IVA = (e.precio * e.cantidad) + IVA;
            const total = precio_IVA + envio;

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
                <div class='line'></div>
            `);
            $("#order-content").append(`
                <div class='total'>
                    <span style='float:left;'>
                        <div class='thin dense'>IVA 21%</div>
                        <div class='thin dense'>Envío</div>
                        TOTAL
                    </span>
                    <span style='float:right; text-align:right;'>
                        <div class='thin dense'>$${IVA}</div>
                        <div class='thin dense'>$${envio}</div>
                        $${total}
                    </span>
                </div>
            `)
        })
    }
}

/*
    <div class='total'>
        <span style='float:left;'>
            <div class='thin dense'>VAT 19%</div>
            <div class='thin dense'>Delivery</div>
            TOTAL
        </span>
        <span style='float:right; text-align:right;'>
            <div class='thin dense'>$68.75</div>
            <div class='thin dense'>$4.95</div>
            $435.55
        </span>
    </div>
*/