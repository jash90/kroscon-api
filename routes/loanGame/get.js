var express = require("express");
var router = express.Router();
const { BoardGame, User, LoanGame } = require("../../models");
router.get("/:id", function(req, res, next) {
  LoanGame.findOne({
    include: [
      {
        model: BoardGame
      },
      {
        model: User
      }
    ],
    where: {
      id: req.params.loanGameId,
      deletedAt: null
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
