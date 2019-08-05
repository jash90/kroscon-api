var express = require("express");
var router = express.Router();
const { BoardGameMechanic } = require("../../models");
router.delete("/:boardGameMechanicId", function(req, res, next) {
  BoardGameMechanic.update(
    {
      deletedAt: new Date()
    },
    {
      where: {
        id: req.params.boardGameMechanicId
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
