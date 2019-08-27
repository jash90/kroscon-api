var express = require("express");
var router = express.Router();
const { Publisher } = require("../../models");
router.get("/:id", function(req, res, next) {
  Publisher.findOne({
    where: {
      id: req.body.publisherId,
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
