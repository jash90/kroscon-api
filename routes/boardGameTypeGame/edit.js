var express = require("express");
var router = express.Router();
const { BoardGameTypeGame } = require("../../models");
router.post("/", function(req, res, next) {
  BoardGameTypeGame.update({
    boardGameId: req.body.boardGameId,
    typeGameId: req.body.typeGameId,
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
