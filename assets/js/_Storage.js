export class Storage {
    static traer_storage() {
        return (localStorage.getItem("carrito") === null) ? [] : JSON.parse(localStorage.getItem("carrito"));
    }

    static guardar_storage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}