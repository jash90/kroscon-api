var express = require("express");
var router = express.Router();
const { Op } = require("sequelize");
const { BoardGame, LoanGame, User } = require("../../models");
const authorization = require("../auth/authorizationUser");
router.post("/", [authorization], function(req, res, next) {
  LoanGame.findAll({
    include: [
      {
        model: BoardGame
      }
    ],
    where: {
      deletedAt: null,
      userId: req.body.userId
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
