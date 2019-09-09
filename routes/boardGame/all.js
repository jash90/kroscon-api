var express = require("express");
var router = express.Router();
const { Op } = require("sequelize");
const {
  BoardGame,
  Type,
  Mechanic,
  BoardGameType,
  BoardGameMechanic,
  Publisher,
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
      },
      {
        model: Publisher
      },
      {
        model: LoanGame
      }
    ],
    order: [
      ["id"],
      [LoanGame, "startLoan", "DESC NULLS LAST"],
      [LoanGame, "startLoan"]
    ],
    where: {
      deletedAt: null
    }
  })
    .then(items => {
      BoardGame.count({
        where: {
          deletedAt: null
        }
      }).then(count => {
        res.json({ count, items });
      });
    })
    .catch(error => {
      res.json({ error });
    });
});
module.exports = router;
