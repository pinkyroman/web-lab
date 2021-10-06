const database = [
    { id: 1, name: "PA", price: 500, content: "PA is good." },
    { id: 2, name: "PB", price: 300, content: "PB is not so bad." },
    { id: 3, name: "PC", price: 100, content: "PC is bad." },
];

export default {
    fetch(id) { return database; },
    find(id) { return database.find(el => el.id == id); },
    asyncFind(id, callback) {
        setTimeout(() => {
            callback(database.find(el => el.id == id));
        }, 1000);
    },
}