var express = require("express");
var router = express.Router();
const { Feedback } = require("../../models");
router.post("/", function(req, res, next) {
  Feedback.update(
    {
      userId: req.body.userId,
      boardGameId: req.body.boardGameId,
      loanGameId: req.body.loanGameId,
      rating: req.body.rating,
    },
    {
      where: {
        id: req.body.feedbackId
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
