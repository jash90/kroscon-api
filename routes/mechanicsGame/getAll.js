var express = require("express");
var router = express.Router();
const { MechanicsGame } = require("../../models");
router.get("/", function(req, res, next) {
  MechanicsGame.findAll({})
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      res.json({ error });
    });
});
module.exports = router;
