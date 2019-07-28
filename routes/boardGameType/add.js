var express = require("express");
var router = express.Router();
const { BoardGameType } = require("../../models");
router.post("/", function(req, res, next) {
  BoardGameType.create({
    boardGameId: req.body.boardGameId,
    typeId: req.body.typeId,
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
