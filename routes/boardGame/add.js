var express = require("express");
var router = express.Router();
const {
  BoardGame,
  BoardGameMechanic,
  BoardGameType,
  Type,
  Mechanic
} = require("../../models");
const authorization = require("../auth/authorizationMod");
router.post("/", [authorization], function(req, res, next) {
  let mechanic = [];
  let types = [];
  if (req.body.types) types = JSON.parse(req.body.types);
  if (req.body.mechanic) mechanic = JSON.parse(req.body.mechanic);
  BoardGame.create({
    name: req.body.name,
    uuid: req.body.uuid,
    description: req.body.description,
    minPlayers: req.body.minPlayers,
    maxPlayers: req.body.maxPlayers,
    playingTime: req.body.playingTime,
    minAge: req.body.minAge,
    publisherId: req.body.publisherId,
    createdAt: Date.now()
  })
    .then(async boardGame => {
      for (let index = 0; index < types.length; index++) {
        const type = types[index];
        await BoardGameType.create({
          typeId: type.id,
          boardGameId: boardGame.id
        })
          .then()
          .catch(error => {
            res.json({ error });
          });
      }

      for (let index = 0; index < mechanic.length; index++) {
        const mechanic = mechanic[index];
        await BoardGameMechanic.create({
          mechanicId: mechanic.id,
          boardGameId: boardGame.id
        })
          .then()
          .catch(error => {
            res.json({ error });
          });
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
          }
        ],
        where: {
          id: boardGame.id
        }
      })
        .then(item => {
          res.json({ item });
        })
        .catch(error => {
          console.log({ error });
          res.json({ error });
        });
    })
    .catch(error => {
      console.log({ error });
      res.json({ error });
    });
});

module.exports = router;
