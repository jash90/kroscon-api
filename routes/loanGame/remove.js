var express = require("express");
var router = express.Router();
const { LoanGame } = require("../../models");
const authorization = require("../auth/authorizationAdmin");
router.delete("/:id", [authorization], function(req, res, next) {
  LoanGame.update(
    {
      deletedAt: new Date()
    },
    {
      where: {
        id: req.params.loanGameId
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
