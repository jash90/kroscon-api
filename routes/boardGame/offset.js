var express = require("express");
var router = express.Router();
const { BoardGame } = require("../../models");
router.get("/:id", function(req, res, next) {
  BoardGame.findAndCountAll({
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
    limit: 100,
    offset: req.params.id * 100,
    order: ["id"]
  })
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      res.json({ error });
    });
});
router.get("/", function(req, res, next) {
  BoardGame.findAndCountAll({
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
    limit: 100,
    order: ["id"]
  })
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
