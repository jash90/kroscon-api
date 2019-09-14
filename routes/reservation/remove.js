var express = require("express");
var router = express.Router();
const { Reservation } = require("../../models");
router.delete("/:id", function(req, res, next) {
  Reservation.update(
    {
      deletedAt: new Date()
    },
    {
      where: {
        id: req.params.reservationId
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
