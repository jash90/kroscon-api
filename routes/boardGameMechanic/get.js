var express = require("express");
var router = express.Router();
const { BoardGameMechanic, Mechanic, BoardGame } = require("../../models");
router.get("/:id", function(req, res, next) {
  BoardGameMechanic.findOne({
    include: [
      {
        model: Mechanic
      },
      {
        model: BoardGame
      }
    ],
    where: {
      id: req.params.boardGameMechanicId
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
