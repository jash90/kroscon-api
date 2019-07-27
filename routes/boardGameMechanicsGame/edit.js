var express = require("express");
var router = express.Router();
const { BoardGameMechanicsGame } = require("../../models");
router.post("/", function(req, res, next) {
  BoardGameMechanicsGame.update({
    boardGameId: req.body.boardGameId,
    mechanicsGameId: req.body.mechanicsGameId,
    updatedAt: Date.now()
  })
    .then(item => {
      res.json({item});
    })
    .catch(error => {
      console.log({ error });
      res.json({ error });
    });
});

module.exports = router;
