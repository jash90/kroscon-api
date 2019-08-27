var express = require("express");
var router = express.Router();
const { Type } = require("../../models");
router.get("/:id", function(req, res, next) {
  Type.findAndCountAll({
    limit: 100,
    offset: req.params.id * 100,
    order: ["id"],
    where: {
      deletedAt: null
    }
  })
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      res.json({ error });
    });
});
router.get("/", function(req, res, next) {
  Type.findAndCountAll({
    limit: 100,
    order: ["id"],
    where: {
      deletedAt: null
    }
  })
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
