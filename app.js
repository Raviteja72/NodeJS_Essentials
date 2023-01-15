const express = require("express");
const app = express();
const main = require("./routes/main");
const router = require("./routes/users");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(main.routes);
app.use(router);

app.use((req, res) => {
  res.status(404).send("<h1> PAGE NOT FOUND </h1>");
});
app.listen(3002);
