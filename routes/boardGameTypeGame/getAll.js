var express = require("express");
var router = express.Router();
const { TypeGame, BoardGameTypeGame } = require("../../models");
router.get("/", function(req, res, next) {
  BoardGameTypeGame.findAll({
    include: [
      {
        model: TypeGame
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
