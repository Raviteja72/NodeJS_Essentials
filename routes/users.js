const router = require("express").Router();
const main = require("./main");

router.use("/users", (req, res) => {
  const names = main.name;
  res.render("details", {
    path: "/users",
    names: names,
  });
});

module.exports = router;
