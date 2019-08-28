var express = require("express");
var router = express.Router();
const { BoardGame } = require("../../models");
const authorization = require("../auth/authorizationMod");
router.delete("/:boardGameId", [authorization], function(req, res, next) {
  BoardGame.update(
    {
      deletedAt: new Date()
    },
    {
      where: {
        id: req.params.boardGameId
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
