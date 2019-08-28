var express = require("express");
var router = express.Router();
const {
  BoardGame,
  BoardGameMechanic,
  BoardGameType,
  Type,
  Mechanic,
  Publisher,
  LoanGame
} = require("../../models");
const sequelize = require("sequelize");
router.get("/:id", function(req, res, next) {
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
        model: LoanGame
      },
      { model: Publisher }
    ],
    limit: 10,
    offset: req.params.id * 10,
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
        model: LoanGame
      },
      { model: Publisher }
    ],
    limit: 10,
    order: [
      ["id"],
      ["LoanGames.startLoan", "DESC NULLS LAST"],
      ["LoanGames.startLoan"]
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
