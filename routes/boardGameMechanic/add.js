var express = require("express");
var router = express.Router();
const { BoardGameMechanic } = require("../../models");
router.post("/", function(req, res, next) {
  BoardGameMechanic.create({
    boardGameId: req.body.boardGameId,
    mechanicId: req.body.mechanicId,
    createdAt: Date.now()
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
