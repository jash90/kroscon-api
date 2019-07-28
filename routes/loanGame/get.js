var express = require("express");
var router = express.Router();
const { BoardGame, BoardGameMechanic, BoardGameType, Type, Mechanic, LoanGame } = require("../../models");
router.get("/:id", function (req, res, next) {
  LoanGame.findOne({
    include: [{
      model: BoardGame,
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
