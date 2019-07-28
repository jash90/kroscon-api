var express = require("express");
var router = express.Router();
const { BoardGame, BoardGameMechanic, BoardGameType, Type, Mechanic } = require("../../models");
router.get("/:id", function(req, res, next) {
  BoardGame.findOne({
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
