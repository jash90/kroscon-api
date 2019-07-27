var express = require("express");
var router = express.Router();
const { Op } = require("sequelize");
const {
  BoardGame,
  TypeGame,
  MechanicsGame,
  BoardGameTypeGame,
  BoardGameMechanicsGame,
  LoanGame
} = require("../../models");
router.get("/", function(req, res, next) {
  BoardGame.findAll({
    include: [
      {
        model: BoardGameTypeGame,
        include: [TypeGame]
      },
      {
        model: BoardGameMechanicsGame,
        include: [MechanicsGame]
      },
      {
        model: LoanGame,
      }
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
