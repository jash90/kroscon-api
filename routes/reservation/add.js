var express = require("express");
var router = express.Router();
const { Reservation } = require("../../models");

router.post("/", function(req, res, next) {
  Reservation.create({
    userId: req.body.userId,
    boardGameId: req.body.boardGameId,
    tableId: req.body.tableId,
    time: req.body.time,
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
