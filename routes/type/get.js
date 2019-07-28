var express = require("express");
var router = express.Router();
const { Type } = require("../../models");
router.get("/:id", function(req, res, next) {
  Type.findOne({
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
