var express = require("express");
var router = express.Router();
const { User, Privilege } = require("../../models");
const authorization = require("../auth/authorizationAdmin");
router.get("/:id", [authorization], function(req, res, next) {
  User.findOne({
    include: [
      {
        model: Privilege
      }
    ],
    where: {
      id: req.params.userId,
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
