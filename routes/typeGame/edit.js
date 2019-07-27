var express = require("express");
var router = express.Router();
const { TypeGame } = require("../../models");
router.post("/", function(req, res, next) {
  TypeGame.update({
    name: req.body.name,
    updatedAt: Date.now()
  })
  .then(item => {
    res.json({ item });
  })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
