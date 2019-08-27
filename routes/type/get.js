var express = require("express");
var router = express.Router();
const { Type } = require("../../models");
router.get("/:userId", function(req, res, next) {
  Type.findOne({
    where: {
      id: req.params.typeId,
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
