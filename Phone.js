let phone = {
    name: "iPhone 16 Pro Max",
    price: 34990000,
    brand: "Apple",
    specs: {
        ram: 8,
        storage: 256,
        screen: 6.9
    },
    releaseYear: 2024,

    getSpecs: function () {
        return `RAM: ${this.specs.ram}GB | Bộ nhớ: ${this.specs.storage}GB | Màn hình: ${this.specs.screen}"`;
    },

    getFullInfor: function () {
        return `Hãng      : ${this.brand}\n` +
            `Tên       : ${this.name}\n` +
            `Giá       : ${this.price.toLocaleString("vi-VN")} VNĐ\n` +
            `Năm ra mắt: ${this.releaseYear}\n` +
            `Cấu hình  : ${this.getSpecs()}`;
    }
};

console.log("=== Thông tin điện thoại ===");
console.log(phone.getFullInfor());
console.log("\nCấu hình:", phone.getSpecs());

let jsons = { "name": "iPhone 16 Pro Max", "price": 34990000, "brand": "Apple", "specs": { "ram": 8, "storage": 256, "screen": 6.9 }, "releaseYear": 2024 };
console.log("\n=== JSON Object ===");
console.log(jsons);
