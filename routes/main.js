const express = require("express");
const router = express.Router();
const names = [];

router.get("/", (req, res) => {
  //console.log("hi");
  res.render("form", {
    path: "/",
  });
});

router.post("/", (req, res) => {
  //console.log(req.body);
  names.push({ title: req.body.title });
  //console.log('title : ',req.body.title);
  res.redirect("/users");
});

exports.routes = router;
exports.name = names;
