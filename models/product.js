const fs = require("fs");
const path = require("path");
// root project path that can cover different OS system path patten
const p = path.join(path.dirname(process.mainModule.filename), "data", "product.json");

const getFileFromProduct = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) return cb([]);
        cb(JSON.parse(fileContent));
    });
};

module.exports = class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString();
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getFileFromProduct(cb);
    }

    static findById(id, cb) {
        getFileFromProduct(products => {
            let productFound = products.find(prod => prod.id === id);
            cb(productFound);
        });
    }
};
