var express = require("express");
var router = express.Router();
const { MechanicsGame, BoardGameMechanicsGame } = require("../../models");
router.get("/", function(req, res, next) {
  BoardGameMechanicsGame.findAll({
    include: [
      {
        model: MechanicsGame
      }
    ]
  })
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      res.json({ error });
    });
});
module.exports = router;
