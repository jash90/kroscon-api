var express = require("express");
var router = express.Router();
const { Lecture } = require("../../models");
router.get("/", function(req, res, next) {
  Lecture.findAll({
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
