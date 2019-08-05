var express = require("express");
var router = express.Router();
const { LoanGame } = require("../../models");
router.get("/:loanGameId", function(req, res, next) {
  const now =new Date();
  LoanGame.update(
    {
      endLoan: now,
      deletedAt: null
    },
    { where: { id: req.params.loanGameId } }
  )
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
