var express = require("express");
var router = express.Router();
const { Event } = require("../../models");
router.delete("/:id", function(req, res, next) {
  Event.update(
    {
      deletedAt: new Date()
    },
    {
      where: {
        id: req.params.eventId
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
