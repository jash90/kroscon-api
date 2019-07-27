var express = require("express");
var router = express.Router();
const { BoardGame, BoardGameTypeGame, BoardGameMechanicsGame } = require("../../models");
router.post("/", function(req, res, next) {
//   const types = JSON.parse(req.body.types);
//   const mechanics = JSON.parse(req.body.mechanics);
  BoardGame.update(
    {
      name: req.body.name,
      uuid: req.body.uuid,
      minPlayers: req.body.minPlayers,
      maxPlayers: req.body.maxPlayers,
      playingTime: req.body.playingTime,
      minAge: req.body.minAge,
      publisherId: req.body.publisherId,
      updateAt: Date.now()
    },
    {
      include: [
        {
          model: BoardGameTypeGame
        },
        {
          model: BoardGameMechanicsGame
        }
      ],
      where: { id: req.body.id }
    }
  )
    .then(item => {
      console.log(item);
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
