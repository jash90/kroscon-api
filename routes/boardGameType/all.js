var express = require("express");
var router = express.Router();
const { Type, BoardGameType, BoardGame } = require("../../models");
router.get("/", function(req, res, next) {
  BoardGameType.findAll({
    include: [
      {
        model: Type
      },
      {
        model: BoardGame
      }
    ],
    where: {
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
