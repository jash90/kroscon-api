var express = require("express");
var router = express.Router();
const { Reservation } = require("../../models");
router.post("/", function(req, res, next) {
  Reservation.update(
    {
      userId: req.body.userId,
      boardGameId: req.body.boardGameId,
      tableId: req.body.tableId,
      time: req.body.time
    },
    {
      where: {
        id: req.body.reservationId
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
