var express = require("express");
var router = express.Router();
const { BoardGame, BoardGameMechanicsGame, BoardGameTypeGame, TypeGame, MechanicsGame } = require("../../models");
router.get("/:id", function(req, res, next) {
  BoardGame.findOne({
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
