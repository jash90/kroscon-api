var express = require("express");
var router = express.Router();
const { Reservation } = require("../../models");
router.get("/", function(req, res, next) {
  Reservation.findAll({
    where: {
      deletedAt: null
    }
  })
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      res.json({ error });
    });
});
module.exports = router;
