var express = require("express");
var router = express.Router();
const { BoardGameTypeGame } = require("../../models");
router.delete("/:id", function(req, res, next) {
  BoardGameTypeGame.update(
    {
      deletedAt: new Date()
    },
    {
      where: {
        id: req.params.id
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
