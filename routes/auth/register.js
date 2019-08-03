var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../../models");
router.post("/", async (req, res, next) => {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    city: req.body.city,
    age: req.body.age
  })
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
