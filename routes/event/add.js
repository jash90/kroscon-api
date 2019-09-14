var express = require("express");
var router = express.Router();
const { Event } = require("../../models");

router.post("/", function(req, res, next) {
  Event.create({
    name: req.body.name,
    start: req.body.start,
    end: req.body.end,
    description: req.body.description,
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
