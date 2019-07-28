var express = require("express");
var router = express.Router();
const {
  BoardGame,
  BoardGameType,
  BoardGameMechanic
} = require("../../models");
router.post("/", function(req, res, next) {
  //   const types = JSON.parse(req.body.types);
  //   const mechanic = JSON.parse(req.body.mechanic);
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
      include: [
        {
          model: BoardGameType
        },
        {
          model: BoardGameMechanic
        }
      ],
      where: { id: req.body.id }
    }
  )
    .then(item => {
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
          id: req.body.id
        }
      })
        .then(item => {
            console.log(item);
            res.json({ item });
        })
        .catch(error => {
          res.json({ error });
        });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
