var express = require("express");
var router = express.Router();
const {
  BoardGame,
  BoardGameMechanicsGame,
  BoardGameTypeGame,
  TypeGame,
  MechanicsGame
} = require("../../models");
router.post("/", function(req, res, next) {
  const types = JSON.parse(req.body.types);
  const mechanics = JSON.parse(req.body.mechanics);
  BoardGame.create({
    name: req.body.name,
    uuid: req.body.uuid,
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
        await BoardGameTypeGame.create({
          typeGameId: type.id,
          boardGameId: boardGame.id
        })
          .then()
          .catch(error => {
            res.json({ error });
          });
      }

      for (let index = 0; index < mechanics.length; index++) {
        const mechanic = mechanics[index];
        await BoardGameMechanicsGame.create({
          mechanicsGameId: mechanic.id,
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
            model: BoardGameTypeGame,
            include: [TypeGame]
          },
          {
            model: BoardGameMechanicsGame,
            include: [MechanicsGame]
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
