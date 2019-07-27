var express = require("express");
var router = express.Router();
const { TypeGame } = require("../../models");
router.post("/", function(req, res, next) {
  TypeGame.create({
    name: req.body.name,
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
