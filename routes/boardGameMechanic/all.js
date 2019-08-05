var express = require("express");
var router = express.Router();
const { Mechanic, BoardGameMechanic, BoardGame } = require("../../models");
router.get("/", function(req, res, next) {
  BoardGameMechanic.findAll({
    include: [
      {
        model: Mechanic
      },
      {
        model:BoardGame
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
