var express = require("express");
var router = express.Router();
const { User } = require("../../models");
router.get("/:id", function(req, res, next) {
  User.findOne({
    where: {
      id: req.body.id
    }
  })
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
