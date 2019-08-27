var express = require("express");
var router = express.Router();
const { Mechanic } = require("../../models");
router.get("/:id", function(req, res, next) {
  Mechanic.findOne({
    where: {
      id: req.params.mechanicId,
      deletedAt: null
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
