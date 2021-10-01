'use strict'; 

const BD_Usuarios = [
    {
        name: "Luca",
        last_name: "Rojas Massey",
        user_name: "LucaRM95",
        pass: "Luca24416628"
    },
    {
        name: "Fernando",
        last_name: "Pavón",
        user_name: "FerP94",
        pass: "Fer1234P"
    },
    {
        name: "Camila",
        last_name: "Viegas",
        user_name: "CamiV01",
        pass: "Cami12345V"
    },
    {
        name: "María José",
        last_name: "Rojas Massey",
        user_name: "MajoRM01",
        pass: "Majo24416628"
    }
];

/*
Indumentaria personalizadas (IP) - $1450
Indumentaria de MI (IMI) - $1150
Indumentaria de desarrolladores (ID) - $1250
Indumentaria cartoons (IC) - $1250
Indumentaria (E) - $950
*/

const BD_Productos = [
    {
        tipo: "IP",
        name: "Indumentaria Personalizada",
        precio: 1450,
        stock: 20
    },
    {
        tipo: "IMI",
        name: "Indumentaria de MI",
        precio: 1150,
        stock: 25
    },
    {
        tipo: "ID",
        name: "Indumentaria de desarrolladores",
        precio: 1250,
        stock: 10
    },
    {
        tipo: "IC",
        name: "Indumentaria de Cartoons",
        precio: 1250,
        stock: 5
    },
    {
        tipo: "E",
        name: "Estampados",
        precio: 950,
        stock: 100
    },
]

export {
    BD_Usuarios,
    BD_Productos
}