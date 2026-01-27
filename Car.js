let car = {
    name: "Lamborghini",
    price: 1000000000,
    birth: {
        year: 1963,
        month: 10,
        day: 31
    },
    family: "Volkswagen",
    getBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },
    getFullInfor: function () {
        return this.family + "\n" + this.name + "\n" + this.price;
    }
};

let jsons = { "name": "Lamborghini", "price": 1000000000, "birth": { "year": 1963, "month": 10, "day": 31 }, "family": "Volkswagen" };