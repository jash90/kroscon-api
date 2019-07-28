var express = require("express");
var router = express.Router();
const { MechanicsGame } = require("../../models");
router.post("/", function(req, res, next) {
  MechanicsGame.update({
    name: req.body.name,
  })
  .then(item => {
    res.json({ item });
  })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
