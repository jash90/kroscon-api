var express = require("express");
var router = express.Router();
const { User, Privilege } = require("../../models");
router.post("/", function(req, res, next) {
  User.findOne({
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Privilege
      }
    ],
    where: {
      email: req.body.email
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
