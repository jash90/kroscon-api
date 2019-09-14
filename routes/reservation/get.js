var express = require("express");
var router = express.Router();
const { Reservation } = require("../../models");
router.get("/:id", function(req, res, next) {
  Reservation.findOne({
    where: {
      id: req.params.reservationId,
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
