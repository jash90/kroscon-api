var express = require("express");
var router = express.Router();
const { BoardGameType } = require("../../models");
router.get("/:id", function(req, res, next) {
  BoardGameType.findOne({
    include: [
      {
        model: Type
      },
      {
        model:BoardGame
      }
    ],
    where: {
      id: req.params.BoardGameTypeId
    }
  })
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
