const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

// const errorController = require("./controllers/error");
const products = require('./controllers/products');

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(shopRoutes);

app.use(adminRoutes);
app.use(express.static(path.join(__dirname, "public")));


/** lkdfnd */


app.use(products.error);

app.listen(3000);
