var express = require("express");
var router = express.Router();
const { Type, BoardGameType } = require("../../models");
router.get("/", function(req, res, next) {
  BoardGameType.findAll({
    include: [
      {
        model: Type
      }
    ]
  })
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      res.json({ error });
    });
});
module.exports = router;
