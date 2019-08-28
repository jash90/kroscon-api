var express = require("express");
var router = express.Router();
const {
  BoardGame,
  BoardGameType,
  BoardGameMechanic,
  Type,
  Mechanic
} = require("../../models");
const { Op } = require("sequelize");
const authorization = require("../auth/authorizationMod");
router.post("/", [authorization], function(req, res, next) {
  let mechanics = [];
  let types = [];
  if (req.body.types) types = JSON.parse(req.body.types);
  if (req.body.mechanics) mechanics = JSON.parse(req.body.mechanics);
  BoardGame.update(
    {
      name: req.body.name,
      uuid: req.body.uuid,
      minPlayers: req.body.minPlayers,
      maxPlayers: req.body.maxPlayers,
      playingTime: req.body.playingTime,
      minAge: req.body.minAge,
      publisherId: req.body.publisherId
    },
    {
      where: { id: req.body.boardGameId }
    }
  )
    .then(async item => {
      let oldtypes = [];
      await BoardGameType.findAll({
        where: { boardGameId: Number(req.body.boardGameId) }
      })
        .then(item => {
          if (item.length > 0) oldtypes = item.map(t => t.typeId);
        })
        .catch(error => {
          res.json({ error });
        });

      let oldmechanics = [];
      await BoardGameMechanic.findAll({
        where: { boardGameId: Number(req.body.boardGameId) }
      })
        .then(item => {
          if (item.length > 0) oldmechanics = item.map(m => m.mechanicId);
        })
        .catch(error => {
          res.json({ error });
        });

      for (let index = 0; index < types.length; index++) {
        const type = Number(types[index]);
        await BoardGameType.findOrCreate({
          where: {
            typeId: type,
            boardGameId: Number(req.body.boardGameId)
          }
        }).catch(error => {
          res.json({ error });
        });
      }

      for (let index = 0; index < oldtypes.length; index++) {
        const type = Number(oldtypes[index]);
        if (!types.includes(type)) {
          BoardGameType.destroy({
            where: {
              id: type
            }
          }).catch(error => {
            res.json({ error });
          });
        }
      }

      for (let index = 0; index < mechanics.length; index++) {
        const mechanic = Number(mechanics[index]);
        await BoardGameMechanic.findOrCreate({
          mechanicId: mechanic,
          boardGameId: Number(req.body.boardGameId)
        }).catch(error => {
          res.json({ error });
        });
      }

      for (let index = 0; index < oldmechanics.length; index++) {
        const mechanic = Number(oldmechanics[index]);
        if (!mechanics.includes(mechanic)) {
          BoardGameMechanic.destroy({
            where: {
              id: mechanic
            }
          }).catch(error => {
            res.json({ error });
          });
        }
      }

      BoardGame.findOne({
        where: {
          id: Number(req.body.boardGameId)
        },
        include: [
          {
            model: BoardGameType,
            include: [Type]
          },
          {
            model: BoardGameMechanic,
            include: [Mechanic]
          }
        ]
      })
        .then(item => {
          res.json(item);
        })
        .catch(error => {
          res.json(error);
        });
    })
    .catch(error => {
      res.json(error);
    });
});

module.exports = router;
