var express = require("express");
var router = express.Router();
const { Op } = require("sequelize");
const {
  LoanGame,
  BoardGame,
  BoardGameTypeGame,
  TypeGame,
  BoardGameMechanicsGame,
  MechanicsGame
} = require("../../models");
router.get("/", function(req, res, next) {
  LoanGame.findAll({
    attributes: [],
    include: [
      {
        model: BoardGame,
        include: [
          {
            model: BoardGameTypeGame,
            attributes: {
              exclude: [
                "id",
                "boardGameId",
                "createdAt",
                "updatedAt",
                "deletedAt"
              ]
            },
            include: [TypeGame]
          },
          {
            model: BoardGameMechanicsGame,
            attributes: {
                exclude: [
                  "id",
                  "boardGameId",
                  "createdAt",
                  "updatedAt",
                  "deletedAt"
                ]
              },
            include: [MechanicsGame]
          }
        ]
      }
    ],
    where: {
      endLoan: { [Op.ne]: null },
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
