class Usuarios {

    constructor(user_name, user_lastName, user, pass){
        this.user_name = user_name;
        this.user_lastName = user_lastName;
        this.user = user;
        this.pass = pass;
    }

    editar_usuario(change_name, change_lastName, change_user, change_pass){

        this.user_name = change_name;
        this.user_lastName = change_lastName;
        this.user = change_user;
        this.pass = change_pass;

    }

    mostrar_cambios(){
        return `
            Nombre : ${this.user_name}
            Apellidos : ${this.user_lastName}
            Nombre de usuario : ${this.user}
        `
    }

}

class Productos {

    constructor(tipo, precio, stock, value){
        this.tipo = tipo;
        this.precio = precio;
        this.stock = stock;
        this.value = value;
    }

    editar_Productos(tipo, precio, stock, value){
        this.tipo = tipo;
        this.precio = precio;
        this.stock = stock;
        this.value = value;
    }

}

export {
    Usuarios,
    Productos
}