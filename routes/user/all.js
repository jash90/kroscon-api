var express = require("express");
var router = express.Router();
const { User, Privilege } = require("../../models");
const authorization = require("../auth/authorizationAdmin");
router.get("/", [authorization], function(req, res, next) {
  User.findAll({
    include: [
      {
        model: Privilege
      }
    ],
    where: {
      deletedAt: null
    }
  })
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      res.json({ error });
    });
});
module.exports = router;
