var express = require("express");
var router = express.Router();
const { User, Privilege } = require("../../models");
router.get("/:id", function(req, res, next) {
  User.findOne({
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Privilege
      }
    ],
    where: {
      email: req.params.email
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
