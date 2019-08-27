var express = require("express");
var router = express.Router();
const { Mechanic } = require("../../models");
router.get("/", function(req, res, next) {
  Mechanic.findAll({
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
