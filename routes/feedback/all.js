var express = require("express");
var router = express.Router();
const { Feedback } = require("../../models");
router.get("/", function(req, res, next) {
  Feedback.findAll({
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
