var express = require("express");
var router = express.Router();
const { User } = require("../../models");
router.post("/", function(req, res, next) {
  User.update(
    {
      password: req.body.password,
      city: req.body.city,
      age: req.body.age,
      updatedAt: Date.now()
    },
    { where: { id: req.body.id } }
  )
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
