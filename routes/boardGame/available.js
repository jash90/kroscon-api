var express = require("express");
var router = express.Router();
const { Op } = require("sequelize");
const {
  LoanGame,
  BoardGame,
  BoardGameType,
  Type,
  BoardGameMechanic,
  Mechanic
} = require("../../models");
router.get("/", function(req, res, next) {
  LoanGame.findAll({
    attributes: [],
    include: [
      {
        model: BoardGame,
        include: [
          {
            model: BoardGameType,
            attributes: {
              exclude: [
                "id",
                "boardGameId",
                "createdAt",
                "updatedAt",
                "deletedAt"
              ]
            },
            include: [Type]
          },
          {
            model: BoardGameMechanic,
            attributes: {
              exclude: [
                "id",
                "boardGameId",
                "createdAt",
                "updatedAt",
                "deletedAt"
              ]
            },
            include: [Mechanic]
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
      res.json({ error });
    });
});
module.exports = router;
