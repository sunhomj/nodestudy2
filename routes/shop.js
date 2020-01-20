const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

<<<<<<< HEAD
router.get("/cart", shopController.getCart);

=======
router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

>>>>>>> c9ebd50d1253976d873a52fc52dfaac1358802fd
router.get("/checkout", shopController.getCheckout);

module.exports = router;
