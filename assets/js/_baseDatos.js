'use strict'; 

const BD_Tiendas = [
    {
        name: "Mala Influencia - Merlo",
        address: "Juncal 291",
        location: "1722, Merlo, Buenos Aires.",
        phone: "Tel: 914-123-456",
        open_hour: ["Lun- Vie: 7am - 10pm", "Sáb-Dom.: 10:00am-5:00pm"],
        map_location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.6656546716877!2d-58.72637721637129!3d-34.67158683773438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbff759f1fa27%3A0x8a4ac50e4980743!2sJuncal%20291%2C%20B1722ESE%20Merlo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1629263450174!5m2!1ses-419!2sar",
    },
    {
        name: "Mala Influencia - Padua",
        address: "Ayacucho 49",
        location: "1718, Padua, Buenos Aires.",
        phone: "Tel: 914-123-456",
        open_hour: ["Lun- Vie: 7am - 10pm", "Sáb: 10:00am-5:00pm - Dom: Cerrado"],
        map_location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.525898071965!2d-58.701505399066065!3d-34.666674369634116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf87a82efbef%3A0xa5264a0a6c82bc03!2sAyacucho%2049%2C%20B1718%20San%20Antonio%20de%20Padua%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1629263285428!5m2!1ses-419!2sar",
    },
];

const BD_Productos = [
    {
        tipo: "IP",
        name: "Indumentaria Personalizada",
        foto: "../assets/img/MI-Indumentaria.jpg",
        title: "Choose your side",
        subtitle: "CHOOSE MALA INFLUENCIA",
        description: "Indumentaria con estampados creados por la propia Mala influencia, estate atento para lucir como un verdadero Mala Influencia!",
        talles: "XL, L, S",
        tags: ["Mala Influencia", "De la casa", "Diseños"],
        precio: 1450,
        stock: 20
    },
    {
        tipo: "IG",
        name: "Indumentaria de Gaming",
        foto: "../assets/img/gaming-img.png",
        title: "No cumplas propositos",
        subtitle: "DESBLOQUEA LOGROS",
        description: "Si lo tuyo es el gaming luci a la moda con tus marcas favoritas de gaming y hardware informático. Que no te averguence tu amor por la tecnología!",
        talles: "XXL, XL, L",
        tags: ["Intel", "Nvidia", "Gaming"],
        precio: 1150,
        stock: 25
    },
    {
        tipo: "ID",
        name: "Indumentaria de desarrolladores",
        foto: "../assets/img/WebDeveloperIndumentarie.jpg",
        title: "Si puedes imaginarlo",
        subtitle: "Puedes programarlo",
        description: "Si sos programador no podes dejar pasar la oportunidad de lucir tus lenguajes favoritos en todo lugar!",
        talles: "L, S, XS",
        tags: ["React", "NodeJS", "JavaScript"],
        precio: 1250,
        stock: 10
    },
    {
        tipo: "IC",
        name: "Indumentaria de Cartoons",
        foto: "../assets/img/MI_Indumentaria.jpg",
        title: "Que tus cartoons favoritos",
        subtitle: "TE ACOMPAÑEN A TODOS LADOS",
        description: "Si sos fanatico de Rick & Morty, Billy y Mandy o cualquier cartoon, que no te averguence caminar con ellos en tu ropa!",
        talles: "XXL, L, S",
        tags: ["RickAndMorty", "Cartoons", "BillyAndMandy"],
        precio: 1250,
        stock: 5
    },
]

export {
    BD_Productos,
    BD_Tiendas
}