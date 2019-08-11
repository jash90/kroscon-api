var express = require("express");
var router = express.Router();
const { Op } = require("sequelize");
const {
  BoardGame,
  Type,
  Mechanic,
  BoardGameType,
  BoardGameMechanic,
  LoanGame
} = require("../../models");
router.get("/", function(req, res, next) {
  BoardGame.findAll({
    include: [
      {
        model: BoardGameType,
       include: [Type]
      },
      {
        model: BoardGameMechanic,
        include: [Mechanic]
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
      console.log(error);
      res.json({ error });
    });
});
module.exports = router;
