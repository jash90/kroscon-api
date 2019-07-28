var express = require("express");
var router = express.Router();
const { BoardGame, BoardGameMechanicsGame, BoardGameTypeGame, TypeGame, MechanicsGame, LoanGame } = require("../../models");
router.get("/:id", function (req, res, next) {
  LoanGame.findOne({
    include: [{
      model: BoardGame,
      include: [
        {
          model: BoardGameTypeGame,
          include: [TypeGame]
        },
        {
          model: BoardGameMechanicsGame,
          include: [MechanicsGame]
        }
      ],
    },
    {
      model: User
    }
    ],
    where: {
      id: req.params.id
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
