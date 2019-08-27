var express = require("express");
var router = express.Router();
const { BoardGameType } = require("../../models");
router.get("/:id", function(req, res, next) {
  BoardGameType.findAndCountAll({
    include: [
      {
        model: Type
      },
      {
        model: BoardGame
      }
    ],
    limit: 10,
    offset: req.params.id * 10,
    order: ["id"],
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
router.get("/", function(req, res, next) {
  BoardGameType.findAndCountAll({
    include: [
      {
        model: Type
      },
      {
        model: BoardGame
      }
    ],
    limit: 10,
    order: ["id"],
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
