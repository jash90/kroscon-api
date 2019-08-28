var express = require("express");
var router = express.Router();
const { LoanGame } = require("../../models");
const authorization = require("../auth/authorizationModSelf");
router.post("/", [authorization], function(req, res, next) {
  const now = new Date();
  LoanGame.update(
    {
      endLoan: now,
      deletedAt: null,
      hireUserId: req.body.hireUserId
    },
    { where: { id: req.body.loanGameId } }
  )
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
