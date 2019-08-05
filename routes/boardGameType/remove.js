var express = require("express");
var router = express.Router();
const { BoardGameType } = require("../../models");
router.delete("/:boardGameTypeId", function(req, res, next) {
  BoardGameType.update(
    {
      deletedAt: new Date()
    },
    {
      where: {
        id: req.params.boardGameTypeId
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
