const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("shop/product-list", {
            prods: products,
            pageTitle: "All Products",
            path: "/products"
        });
    });
};

<<<<<<< HEAD
=======
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        console.log(product.find(p => p.id === prodId));
    });
    res.redirect("/");
};

>>>>>>> c9ebd50d1253976d873a52fc52dfaac1358802fd
exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("shop/index", {
            prods: products,
            pageTitle: "Shop",
            path: "/"
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart"
    });
};

<<<<<<< HEAD
=======
exports.getOrders = (req, res, next) => {
    res.render("shop/orders", {
        path: "/orders",
        pageTitle: "Your Orders"
    });
};

>>>>>>> c9ebd50d1253976d873a52fc52dfaac1358802fd
exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
        path: "/checkout",
        pageTitle: "Checkout"
    });
};
