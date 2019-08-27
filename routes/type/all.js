var express = require("express");
var router = express.Router();
const { Type } = require("../../models");
router.get("/", function(req, res, next) {
  Type.findAll({
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
