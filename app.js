// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const router = express.Router();
// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// const products = [];
// app.get('/admin/add-product', (req, res, next) => {
// 	res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
// }
// );
// app.post('/admin/add-product', (req, res, next) => {
// 	products.push({ title: req.body.title });
// 	res.redirect('/');
// });
// app.get('/', (req, res, next) => {
// 	const product = products;
// 	res.render('shop', { prods: product, pageTitle: 'Shop', path: '/' });
// });
// app.listen(3000);

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
