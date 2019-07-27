var express = require("express");
var router = express.Router();
const { LoanGame } = require("../../models");
router.get("/", function(req, res, next) {
  LoanGame.update(
    {
      endLoan: Date.now(),
      updatedAt: Date.now()
    },
    { where: { id: req.body.id } }
  )
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
