var express = require("express");
var router = express.Router();
const { Op } = require("sequelize");
const {
  BoardGame,
  LoanGame,
  User
} = require("../../models");
router.get("/", function(req, res, next) {
  LoanGame.findAll({
    include: [
      {
        model: BoardGame
      },
      {
        model: User
      },
    ]
  })
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      console.log(error);
      res.json({ error });
    });
});
module.exports = router;
