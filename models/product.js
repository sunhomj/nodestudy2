const fs = require("fs");
const path = require("path");
// root project path that can cover different OS system path patten
const p = path.join(path.dirname(process.mainModule.filename), "data", "product.json");

module.exports = class Product {
<<<<<<< HEAD
    constructor(t) {
        this.title = t;
    }

    save() {
=======
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = Math.random()
            .toString()
            .tofixed(2);
>>>>>>> c9ebd50d1253976d873a52fc52dfaac1358802fd
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
        fs.readFile(p, (err, fileContent) => {
            if (err) return cb([]);
            cb(JSON.parse(fileContent));
        });
    }
<<<<<<< HEAD
=======

    static findById(id, cb) {
        fs.readFile(p, (err, fileContent) => {
            if (err) return cb([]);
            cb(JSON.parse(fileContent));
        });
    }
>>>>>>> c9ebd50d1253976d873a52fc52dfaac1358802fd
};
