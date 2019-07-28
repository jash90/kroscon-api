var express = require("express");
var router = express.Router();
const { TypeGame } = require("../../models");
router.get("/", function(req, res, next) {
  TypeGame.findAll({})
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      res.json({ error });
    });
});
module.exports = router;
