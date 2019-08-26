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
router.post("/", function(req, res, next) {
  var where = {};
  if (req.body.name) {
    where.name = {
      [Op.iLike]: `%${req.body.name}`
    };
  }

  if (req.body.uuid) {
    where.uuid = req.body.uuid;
  }

  if (req.body.minPlayers) {
    where.minPlayers = {
      [Op.gte]: req.body.minPlayers
    };
  }

  if (req.body.maxPlayers) {
    where.maxPlayers = {
      [Op.lte]: req.body.maxPlayers
    };
  }

  if (req.body.playingTime) {
    where.playingTime = {
      [Op.lte]: req.body.playingTime
    };
  }

  if (req.body.minAge) {
    where.minAge = {
      [Op.lte]: req.body.minAge
    };
  }

  if (req.body.publisherId) {
    where.publisherId = req.body.publisherId;
  }

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
    where: where
  })
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;