var express = require("express");
var router = express.Router();
const { BoardGameTypeGame } = require("../../models");
router.get("/:id", function(req, res, next) {
  BoardGameTypeGame.findOne({
    include: [
      {
        model: TypeGame
      }
    ],
    where: {
      id: req.params.id
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
