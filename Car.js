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
        return `Tập đoàn  : ${this.family}\n` +
            `Tên xe    : ${this.name}\n` +
            `Giá       : ${this.price.toLocaleString("vi-VN")} VNĐ\n` +
            `Thành lập : ${this.getBirthDay()}`;
    }
};

console.log("=== Thông tin xe ===");
console.log(car.getFullInfor());
console.log("\nNgày thành lập:", car.getBirthDay());

let jsons = { "name": "Lamborghini", "price": 1000000000, "birth": { "year": 1963, "month": 10, "day": 31 }, "family": "Volkswagen" };
console.log("\n=== JSON Object ===");
console.log(jsons);