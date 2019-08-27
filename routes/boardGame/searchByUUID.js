var express = require("express");
var router = express.Router();
const { Op } = require("sequelize");
const {
  BoardGame,
  BoardGameMechanic,
  BoardGameType,
  Type,
  Mechanic,
  Publisher
} = require("../../models");
router.get("/:uuid", function(req, res, next) {
  BoardGame.findOne({
    include: [
      {
        model: BoardGameType,
        include: [Type]
      },
      {
        model: BoardGameMechanic,
        include: [Mechanic]
      },
      {
        model:Publisher
      }
    ],
    where: {
        uuid: req.params.uuid
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
