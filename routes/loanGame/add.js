var express = require("express");
var router = express.Router();
const {
  LoanGame
} = require("../../models");
const authorization = require("../auth/authorizationModSelf");
router.post("/", [authorization],function(req, res, next) {
  LoanGame.create({
    userId: req.body.userId,
    hireUserId:req.body.hireUserId,
    boardGameId: req.body.boardGameId,
    startLoan: Date.now(),
    endLoan: null,
    createdAt: Date.now()
  })
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
