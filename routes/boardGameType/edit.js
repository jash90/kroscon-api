var express = require("express");
var router = express.Router();
const { BoardGameType } = require("../../models");
router.post("/", function(req, res, next) {
  BoardGameType.update(
    {
      boardGameId: req.body.boardGameId,
      typeId: req.body.typeId
    },
    {
      where: {
        id: req.body.boardGameTypeId
      }
    }
  )
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
