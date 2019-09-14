var express = require("express");
var router = express.Router();
const { Event } = require("../../models");
router.get("/", function(req, res, next) {
  Event.findAll({
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
