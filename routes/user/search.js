var express = require("express");
var router = express.Router();
const { User, Privilege } = require("../../models");
const authorization = require("../auth/authorizationAdmin");
router.post("/", [authorization], function(req, res, next) {
  User.findOne({
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Privilege
      }
    ],
    where: {
      email: req.body.email,
      deletedAt: null
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
