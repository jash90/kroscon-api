var express = require("express");
var router = express.Router();
const { Event } = require("../../models");
router.get("/:id", function(req, res, next) {
  Event.findOne({
    where: {
      id: req.params.eventId,
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
