var express = require("express");
var router = express.Router();
const { BoardGameMechanic, Mechanic } = require("../../models");
router.get("/:id", function(req, res, next) {
  BoardGameMechanic.findOne({
    include: [
      {
        model: Mechanic
      }
    ],
    where: {
      id: req.params.id
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
